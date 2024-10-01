# -Social-Network-API

## Description
NoSQL Social Network API is a Node.js application programming interface(API) that allows 
users to peform CRUD (create, read, update and delete) operations on social networking data models using a NOSQL database. This API is built by using Node.js & Mongoose.

## Table of Contents:
 Overview
 The Challenge
 Usage 
 Installation Process
 Built With
 What I learned
 License

 ## Overview 

 The Challenge:

 The challenge was to build a RESTful API that allows a social media startup to perform CRUD operations on users,thoughts, and reactions data models using a NoSQL database.

 API must allow users to :

 Create, update  and delete user accounts.
 Create, read, update and delete thoughts.
 Add and remove friends to a user's friend list.
 Add and remove reactions to thoughts.

 ## User Story 
 
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Usage 
1. Open a terminal and run npm i and npm run dev 
2. Once the server is runing on port 3001, use insomina to test the API endpoints
3. Use insomnia to test http://localhost:3001, and you can test endpoints API GET,
POST,PUT,and DELETE.

## Installation Process:

1. Clone the Repository from GitHub using git clone
2. Open the cloned repository in VSC or any source code editor.
3. Open an integrated terminal of the document(-Social-Network-API)
4. Run command npm i and npm run dev

## Link to the video 
https://drive.google.com/file/d/1eEFK2bPDkf6jH5bdQ5abG_lX1ZzSWASs/view


## Built With :
JSON
mongoose: 8.0.0
express: 4.17.1
MongoDB: Website
Nodemon: 2.0.9
Node.js: 16.18.1
Insomina: by Kong
Visal Studio Code: Website

## What I learned 
1. Built a RESTful API with Node.js and Mongoose.
2. Used NoSQL database to handle unstructured data.
3. Created endpoints for CRUD operations.
4. Tested API endpoints using Insomina.

## License 
MIT 