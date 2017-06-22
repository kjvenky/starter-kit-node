require('dotenv').config() // Accesses the environment variables from .env file at the root of the folder
const express = require("express"),
	createtables = require("./config/createtables.js"),
	vogels = require('vogels'),
    app = express(),
    port = process.env.PORT,
    bodyParser = require("body-parser");

	createtables();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes = require('./api/routes/LRRoutes');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);
