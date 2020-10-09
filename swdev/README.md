# Challenges: Embedded Developer

These challenges are very close to what your first mission will look like working at GHGSat. This is thus a very good
way for us to assess your skills and methodology, and for you to understand our business logic and challenges.

If for any reason, you don't feel you will have the time required to complete this challenge and keep a life balance, we 
invite you to showcase a professional or personal project you are proud of. We provision 45 min  to discuss technically 
this project with you. It would be great - but not mandatory - if you can show us some code and describe your 
contributions.

We recognize the above is a lot of work, and we're not expecting everything to be completed, what we're looking for is 
your best effort. They are listed in order of complexity, so we recommend you complete them in order.

Please make your best to complete this assignment within 3 days. Please provide following elements with your answer:

* your source code pushed to a public repository (preferrably not as email attachment),
* a README describing how to use/run your solution

Good Luck!

## Challenge 1: S-expression parser

The objective here is to write an embedded application which parses a metadata file structure.

What you need:
- an ARM development board: Raspberry Pi, Beagleboard, ODroid, rooted Android phone, etc. If you are missing 
such hardware at home, look at ARM qemu emulator.
- the toolchain associated to this ARM platform, most of them are free to download on the web

Write a simple C or C++ program which:

* parses s-expression file given as input, it shall successfully parses [example.sexp](example.sexp).
* print on stdout each element, in a nested fashion, its data-type and value. Ordering is not important.
* write a Makefile or CMakefile to produce binaries for both x86 and ARM targets.
* validate your program runs well on an ARM board (Raspberry Pi, Beaglebone, your Android phone or tablet?). If you are missing 
such hardware or its associated toolchain at home, look at ARM qemu emulator or [Travis CI](https://docs.travis-ci.com/user/multi-cpu-architectures/) and run unit-tests against it.

Above items are normally listed in ascending order of complexity. It's ok not to complete all of them, make your best.

Provide following elements with your answer:
* your source code pushed to a public repository (e.g. github; **not** as email attachment),
* a README.md describing how to build your project,
* some instructions how to run it on the chosen hardware or emulator environment
* some unit-tests validating your parser against known patterns
* what would you do to improve this software if you were given more time?
