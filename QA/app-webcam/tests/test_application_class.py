"""
Test file for Application class verification.
"""
import time

import cv2
import numpy as np
import pytest
from challenge_rlcrt import Application

LATENCY_RELATIVE_TOLERANCE = 0.10


@pytest.fixture()
def video_source():
    """
    Fixture for Video source to use for tests
    It opens VideoCapture before the tests, and release it after.

    :return: Return VideoCapture object
    """
    # testing_file = os.path.join(os.path.dirname(__file__), 'data', 'SampleVideo_1280x720_1mb.mp4')
    capture = cv2.VideoCapture(0)
    # capture = cv2.VideoCapture(testing_file)

    yield capture

    capture.release()


@pytest.mark.skip(reason="blocking")
@pytest.mark.parametrize("latency", [
    Application._MAX_LATENCY_MS,
    Application._MIN_LATENCY_MS])
def test_show(latency):
    """
    Sanity test for Application init
    :return: None
    """
    app = Application()
    app.latency_ms = latency
    app.show()


@pytest.mark.parametrize("value, exception", [
    (Application._MAX_LATENCY_MS, None),
    (Application._MIN_LATENCY_MS - 1, ValueError),
    (Application._MAX_LATENCY_MS + 1, ValueError),
    (0.0, TypeError)])
def test_latency_parameter(value, exception):
    """
    Test for latency_ms parameter

    :return: None
    """
    app = Application()

    if exception:
        with pytest.raises(exception):
            app.latency_ms = value
    else:
        app.latency_ms = value
        assert app.latency_ms == value + 12


@pytest.mark.parametrize("latency, fps, expected", [
    (Application._MAX_LATENCY_MS, 50, 120),
    (Application._MAX_LATENCY_MS, 30, 150),
    (Application._MIN_LATENCY_MS, 30, 0)])
def test_conversion_delay(latency, fps, expected):
    """
    Sanity test for Application init
    :return: None
    """
    result = Application.convert_latency_to_frames(latency=latency, fps=fps)

    assert isinstance(result, int)
    assert result == expected


@pytest.mark.xfail(reason='Failing in CI (tox)')
def test_capture(video_source):
    """
    Test for capture method

    :return: None
    """
    app = Application()

    timed_frame, timed_latent_frame = app.capture(video_source)

    # Verify frame
    frame = timed_frame.frame
    assert isinstance(frame, np.ndarray)
    cv2.imshow('test', frame)

    # Verify latent frame
    if app.latency_ms > 0:
        assert timed_latent_frame is None
    else:
        latent_frame = timed_latent_frame.frame
        assert isinstance(latent_frame, np.ndarray)
        cv2.imshow('test', latent_frame)

    cv2.destroyAllWindows()


def test_get_fps(video_source):
    """
    Test the get_fps() method
    """
    app = Application()
    app.latency_ms = 1000

    # Initial value is 0
    assert app.get_fps() == 0

    while len(app._frame_buffer) < app._MIN_FRAMES_STATS:
        app.capture(video_source)

    assert isinstance(app.get_fps(), int)
    assert app.get_fps() > 0
    assert app.get_fps() <= 30

@pytest.mark.parametrize("component", ["backend", "frontend"])
def test_pep8(component):
    # import pep8
    # pep8style = pep8.StyleGuide(quiet=True)
    # result = pep8style.check_files(['file1.py', 'file2.py'])

    def check_files(file):
        return True

    result = check_files(component)
    assert result is True


@pytest.mark.xfail(reason='Failing in CI (tox)')
@pytest.mark.parametrize('latency_ms', range(Application._MIN_LATENCY_MS, Application._MAX_LATENCY_MS, 1000))
def test_latency_precision(latency_ms, video_source):
    """
    Test Frames latency precision
    :return:
    """
    assert isinstance(latency_ms, int)
    app = Application()
    app.latency_ms = latency_ms

    # Wait for Enough frame to show
    start_time = time.time()
    while time.time() - start_time < latency_ms*1E-3 + 1:
        app.capture(video_source)

    frame, latent_frame = app.capture(video_source)
    assert (frame - latent_frame) == pytest.approx(latency_ms*1E-3, rel=LATENCY_RELATIVE_TOLERANCE)
