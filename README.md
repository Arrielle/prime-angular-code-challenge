#Instructions

##Your Hero Tracker
- [x] The Department of Emerging Superhero Knowledge needs an application to help track super hero aliases and their powers. They have already built out a Postgres database and a Node/Express server API. It is your job to build them an Angular front end application to connect to this API.

- [x] See the Readme on the attached repo for database and server API information.

###Routes
- [x] Your application should have two client-side routes: each with a view, template, and controller.

###Client-Side Route 1: Hero Listing & Removal

- [x] This should show a list of all heroes in the system,
- [x] displaying all the information from the entry captured in the view before.
- [x] Each hero in the listing needs to be able to be deleted from the system in the event of their unfortunate demise.
- [x] Note that the GET /heroes and DELETE /heroes routes are already built for you.

###Client-Side Route 2: Hero Entry

- [x] Build a form to enter new heroes into the system. Note that the server-side POST /heroes route is already built for you.

Required fields:

- [x] persona : this is the hero's super hero name. It must be unique.
- [x] alias : this is the hero's true name, if known.
- [x] power_id : this is the hero's main super power as chosen from a list of possible powers. The power_id can just be a number input for base mode (pro mode upgrades this to a dropdown select).
- [x] This power_id must match an id in the super_powers table. Not ideal because the user will have to guess the id for the power, but good enough for now.

##HARD Mode
Improve our Listing route to include the ability for the Hero information to be edited (but not the list of powers).
The server has an endpoint for updating a hero but it is untested. Have a look and change what you need.

##PRO Mode
The power should be selectable from a drop-down list. This power_id must match an id in the super_powers table.

##ULTRA-PRO Mode
Move $http requests into factories.
