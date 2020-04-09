# Snapwiz_Assignment

Note: Node modules files have been removed due to error on uploading files. <br>
      Database Name: register <br>
      Table Name: register_user <br>

#### Take Home Assignment
Develop a web application with the following features:

Hello Snapwiz team. Thank You for providing this assignment. 

A user should be able to register to the application with email, name, linkedin URL and password. Include a confirm password in the registration form

An already registered user should be able to login to the platform with the username/password combination

Once logged in, the user should be able to access a secure route “/profile” which should only be accessible to logged in users. On this route, the user should be able to see his/her details (email id, name and linkedin url)

Have a special account for admin. If a user logs in with the admin account, take the user to another secure route /admin (which should only be accessible to logged in admin users). On that page, show the details of all the users who have registered to the application


Choose any tech stack you are comfortable with. It should have a database to store the details and a server to implement the application logic.

Don’t worry too much about the UI/UX, just add simple structure to the views

### Installation Guide.
1) Node.js 12.16.2 should be installed on computer. <br>
2) MySql should be installed. <br>
3) Various Node.js modules could be installed using npm. List of node modules to be downloaded could be traced under dependencies on package.json file. <br>

### Introduction with project.
MySQL is used for databse. <br>
This project is done on Node.js as a backend. <br>
Views using ejs template. <br>

### Guidelines to run the program.
Go to cmd.  <br>
Go to the folder Snapwiz. <br>
Type "Node app.js". <br>

### DataBase credentials.
Database Name: register <br>
Table Name: register_user <br>
Values: id, username, name, linkedin, password <br>
# TO DO
User, Admin secure linkage could be done using role based authorization. So for that I am working on Passport and User Role. <br>
Next Path ready date: 10/9/2020 <br>
