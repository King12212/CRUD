require('dotenv').config()
const express = require('express') // commonjs 
const path = require('path')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')

const connection =require('./config/database')

// import express from 'express' //es modules
const app = express() // app express
const port = process.env.PORT || 8888  // port => hardcode (uat)
const hostname = process.env.HOST_NAME 

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({extended: true})) // for from data

// config template engine
configViewEngine(app)
// khai bao route
app.use('/',webRoutes) // tat ca route khai bao se dung sau cai tien to nay`, giup phan biet cac route
app.use('/v1`',webRoutes)
app.use('/v1`',webRoutes)

//test connection

 //simple query
//  connection.query(
//     'select * from Users u',
//     function(err, results, fields){
//       //console.log(">>>result= ",results);
//       //console.log(">>>fields= ",fields);
//     }
// )


app.listen(port, hostname, ()=>{
  console.log(`Example app listening on porn ${port}`)
})