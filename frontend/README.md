# Frontend Challenges

These challenges are very close to what your first mission will look like working at GHGSat. This is thus a very good
way for us to assess your skills and methodology, and for you to understand our business logic and challenges.
If you don't feel you will have the time required to complete this challenge, we invite you to showcase a professional or personal frontend project you are proud of.
Prepare it and schedule a meeting with us to demo and review it, we'll want to see some code.

We recognize the above is a lot of work, and we're not expecting everything to be completed, what we're looking for is
your best effort. They are listed in order of complexity, so we recommend you complete them in order.
Please make your best to complete this assignment within 72h. Please provide following elements with your answer:

- your source code pushed to a public repository (preferrably not as email attachment),
- a README describing how to use/run your solution

Good Luck!

## Challenge 1: Observation Map in React

The goal of this challenge is to demonstrate your skills as a front end developer. We are looking for your ability to:

- design a web UI from scratch quickly
- manipulate both 2D maps and tables, make them easy and nice to use

Build a frontend **using React** for the following application:

GHGSat customers need a way to browse and explore our catalog of satellite observations. Given the observations.json provided as the data, build the following features

1.  **map:** build an application that displays these observations on a map
2.  **list:** display these observations as a list/table
3.  **filters:** allow the customer to filter the observations based on a date range, the type of sensor and observation description. Make this filtering occur on both the map and the list.
4.  **cart:** The customer also needs to be able to add observations they are interested in to a "cart". Create a view that let the user review the observations in their cart before checking out.
5.  **checkout:** When the customer is ready, they should be able to "checkout" this cart by submitting it to the backend server. Do not implement a backend-server, instead just post a list of observations IDs to localhost.

These are listed in order of importance, so try and complete as many as you can in the time allocated

### Sample data

You should have a copy of `observations.json`, which contains 1000 "observations" encoded as a
FeatureCollection in GeoJSON format (https://en.wikipedia.org/wiki/GeoJSON)

Each Feature also has the following properties:

- sensor: one of ["GHGSat-D", "GHGSat-C1", "GHGSat-C2", "GHGSat-C3"]
- observed_on: unix timestamp
- description: paragraph of random text

### Also looking for

We also want to see the stuff around your code, so please try to include the following:

- Documentation for how the internals of the system work, and how to run it (English or French)
- Tests of some shape

### Bonus!

As an added bonus (not required), add a way for customers to narrow their search down by
drawing an area on the map and filtering the list of observations down to those inside
the area

### README.md

this app is currently built on create-react-app 

Inside the app directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd app
  yarn start
