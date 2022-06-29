<h1 align="center"> Travel Planner API </h1>



## Description

As a traveller, I want to be able to go to one place to create new trips using locations from a list, create and view location data, and view all of the trips that I have taken or will be taking.  To view all of this info, I should be able to create an account and use that to manage it as I please. This API will be built using Node.js, Express.js, MySQL, and Sequelize and will be deployed in Heroku.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [User Stories](#user-stories)
- [Acceptance Criteria](#acceptance-criteria)
- [Questions](#questions)

## Installation
You need to setup an account and just access via the deployed Heroku app.

## User Stories
* As a traveller, I want to be able to create an account.

* As a traveller, I want to be able to create a new trip for myself using a location from a list.

* As a traveller, I want to be able to create and view location data.

* As a traveller, I want to be able to view all of the trips I'm taking, along with their locations.

## Acceptance Criteria
* It's done when the GET route `/api/travellers` returns all traveller data without associated trips in Insomnia.

* It's done when the POST route `/api/travellers` creates traveller data and returns a successful response in Insomnia.

* It's done when the GET route `/api/travellers/:id` returns a single traveller's data with their associated trips and a list of locations in Insomnia. 

* It's done when the DELETE route `/api/travellers/:id` removes a traveller and any trips associated with them and returns a successful response in Insomnia.

* It's done when the GET route `/api/locations` returns all location data in Insomnia.

* It's done when the POST route `/api/locations` creates location data and returns a successful response in Insomnia.

* It's done when the GET route `/api/locations/:id` returns a single location's data, with its associated trips, in Insomnia. 

* It's done when the DELETE route `/api/locations/:id` removes a location and any trips associated with it and returns a successful response in Insomnia.

* It's done when the POST route `/api/trips` creates trip data between associated travellers and locations.

* It's done when the DELETE route `/api/trips/:id` removes a trip and returns a successful response in Insomnia.

* It's done when the API is successfully deployed to Heroku with a MySQL database.

## Questions
For any questions or concerns, contact me at either my [GitHub](https://github.com/tkhobbes43)
or my email: t.k.hobbes43@gmail.com
