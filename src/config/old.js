require('dotenv').config()
const mysql = require('mysql2')



//create the connection to database
const connection = mysql.createConnection({
    //host: 'localhost',
    host: process.env.DB_HOST,
    //port: 3307, // default : 3306
    port: process.env.DB_PORT,
    //user: 'root', //default: empty
    user: process.env.DB_USER,
    //password: '123456',
    password: process.env.DB_PASSWORD,
    //database: 'hoidanit'
    database: process.env.DB_NAME
  })

module.exports = connection