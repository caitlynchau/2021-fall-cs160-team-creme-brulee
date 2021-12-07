# Team Creme Brulee 🍮

CS 160 Software Engineering
Section 6 | Fall 2021

# Briefcase 💼

Team Members: Iman Ereiqat, Swati Chayapathi, Vanshika Jaiswal, Caitlyn Chau, Rashmi Boddukuri

## Setup a Developer/Test Environment:

Clone the repository into your local environment. Ensure you have Node.JS installed (version 16.13 or later).

###### Commit your changes:
Create a branch off of `frontend` if you are making any UI related changes or modifying any client side code. Create a branch off of the `backend` branch if you are making any changes related to backend API requests or database.  Remember to pull any changes from the base branch. 

###### Commit into the main branch:
Make a pull request from your branch to the base branch (`backend` or `frontend`). Only merge with the main branch once significant changes have been finished.  Add reviewers to your pull request to discuss proposed changes and ensure code quality. 

## Launching Briefcase on your local environment:

###### Start the frontend: (localhost port 3000)
cd into the frontend folder and run the following.
```
npm install
npm start
```

###### Start the backend: (localhost port 3001)
cd into the backend folder and run the following.
```
npm install
npm run dev
```

###### Get the database in sync with backend: (localhost port 27017)
Make sure to install MongoDB

See reference for how to get started: https://docs.mongodb.com/manual/administration/install-community/ 

###### Run some automated tests using Cypress
cd into the cypress folder and run the following.
```
npx cypress open
```
