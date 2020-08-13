# Frontend Challenge

This challenge is very close to what your first mission will look like working at GHGSat. This is thus a very good way for us to assess your skills, and for you to understand the basics of our business. If you cannot commit to the effort needed here, please prepare a frontend project you worked on, and schedule a meeting with us to demo and review it with us, we'll want to see some code.
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

These are listed in order of importance, so try and complete as many as you can in the time alloted

## Sample data

You should have a copy of `observations.json`, which contains 1000 "observations" encoded as a
FeatureCollection in GeoJSON format (https://en.wikipedia.org/wiki/GeoJSON)

Each Feature also has the following properties:

- sensor: one of ["GHGSat-D", "GHGSat-C1", "GHGSat-C2", "GHGSat-C3"]
- observed_on: unix timestamp
- description: paragraph of random text

## Also looking for

We also want to see the stuff around your code, so please try to include the following:

- Documentation for how the internals of the system work, and how to run it (English or French)
- Tests of some shape

## Bonus!

As an added bonus (not required), add a way for customers to narrow their search down by
drawing an area on the map and filtering the list of observations down to those inside
the area
