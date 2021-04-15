"""
Module containing the Application Class

"""
import logging
from collections import deque
import cv2
import numpy as np
import time


class TimedFrame:
    """
    Create a time stamp frame.

    :param frame: the frame (image)
    """
    def __init__(self, frame):
        """

        :param frame:
        """
        self._time = time.time()
        self._frame = frame

    @property
    def time(self):
        """
        :return: time stamp of the frame in seconds
        """
        return self._time

    @property
    def frame(self):
        """

        :return: the frame (image)
        """
        return self._frame

    def __sub__(self, other):
        """
        Getting the time difference between two frames

        :param other:
        :return: time difference between two TimedFrame Instance
        """
        if not isinstance(other, TimedFrame):
            raise TypeError("Instance should be a TimedFrame Object")
        return self.time - other.time


class Application:
    """
    Application Main class

    application that captures a generic camera stream (such as a webcam)
    and displays it on the screen.

    the application the same stream with a *user-defined* latency that
    delays the rendering.

    The latency is configurable
    """
    _DEFAULT_LATENCY_MS = 0
    _MIN_LATENCY_MS = 0
    _MAX_LATENCY_MS = 5000
    _MIN_FRAMES_STATS = 5

    def __init__(self, latency_ms=_DEFAULT_LATENCY_MS):
        self._latency_ms = latency_ms
        self._frame_buffer = deque()

    @property
    def latency_ms(self):
        """
        getter for latency_ms

        :return: current set latency in milliseconds
        """
        return self._latency_ms

    @latency_ms.setter
    def latency_ms(self, value):
        """
        Setter for latency_ms

        :param value: the latency value (in milliseconds) to be set.
        :return: None
        """
        if not isinstance(value, int):
            raise TypeError("The latency value must be an integer")

        if value > self._MAX_LATENCY_MS or value < self._MIN_LATENCY_MS:
            raise ValueError("The latency value must be between [{min} ... {max}]".format(
                min=self._MIN_LATENCY_MS,
                max=self._MAX_LATENCY_MS))
        self._latency_ms = value

    @staticmethod
    def convert_latency_to_frames(latency, fps):
        """
        Convert the latency in ms into a number of frames
        :param latency: latency to be converted (in milliseconds)
        :param fps: Number of Frame per seconds of the video
        :return: Number of frames corresponding to the latency
        """
        result = round(latency*1E-3*fps)
        return result

    def show(self, source=0):
        """
        Showing the Input Video with a second image with the specified latency.
        To exit, hit key 'q'

        :return: None
        """
        capture = cv2.VideoCapture(source)

        while True:
            timed_frame, timed_latent_frame = self.capture(source=capture)

            # Display black screen for latent_frame when there's none
            if timed_latent_frame is None:
                timed_latent_frame = TimedFrame(np.zeros(timed_frame.frame.shape, timed_frame.frame.dtype))

            frames_delay = timed_frame - timed_latent_frame

            logging.debug('frames delay : %0.6f seconds', frames_delay)
            logging.debug('fps : %0.2f ', self.get_fps())

            # Display frame, frame latent side by side
            result_image = np.hstack((timed_frame.frame, timed_latent_frame.frame))

            # Add FPS display
            font = cv2.FONT_HERSHEY_SIMPLEX
            cv2.putText(result_image,
                        'FPS : {}'.format(self.get_fps()),
                        (30, 50),
                        font,
                        0.7,
                        (0, 0, 0))

            # Update the image shown
            cv2.imshow('frame', result_image)

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

        # When everything done, release the capture
        capture.release()
        cv2.destroyAllWindows()

    def capture(self, source):
        """
        Capture a frame from the Video capture source.

        :param source: A VideoCapture instance ready to read frame from
        :return: (frame, frame_latent) frame is the latest frame read from Video source,
                frame_latent is a frame delayed by the latency_ms value, if no frame is available
                yet, frame_latent will be None
        """
        assert source.isOpened()

        # Calculate Number of Frames to be delayed
        frames_delay = self.convert_latency_to_frames(
            latency=self.latency_ms,
            fps=self.get_fps() if self.get_fps() > 0 else source.get(cv2.CAP_PROP_FPS))

        # Get current frame
        _, frame = source.read()
        timed_frame = TimedFrame(frame=frame)
        self._frame_buffer.append(timed_frame)

        # Get latent frame from frame_buffer
        frame_latent = None
        if len(self._frame_buffer) >= frames_delay:
            frame_latent = self._frame_buffer.popleft()

        return timed_frame, frame_latent

    def get_fps(self):
        """
        Calculate the Frame per seconds from the _frame_buffer.

        :return: (float) Frame per seconds value
        """

        if len(self._frame_buffer) < self._MIN_FRAMES_STATS:
            return 0

        delay = self._frame_buffer[-1] - self._frame_buffer[0]
        fps = round(len(self._frame_buffer) / delay)
        return fps
