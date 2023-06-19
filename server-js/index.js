const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config({path: __dirname + '/.env'})

const locationRouter = require("./routes/location-router")

const app = express()
const apiPort = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use("/api", locationRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

// // get the client
// const mysql = require('mysql2');

// // create the connection to database
// const connection = mysql.createConnection({
//   host: 'zeldaguessr.csa7wuh6yrzv.us-east-2.rds.amazonaws.com',
//   user: 'admin',
//   password: 'Zeldaguessr493',
//   database: 'zeldaguessr'
// });

// // simple query
// connection.query(
//   'SELECT * FROM `location` LIMIT 5',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

// // simple query
// connection.promise().query(
//   'SELECT * FROM `location` LIMIT 5',
// ).then(([rows, fields]) => {
//   console.log(rows)
// }).catch(console.log("fail"));