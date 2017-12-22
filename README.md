# MEAN Stack LunchApp
An app to organize communal cooking activities, built with the MEAN stack.

## Repo
_github.com/k-jahn/meanLunch_

## Backend
built with:
mongoDb as database
mongoose as ODM
Express as API framework

runs on node.js - API (hopefully) written in the RESTful style.

### features implemented
* meals api
* users api
* database

### features planned
#### core
* api put/delete access
* lots of validation
* user authentification for post/delete/put

#### neat
* github passport authentication
* https api access
* api key

## Frontend
built with angular

### features implemented
* routing
* calendar display
* login mockup

### features planned
#### core
* proper login
* real calendar 
* * date to week and week to date mapping
* * week switching
* * ability to register as diner
* meal detail view with edit/new meal option
* profile view with edit/new profile options

#### neat
* make it pretty!
* make it pretty on mobile!

## Quick setup Instruction:
* if not installed, get a current node.js and npm version
* install and start a mongoDb server (alternatly use one in cloud, adjust backend/server.js accordingly)
* cd into /backend/, run "npm install", then "npm start"
* * to populate the db with test meals and users, open dev/helperApps/dbLoader.html, and click load users and load meals (in that order)
* cd into /ngFrontend/, run "npm install" then "ng serve"
* open browser to http://localhost:4200/

## Creds

coded by konrad

 