# GAME CHANGER
## The full club management app (server)



## About

REST API for an application to run a sporting club.

- This repo implements the backend REST API (built in Express + MongoDB).
- A repository for with the frontend (React App) can be found here: https://gamechanger-clubmanager.netlify.app/



## Instructions

To run in your computer, follow these steps:
- clone 
- install dependencies: `npm install`
- create a `.env` file with the following environment variables
  - ORIGIN, with the location 'https://gamechanger-clubmanager.netlify.app/'
  - TOKEN_SECRET: used to sign auth tokens (example, `TOKEN_SECRET=crocodilerock`)
- run the application: `npm run dev`.  It is important to run the server with `npm run dev`


## API Endpoints

<br/>

**Auth endpoints**

| HTTP verb   | Path | Request Headers | Request body  | Description |
| ------------- | ------------- | ------------- |------------- | ------------- |
| POST  | /api/auth/signup  | –  | { email: String, password: String, firstName: String, lastName: String, role: String }  | Create an account  |
| POST  | /api/auth/login  | –  | { email: String, password: String }  | Login  |
| GET  | /api/auth/verify  | Authorization: Bearer `<jwt>`  | –  | Verify jwt  |


<br/>

**Games**
Please note for POST, PUT & DELETE requests the user must have role of coach

| HTTP verb   | Path | Request Headers | Request body  | Description |
| ------------- | ------------- | ------------- |------------- | ------------- |
| POST  | /games  | Authorization: Bearer `<jwt>`  | { opponent: String, venue: String, startTime: String, numberOfPlayers: Number }  | Create new game  |
| GET  | /games  | –  | –  | Get all games  |
| GET  | /games/:gameId  | –  | – | Get game details  |
| PUT  | /games/:gameId  | Authorization: Bearer `<jwt>`  | { opponent: String, venue: String, startTime: String, numberOfPlayers: Number }  | Update a game  |
| DELETE  | /games/:gameId  | Authorization: Bearer `<jwt>`  | – | Delete a game  |


<br/>


## Demo

A demo of the GAMECHANGER app can be found here: https://gamechanger-clubmanager.netlify.app/