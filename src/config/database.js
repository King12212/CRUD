require('dotenv').config()
const mysql = require('mysql2/promise')



// create the connection to database
// const connection = mysql.createConnection({
//     //host: 'localhost',
//     host: process.env.DB_HOST,
//     //port: 3307, // default : 3306
//     port: process.env.DB_PORT,
//     //user: 'root', //default: empty
//     user: process.env.DB_USER,
//     //password: '123456',
//     password: process.env.DB_PASSWORD,
//     //database: 'hoidanit'
//     database: process.env.DB_NAME
//   })
const connection = mysql.createPool({
    host: process.env.DB_HOST,  
    port: process.env.DB_PORT,  
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})


module.exports = connection