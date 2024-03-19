npm- Node Package Manager
## COMMANDS:
    >>>>VS CODE COMMANDS (INITIALIZE GIT REPO)
    >>git init
    >>git remote add origin <git repo url>

    >>>>TERMINAL
    >>npm init, here nmp stands for NODE PACKAGE MANAGER

## STATUS CODES:
    >>200 SERIES- CRED OPERATIONS (CREATE, READING, UPDATING, DELETION)
    >>200 - SUCCESS RESPONSE
    >>300 - REDIRECTION MSG
    >>400 - SERVER ERRORS 
    >>500 - INTERNAL ERRORS
    >>201 - FOR CREATION
    >>202 - FOR REQUEST ACCEPTANCE
    >>203 - FOR NON-AUTHENTICATE INFO
    >>404 - SERVER NOT FOUND
    >>400 - BAD REQUEST
    >>401 - UNAUTHORISED
    >>501 - NOT IMPLEMENTED

THE APPLICATION WILL BE HOSTED ON LOCAL HOST IN OUR CASE ON PORT:8081

TO RUN THE APPLICATION: node server.js
http://localhost:8081

**EVERYTIME WE CANNOT JUST START THE SERVER BY USING THE COMMAND- node server.js, SINCE IT'S TIDIOUS TO DO SO.
INSTEAD WE MAKE CHNAGES TO OUR package.json FILE, WHERE, IN THE SCRIPTS SECTION WE WRITE- "start": "node server.js". THIS WILL AUTOMATICALLY START THE SERVER EVERYTIME WE GIVE THE COMMAND- npm start

****** "start" => it is a PRE-DEFINED keyword ******

FOR RUNNING THE COMMANDS THAT ARE NOT PRE-DEFINED, WE NEED TO GIVE AN EXTRA KEYWORD i.e for example- we defined the following in the json file => "me": "node server.js",
so to run this, we need this command => "npm run me" ==> THIS COMMAND WILL RUN THE SERVER WITHOUT ANY ERRORS.

AT TIMES WE NEED TO DEPEND ON THE THIRD PARTY PACKAGES, SO FOR DOING THIS WE NEED TO LOG THEM IN THE package.json FILE.

There are two types of dependency packages, namely- 1.DEPENDENCIES
                                                    2.DEVELOPER'S DEPENDENCIES
1.DEPENDENCIES- mainly used by thr developers and the clients
1.DEVELOPER'S DEPENDENCIES- mainly used by the developers only.

As a developer, we'll be appending many things in our server as per the need and it's very tidious for us to kill and restart the server for every append. SO TO AVOID THE THINGS LIKE THIS, WE USE A PACKAGE CALLED AS "nodemon".

to install nodemon, run this command: npm i nodemon