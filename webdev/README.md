# Challenges: Web Developer

## Challenge 1: Plume display

This challenge is very close to what your first mission will look like working at GHGSat. This is thus a very good way for us to assess your skills, and for you to understand the basics of our business.

Write a web-app in Python3 allowing a client to:

* **Coordinates**: enter a set of latitude/longitude coordinates,
* **Imagery**: Display a satellite imagery map from Google Maps API or OpenStreetMap centered on given coordinates; this map should be a simple static image, no need to support panning or zooming; the map should represent approx. 10 x 5km (no need high-precision);
* **Upload** upload a PNG file plume.png is given as an example. This image represents a column of gas emission observed from one of our satellite, we call it a plume. It is 10 x 5km.
* **Overlay** this plume on the satellite imagery map displayed earlier, such that the 
plume image covers all the map;
* **Scale** add a capability to scale the image to the browser width,
* **Dynamic HTML** add capability to fold/unfold each elements of the frontend
* **API** add a REST API allowing to upload the image, set the coordinates, and GET the resulting overlaid image
* **Doc** document this API, and provide basic example usage
* **Test** add unit-test of your choice to validate the core functionality of this web service
* **Doc Generation**: add instructions on how to generate sphinx documentation for this API

Above items are normally listed in ascending order of complexity. Please complete in-order. It's ok not to complete all of them, make your best.

For simplicity, you can assume images to always be of that size. Note the use of PNG alpha channels.

Please make your best to complete this assignment within 72h. Please provide following elements with your answer:
* your source code pushed to a public repository (preferrably not as email attachment),
* a README describing how to build and install your web-app,
* a Dockerfile allowing to build and test your web-app,

Good Luck!

## Challenge 2: REST API

This challenge is very close to what your first mission will look like working at GHGSat. This is thus a very good way for us to assess your skills, and for you to understand the basics of our business.

Write a web API (no frontend) in Python3 allowing a client to:

* **Imagery**: Given some latitude/longitude coordinates, a user can downalod a satellite imagery map from Google Maps API or OpenStreetMap centered on given coordinates; this map should be a simple static image, no need to support panning or zooming; the map should represent approx. 10 x 5km (no need high-precision);
* **Overlay** the image plume.png (given as attachment) with the satellite imagery map, such that the plume image covers all the map; add an API so that user can download the resulting composite image.
* **API** add a REST API allowing to upload the image, set the coordinates, and GET the resulting overlaid image
* **Doc** document this API, and provide basic example usage
* **Test** add unit-test of your choice to validate the core functionality of this web service

Above items are normally listed in ascending order of complexity. Please complete in-order. It's ok not to complete all of them, make your best.

For simplicity, you can assume images to always be of that size. Note the use of PNG alpha channels.

Please make your best to complete this assignment within 72h. Please provide following elements with your answer:
* your source code pushed to a public repository (preferrably not as email attachment),
* a README describing how to run your web-service,

Good Luck!

## Challenge 3: Observation Management

This challenge is very close to what your first mission will look like working at GHGSat. This is thus a very good way for us to assess your skills, and for you to understand the basics of our business. We're looking for your ability to:

 - understand and leverage frameworks (like Django, Flask), libraries (that work with GIS data) and architectures (like REST)
 - create simple and clear solutions to complex problems
 - write maintainable code that others can understand and use


Write a web API (no frontend) in Python3 and Django2+ or Flask and [PostGIS](https://postgis.net/) allowing a user to:

 1. Target: create targets given some co-ordinates (lat/long/elevation) and a name
 2. Observation: create observations of a target given an image file and a timestamp of when the image was captured. You are free to use whatever image and format you want here as a placeholder
 3. Search 1: find all the targets within a given bounding box (co-ordinates for the four corners of a box) and return a list of them
 4. Search 2: find all the observations within a bounding box AND within a specific period of time and return a list of them
 5. Visualization: For search 1 and 2, provide a way to visualize the results, for example generate a KML file suitable for viewing in Google Earth or a page with google maps and an overlay
 
 Please use JSON as the input and output format for all your endpoints

In addition provide the following:

 1. Documentation for how the internals of the system work, how a user would interact with it and how to run it (English or French)
 2. Tests for the API
 3. A Docker container (or docker-compose.yml) that can run the application

We recognize the above is a lot of work, and we're not expecting everything to be completed, what we're looking for is your best effort. They are listed in order of complexity, so we recommend you complete them in order

Good Luck!
