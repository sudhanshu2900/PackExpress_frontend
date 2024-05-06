# Pack Express (Frontend)

Pack Express is a package delivery service full stack web application created using **React.js, Spring** and **MySQL**. It provides users with a platform to schedule, track, and manage package deliveries conveniently.

## Table of Contents

* Features
* Technologies Used
* Installation
* Usage
* Miscellaneous

## Features

* **User Authentication:** Users can sign-up and login securely to access the service. Services cannot be access without authentication with JWT.
* **Package Scheduling:** Users can schedule package pickups and deliveries.
* **User Dashboard:** Users have a personalized dashboard to manage their deliveries, addresses, and preferences.
* **Admin Panel:** Admins can manage users, packages, and track overall service performance.
* **Excel:** Admin can retrieve information of all the packages in the form of Excel, and the User can also retrieve information of its own packages.

## Technologies Used

* **React.js:** Frontend framework for building the user interface.
* **Spring:** Backend server environment.
* **MySQL:** SQL database for storing, modifying, deleting data and more operations.
* **JWT Authentication:** Secure user authentication using JSON Web Tokens and JS session Cookies.

## Installation

* Clone the repository:
  ```
  git clone https://github.com/sudhanshu2900/pack-express.git
  ```
* Navigate to the project directory:
  ```
  cd pack-express
  ```
* Install dependencies:
  ```
  npm install
  ```
* Run the application:
  ```
  npm start
  ```
* Visit **http://localhost:3000** in your browser to access the application.

## Usage

* Use Admin Username: vanil@gmail.com
*    Admin Password: Vanil@1234

## Miscellaneous

You need to run Backend microservices and MySQL server for this project.
* User-Auth Microservice: https://github.com/sudhanshu2900/pack-express-userauth-microservice
* Product Microservice: 
