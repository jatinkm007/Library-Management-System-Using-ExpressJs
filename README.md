# Library-Management-System-Using-ExpressJs

  This is a library management API Backend for the management of the users and the books.

# Routes and the Endpoints

## /users

GET: Get all the users in the form of the user
POST: Create/Resgsitor a new user

## /users/{id}
GET: Get a user by their ID
PUT: Updating a user by their ID
DELETE: Deleting a user by their ID (Check if the user still has an issued book) && {is there any fine/penalty to be collected}

## /users/subscription-details/{id}
GET: Get a user subscription details by their IDs
    >> Date of Subscription
    >> Till Valid?
    >> Fine if any?

## /books
GET: Get all the books in the system
POST: Add a new book

## /books/{id}
GET: Get a book by their id
PUT: Update a book by its id
DELETE: Delete a book by id

## /books/issued
GET: Get all the books that have been issued

## /books/withFine
GET: Get all the issued books with their fine amount

### Subscription
    >> Basic (3months)
    >> Standard (6 months)
    >> Premium (12 months)

## Comands:
npm init
npm i express
 npm i nodemon --save-dev