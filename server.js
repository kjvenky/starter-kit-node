require('dotenv').config() // Accesses the environment variables from .env file at the root of the folder or from the docker environment

var port = process.env.PORT;
const express = require("express"),
	createtables = require("./config/createtables.js"),
	vogels = require('vogels'),
    morgan = require('morgan'),
    logger = require('./config/logger'),
    app = express(),
    bodyParser = require("body-parser");

createtables();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//We are using a different port for testing because we might want to have the development server ON when we run tests
if (process.env.NODE_ENV === "test") {
	port = 3002
}

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode < 400
    }, stream: process.stderr
}));

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode >= 400
    }, stream: process.stdout
}));

var routes = require('./api/routes/LRRoutes');
routes(app);


app.listen(port, function(){
    logger.info('Example app listening on port ' + port);
});

module.exports = app; // for testing
