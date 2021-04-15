# Challenges: QA Analyst

These challenges are very close to what your first mission will look like working at GHGSat. This is thus a very good
way for us to assess your skills and methodology, and for you to understand our business logic and challenges.

If for any reason, you don't feel you will have the time required to complete this challenge and keep a life balance, we 
invite you to showcase a professional or personal project you are proud of. We provision 45 min to discuss technically 
this project with you. It would be great if you can show us some code and describe your contributions.

Please **select one and only one challenge** from the list below, do not try to complete all of them. We recognize each challenge's requirements are a lot of work, and we're not expecting everything to be completed, do your best. Requirements are listed in order of complexity, so we recommend you complete them in order.

Please make your best to complete this assignment within 3 days.

Good Luck!

## Challenge 1: Validate a webcam app

The development team you are working with has responded to following requirements with the code in `app-webcam/` folder.
Here are your tasks for this challenge:
1. analyze the requirements
2. analyze the built-in tests and report on the current test coverage
3. validate the application from 3 perspectives: unit-test, integration-test and acceptance testing
4. build a comprehensive test report
5. identify which requirements are met, which are not
You are free to use any method or tools to complete these tasks.

Here are the application requirements:
- application shall be written in python3.8 programming language, and respect PEP8
- the app shall display a live webcam stream to the user,
- and should allow user to select a configurable frame-rate of 5-60fps
- real-time frame-rate shall be displayed on application frontend
- the app shall display a second stream from the same camera, but with a configurable delay/latency of 100-10000ms
- the application shall be cross-platform on Linux and Windows
- the app should allow the user to crop image with a configurable Region Of Interest (ROI)
- the app shall package built-in unit-tests, covering 100% of the mandatory requirements
- a docker container must be made available to the user for easy deployment
- the app shall show helper command keys to the user on the application frontend, and require no external documentation