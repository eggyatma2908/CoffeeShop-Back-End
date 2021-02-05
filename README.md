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
8. You can see all the end point in postman collection [here](#rest-api)

## Set up .env file
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

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Related Project
* [`CoffeeShop Front-End`](https://github.com/Gefyaqiilah/CoffeeShop-Front-End)

## Contributors
<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/Gefyaqiilah">
          <img width="150" src="https://avatars.githubusercontent.com/u/54069791?s=400&u=d52c9220de7f217fab6be5eed1a2f237325ef741&v=4" alt="Gefy Aqiilah Aqshal"><br/>
          <b>Gefy Aqiilah Aqshal</b>
        </a>
      </td>
       <td align="center">
        <a href="https://github.com/renaldipratama97">
          <img width="150" src="https://avatars.githubusercontent.com/u/72293996?v=4" alt="Renaldi Pratama Tumanggor"><br/>
          <b>Renaldi Pratama Tumanggor</b>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/sjasminetya">
          <img width="150" src="https://avatars.githubusercontent.com/u/36390515?v=4" alt="Shaula Jasminetya Saga"><br/>
          <b>Shaula Jasminetya Saga</b>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/eggyatma2908">
          <img width="150" src="https://avatars.githubusercontent.com/u/26200397?v=4" alt="Eggy Atma"><br/>
          <b>Eggy Atma</b>
        </a>
      </td>
    </tr>
  </table>
</center>
