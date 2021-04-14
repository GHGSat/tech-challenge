# Challenges: Web Developer Payload-Planner

These challenges are very close to what your first mission will look like working at GHGSat. This is thus a very good
way for us to assess your skills and methodology, and for you to understand our business logic and challenges.

If for any reason, you don't feel you will have the time required to complete this challenge and keep a life balance, we 
invite you to showcase a professional or personal project you are proud of. We provision 45 min  to discuss technically 
this project with you. It would be great - but not mandatory - if you can show us some code and describe your 
contributions.

Please **select one and only one challenge** from the list below, do not try to complete all of them. We recognize each challenge's requirements are a lot of work, and we're not expecting everything to be completed, do your best. Requirements are listed in order of complexity, so we recommend you complete them in order.

Please make your best to complete this assignment within 3 days. Please provide following elements with your answer:

* your source code pushed to a public repository (preferrably not as email attachment),
* a README describing how to deploy, run and test your solution

Good Luck!

## Challenge 1: Satellite pass prediction

In this challenge, you are asked to try predicting when a satellite will pass over a given ground site.

An important part of satellite operations is knowing when a satellite will pass over a given point on the earth. Let's call these points *sites*. We can use this information to determine, for example, when a given site can be seen from a given satellite. Another interesting use case is to know when a satellite will pass over a ground station.

In this challenge, we will ask you to create a web application that can correctly predict when a spacecraft will pass over a certain site. Although it might seem challenging at first, it is greatly simplified by using a library like [Orekit](https://www.orekit.org/).

### Requirements

Build a web application that fulfills the following criteria:

- Written in Java, Kotlin, Scala or any other JVM language
- Allows the user to upload a list of Two-line element sets [TLEs](https://en.wikipedia.org/wiki/Two-line_element_set). Each TLE should have the ability to add a label or satellite name to the satellite. These files should be validated and rejected if invalid.
- Allows the user to add target sites (lat/lon points) through an interface with inputs for **latitude**, **longitude** and **site name**,
- Allow the user to upload sites with a CSV file
- When submitted, displays the start date and end date of overhead passes for the given site in a table.
  - An *overhead pass* for our purposes will be any time the elevation angle between an site and a satellite is greater than 0. [This website](https://www.celestis.com/resources/faq/what-are-the-azimuth-and-elevation-of-a-satellite/) provides a pretty good overview of what the elevation angle means.
- BONUS: The application can filter the passes on other criteria. Examples could include: sun angle (filter out passes without any sunlight), cross-track angle (projection of position vector of satellite onto the plane perpindicular to the orbital plane) within a certain range, cloud coverage (using information fetched from an external weather API), etc. This filter could be applied before calculating the passes or after, depending on your preference.

### Tips

- Read the Orekit documentation carefully, you will find many useful tips there
- Orekit needs some initialization data to be run. See the [FAQ](https://www.orekit.org/site-orekit-10.3/faq.html), especially the section *Runtime errors*.
- Testing the accuracy of your predictor can be done through the website [Heavens Above](https://heavens-above.com/main.aspx). You can compare the accuracy of the your predictions of significant spacecrafts like the ISS with theirs using the same TLE (see the page *orbit* to see the TLE being used for their predictions). They should be quite similar.
