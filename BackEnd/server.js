/* 
All information from https://www.npmjs.com/package/mysql#introduction
Please do a npm install before using server.js
Enter in command line 'npm install mysqljs/mysql'
*/

var express = require('express');
var mysql = require('mysql');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// Establishing a connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'saftech_fonez'
});

// Connecting to the database
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Getting information from the database
app.get('/api/posts', function (req, res){
    product = 'phone';
    sql = 'SELECT * FROM stock WHERE productType = ' + connection.escape(product);
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.json(results);
    });
})

// Listing to port number 8081 @ http://localhost:8080/
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

/*
// Test for some user generated query
var product = 'phone';
var sql    = 'SELECT * FROM stock WHERE productType = ' + connection.escape(product);
connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end(function(err) {
    // The connection is terminated now
    console.log('The connection has now ended');
  });

  // Getting information from the database

  app.get('/api/posts', function(product, sql){
    product = 'phone';
    sql    = 'SELECT * FROM stock WHERE productType = ' + connection.escape(product);
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
    });
    })
*/  