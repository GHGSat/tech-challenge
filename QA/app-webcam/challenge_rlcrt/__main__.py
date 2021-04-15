"""
The CLI for the challenge_rlcrt module
"""
import click
from . import Application
import logging


@click.group()
@click.option('--debug',
              default=False,
              is_flag=True,
              help="Use this flag before any command to show debug logs"
              )
def cli(debug):
    """
    CLI for challenge_rlcrt

    type --help for command description.
    :return:
    """
    if debug:
        logging.basicConfig(level=logging.DEBUG)


@cli.command(help="Display video cam and a delayed feed by user value. To exit press 'q'")
@click.option('--latency',
              default=0,
              type=click.IntRange(min=Application._MIN_LATENCY_MS,
                                  max=Application._MAX_LATENCY_MS),
              help='delayed feed latency from the source in milliseconds [{min} .. {max}]'.format(
                  min=Application._MIN_LATENCY_MS,
                  max=Application._MAX_LATENCY_MS))
def show(latency):
    """
    Open a window with the current input of the cam and a second display delayed by latency value

    :param latency: second display latency from the source in milliseconds
    :return:
    """
    app = Application()
    app.latency_ms = latency
    app.show()
