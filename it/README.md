# Challenges: IT 

These challenges are very close to what your first mission will look like working at GHGSat. This is thus a very good
way for us to assess your skills and methodology, and for you to understand our business logic and challenges.

If for any reason, you don't feel you will have the time required to complete this challenge and keep a life balance, we 
invite you to showcase a professional or personal project you are proud of. If your schedule allow, we provision 30
minutes to discuss technically this project with you.

Please **select one and only one challenge** from the list below, do not try to complete all of them. We recognize each challenge's requirements are a lot of work, and we're not expecting everything to be completed, do your best. Requirements are listed in order of complexity, so we recommend you complete them in order.

Please make your best to complete this assignment within 48h. Please provide following elements with your answer:

* a clear log of your activity, changes that were made, and what's left.

Good Luck!

## Challenge 1: Messaging server refuses to start

Your colleague in IT just deployed a new Instant Messaging server yesterday: RocketChat. It is not yet in production, i.e. not accessible by employees. Unfortunately, the server rebooted and RocketChat no longer works as expected. Your colleague 
is away for the week, you need to take-over from here. The service consists of a RocketChat instance served by Apache and paired with a MongoDB database.

- credentials: shall have been commmunicated to you. Otherwise communicate with sysadmin@ghgsat.com.
- config: there may be multiple problems in its configuration. Can you spot and fix them?
- permanent: how do you ensure the problems are fixed permanently and won't occur tomorrow?
- backup: the server database needs a proper backup strategy. Your colleague left a note to store these backups in
`/backup-nfs` on the server. Can you configure it and validate restoration works as expected?
- doc: finally your IT department value clear documentation and procedure. Can you write a clear documentation
describing:
  - how to configure and test the backup mechanism
  - a description of what you would improve on this service (deployment, backup, ...)?
