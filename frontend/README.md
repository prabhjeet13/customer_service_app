## Customer Service Platform

This project is a Customer Service Platform designed to handle user queries and categorize them into categories. It has functionalities for user authentication, form submission, and integration with Intercom for customer interaction, and saving data in a database (MongoDB).

## Features
# User Authentication:
Google OAuth 2.0-based login.
Jsonwebtoken for token generation.

## Query Submission:
Users can submit queries using a form.
Queries include the fields:
User id,
Additional Comments,
Category (e.g., General Queries, Product Features Queries, Product Pricing Queries, Product Feature Implementation Requests)


# Integration with Intercom:
Queries are forwarded to Intercom for customer support interaction.
A user is created in Intercom upon form submission, and their query is added as a note.

# Database Storage:
All user queries are stored in the database for further processing and analysis.

# add env file in backend folder
PORT = 
MONGODB_URL = 
JWT_SECRET = 
googleid = 
google_client_secret = 
intercom_token = 

## instructions:
1. add env file in backend folder
2. make credentials on google cloud console and get (ClientId set to 'googleid' & ClientSecret = 'google_client_secret')
3. make an account on intercom.com and get accessToken from your profile
and set to 'intercom_token' in .env file
4.  run this command npm install in both folders (backend and frontend) on terminal.
5. run this command npm run dev in backend folder on terminal
6. run this command npm run start in frontend folder on terminal

7. if you clone this repository , if you run on only your system you have to change the url to localhost in cors (index.js in backend folder)
And in frontend folder, you have to change apis from render.com to localhost server that make requests to backend.




