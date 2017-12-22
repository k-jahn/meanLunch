# MEAN Stack LunchApp
An app to organize communal cooking activities at origin.berlin, built with the MEAN stack.

## Repo
_github.com/k-jahn/meanLunch_
feedback is always welcome, as are contributions!

## Backend
built with:
- mongoDb as database
- mongoose as ODM
- Express as API framework

runs on NODE.js

API (hopefully) written in the RESTful style.

### features implemented
* mongoDb access
* meals api
  - parameterized GET routes
  - POST rote
* users api
  - parameterized GET routes
  - POST route  
* basic input sanitizing
* rudimentary validation

### features planned
#### core
* meals api 
  - put/delete routes
* users api 
  - put/delete routes
* lots of validation
* user authentification for post/delete/put

#### neat
* github passport authentication
* https api access
* api key

## Frontend
built with:
* angular.io framework v5.x 
* bootstrap v4.x

### features implemented
* routing
* calendar
  - display
  - week switching
* login mockup
* user badges
* user.service api access
  - timestamped caching
* meal.services api access

### features planned
#### core
* proper login
* calendar 
  - date to week and week to date mapping
* meal detail view with edit/new meal option
  - ability to register as diner
* profile view 
  - edit/new profile options

#### neat
* user avatars (gravatar?)
* make it pretty!
* make it pretty on mobile!
* add animations
* Local/Sessionstorage data caching

## Quick setup Instructions:
* if not installed, get a current node.js and npm version
* install and start a local mongoDb server (alternately cloud server, adjust backend/server.js accordingly)
* cd into /backend/, run "npm install", then "npm start"
  - to populate the db with test meals and users, open dev/helperApps/dbLoader.html, and click load users and load meals (in that order)
* cd into /ngFrontend/, run "npm install" then "ng serve"
* open browser to http://localhost:4200/

## Creds

coded by konrad
images from public domain
