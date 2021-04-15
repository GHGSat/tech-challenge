"""
Test file for Application CLI
"""
import pytest
from click.testing import CliRunner
from challenge_rlcrt.__main__ import cli


@pytest.mark.skip(reason="blocking, need Webcam")
@pytest.mark.parametrize('latency', range(0, 1001, 500))
def test_cli_latency_sanity(latency):
    """
    Sanity test for show method with latency.

    :param latency: list parameters to be tests
    :return: None
    """
    runner = CliRunner()
    result = runner.invoke(cli, ['show', '--latency', latency])
    assert result.exit_code == 0
