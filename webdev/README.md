# Challenges

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
* **Doc** add README instructions on how to generate sphinx documentation for this API
* **Test** add unit-test of your choice to validate the core functionality of this web service

Above items are normally listed in ascending order of complexity. Please complete in-order. It's ok not to complete all of them, make your best.

For simplicity, you can assume images to always be of that size. Note the use of PNG alpha channels.

Please make your best to complete this assignment within 72h. Please provide following elements with your answer:
* your source code pushed to a public repository (preferrably not as email attachment),
* a README describing how to build and install your web-app,
* a Dockerfile allowing to build and test your web-app,

Good Luck!