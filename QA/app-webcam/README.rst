challenge_rlcrt
===============

.. image:: https://img.shields.io/pypi/v/challenge_rlcrt.svg
    :target: https://pypi.python.org/pypi/challenge_rlcrt
    :alt: Latest PyPI version

.. image:: https://gitlab.com/ricklacerte/challenge/badges/master/pipeline.svg
   :target: https://gitlab.com/ricklacerte/challenge/pipelines
   :alt: Latest Gitlab CI build status

.. image:: https://gitlab.com/ricklacerte/challenge/badges/master/coverage.svg
   :target: https://gitlab.com/ricklacerte/challenge/pipelines
   :alt: Latest Gitlab CI coverage


The module display a Video Feed (From a webcam) with a specified latency.
The user can set a latency up to 5 seconds with a relative precision of 10%

Usage
-----
CLI
^^^
The module can be use by CLI

CLI Help
    You can use the Help from the CLI

        ``challenge --help``

    You can have command specific help by using

        ``challenge <cmd> --help``

    For exemple, here's the help for the show command

        ``challenge show --help``

Debug Mode
    At anytime you can see the debug logs in the console, by passing ``--debug`` before any commands.
    For example

        ``challenge --debug show``

Display latent feed
    To display live feed from cam and the latent frame, use the ``show`` command.
    Here's an example with a latency of 1 seconds with debug mode enable

        ``challenge --debug show --latency 1000``

    To exit press \`q\`


Installation
------------
Install the Python module with pip

   ``pip install challenge_rlcrt``

Requirements
^^^^^^^^^^^^
User must a Python 3 and pip installed.
User must have a Webcam.

This module is using *open_cv*

development
    the Python modules requirements needed are in requirements.txt file
    Create a virtual environment and install dependencies.

    ``pip install -r requirements.txt``


Authors
-------

`challenge_rlcrt` was written by `Rick Lacerte <bliblabla@gmail.com>`_.
