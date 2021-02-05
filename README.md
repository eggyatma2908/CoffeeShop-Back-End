<p align="center">
  <a href="https://github.com/Gefyaqiilah/CoffeeShop-Back-End">
    <img src="./screenshots/logo.png"  width="100px" alt="Logo" width="80">
  </a>
<h1 align="center">CoffeeShop</h1>
  <p align="center">
   CoffeeShop-Backend for Zwallet application. Built with NodeJs using the ExpressJs Framework.
      Express.js is a web application framework for Node.js.
    <br />
  <br/>
    <a href="https://coffeeshop-gefy.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/Gefyaqiilah/CoffeeShop-Back-End">Report Bug</a>
    ·
    <a href="https://github.com/Gefyaqiilah/CoffeeShop-Back-End">Request Feature</a>
  </p>
  
## Built With
[![Express.js](https://img.shields.io/badge/Express-4.17.1-green?style=flat)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/NodeJs-v14-lightgreen?style=flat)](https://nodejs.org/)

## Requirements
* [Node.js](https://nodejs.org/en/)
* [Postman](https://www.getpostman.com/)
* [Database](coffeeshop.sql)


## How to run the app ?
1. Open app's directory in CMD or Terminal
2. Typ
```npm install```
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Apache and MYSQL Server using xampp, etc.
5. Create a database with the name **coffeeshop** then  import file **coffeeshop.sql** in directory root/database to [phpmyadmin](http://localhost/phpmyadmin)
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.
8. You can see all the end point [here](#end-point)

## Setup .ENV file
Create .env file in your root project folder.<br>
```bash
PORT = YOUR_SERVER_PORT
DB_HOST = YOUR_SERVER_HOST
DB_NAME = DB_NAME
DB_USER = DB_USER
DB_PASSWORD = DB_PASSWORD
BASE_URL = YOUR_BASE_URL_BACKEND // http:localhost:3000
BASE_URL_FRONT_END = YOUR_BASE_URL_FRONT_END_PROJECT
ACCESS_TOKEN_KEY = YOUR_ACCESS_KEY
REFRESH_TOKEN_KEY = YOUR_REFRESH_KEY
EMAIL_USERNAME = YOUR_EMAIL (For Nodemailer)
EMAIL_PASSWORD = YOUR_EMAIL_PASSWORD (For Nodemailer)
STRIPE_USERNAME = YOUR_STRIPE_USERNAME
STRIPE_PASSWORD = YOUR_STRIPE_PASSWORD
STRIPE_PUBLIC_KEY = YOUR_STRIPE_PUBLIC_KEY
STRIPE_SECRET_KEY = YOUR_STRIPE_SECRET_KEY
```

## Rest API
You can view my Postman collection </br>
[![run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/collections/2192875accb7d2886d73)

## Author
This project was built by :
* [Gefy Aqiilah Aqsal](https://github.com/Gefyaqiilah)
* [Eggy Atma Riansyah](https://github.com/eggyatma2908)
* [Shaula Jaminetya Saga](https://github.com/sjasminetya)
* [Renaldi Pratama Tumanggor](https://github.com/renaldipratama97)
