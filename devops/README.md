# Challenges: DevOps 

These challenges are very close to what your first mission will look like working at GHGSat. This is thus a very good
way for us to assess your skills and methodology, and for you to understand our business logic and challenges.

If for any reason, you don't feel you will have the time required to complete this challenge and keep a life balance, we 
invite you to showcase a professional or personal project you are proud of. We usually provision 60 to 90 minutes to
discuss technically this project with you. It would be great - but not mandatory - if you can show us some code and 
describe your contributions.

We recognize the above is a lot of work, and we're not expecting everything to be completed, what we're looking for is 
your best effort. They are listed in order of complexity, so we recommend you complete them in order.

Please make your best to complete this assignment within 72h. Please provide following elements with your answer:

* your source code pushed to a public repository (preferrably not as email attachment),
* a README describing how to use/run your solution

Good Luck!

## Challenge 1: Scale Rotation

You have been given a python program that does ADVANCED IMAGE PROCESSING, but
sadly it runs a bit slowly and you have a large DATASET to process.

Please create a SYSTEM for processing this dataset in PARALLEL on at least 2 machines

You will need to spawn these machines, distribute the data and collect the results

We would like to see the following:

- A Dockerfile for this program
- Some automated way to build a cluster of machines
  - eg: Kubernetes, AWS CloudFormation, Ansible, custom scripts
- An automatic deploy process of the application to the cluster
- A way for a client machine to distribute the input dataset to the cluster
- A way to combine the output from the cluster into the output directory of a client machine
- Documentation explaining the system and your thought process

As a bonus the following would be impressive to see:

- Monitoring
- Error reporting
- Log aggregation
- Improved python install process

Please send us any configuration files, scripts and code that you write for this
challenge. You will also be asked to give a short demonstration / overview
of your work after the challenge is over (usually 30 min).

The choice of cloud provider / setup is up to you, please choose whatever
you are most comfortable with. That being said, in order to make your life
a bit easier, we provisioned login credentials for you on our AWS account,
please reach-out to us on hr@ghgsat.com.

### Process.py

This program uses _python 3.8_

The program takes 2 arguments an input directory, where the images from the
dataset are located, and output directory where the results of the image
processing are saved, you can execute like so:

```
python process.py ./dataset ./output
```

### Dataset

All images in dataset/ are from https://commons.wikimedia.org/wiki/Category:Curtis%27s_Botanical_Magazine,_Volume_26
and are in the public domain.
