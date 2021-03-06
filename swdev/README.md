# Challenges: Embedded Developer

These challenges are very close to what your first mission will look like working at GHGSat. This is thus a very good
way for us to assess your skills and methodology, and for you to understand our business logic and challenges.

If for any reason, you don't feel you will have the time required to complete this challenge and keep a life balance, we 
invite you to showcase a professional or personal project you are proud of. We provision 45 min  to discuss technically 
this project with you. It would be great - but not mandatory - if you can show us some code and describe your 
contributions.

Please **select one and only one challenge** from the list below, do not try to complete all of them. We recognize each challenge's requirements are a lot of work, and we're not expecting everything to be completed, do your best. Requirements are listed in order of complexity, so we recommend you complete them in order.

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


## Challenge 2: Image Registration

The objective here is to align a tuple of RGB and IR images on an ARM platform.

Here are the requirements:
- write a C++ application which:
  - opens and reads the two images [hill-rgb-0007.png](datasets/hill-rgb-0007.png) and [hill-ir-rot-0007.png](datasets/hill-ir-rot-0007.png)
  - allow user to crop image with a configurable ROI
  - align/register the two cropped images together using OpenCV.
  - save the aligned version of the images with a `-aligned.png` suffix
  - save the matching keypoint file between the two input images, similar to [matching-keypoints.jpg](datasets/matching-keypoints.jpg)
- unit-test: develop some unit-tests to validate your app's main functionalities
- ARM: download and cross-compile the latest **stable** version of OpenCV. Build it for ARM platform. 
- unit-tests: validate your unit-tests run fine on this ARM platform.
- container: create a docker image that can successfully run your unit-tests

Above items are normally listed in ascending order of complexity. It's ok not to complete all of them, make your best.

Provide following elements with your answer:
* your source code pushed to a public repository (e.g. github; **not** as email attachment),
* a README.md describing how to build your project,
* some instructions how to run it on the chosen hardware or emulator environment
* some unit-tests validating your parser against known patterns
* what would you do to improve this software if you were given more time?