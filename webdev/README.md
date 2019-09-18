# Challenges

## Challenge 1: Plume display

This challenge is very close to what your first mission will look like working at GHGSat. This is thus a very good way for us to assess your skills, and for you to understand the basics of our business.

Write a web-app in Python3 allowing a client to:

* **Enter a set of latitude/longitude coordinates**,
* **Display a satellite imagery map** from Google Maps API or OpenStreetMap centered on given coordinates; this map should be a simple static image, no need to support panning or zooming; the map should represent approx. 10 x 5km (no need high-precision);
* **Upload a PNG file** plume.png is given as an example. This image represents a column of gas emission observed from one of our satellite, we call it a plume. It is 10 x 5km.
* **Overlay** this plume on the satellite imagery map displayed earlier, such that the 
plume image covers all the map;

For simplicity, you can assume images to always be of that size. Note the use of PNG alpha channels.

Please make your best to complete this assignment within 72h. Please provide following elements with your answer:
* your source code pushed to a repository (either public or private), preferrably not by email,
* a README describing how to build and install your web-app,
* a Dockerfile allowing to build and test your web-app,

