require('dotenv').config() // Accesses the environment variables from .env file at the root of the folder
const express = require("express"),
	createtables = require("./config/createtables.js"),
	vogels = require('vogels'),
    morgan = require('morgan'),
    logger = require('./config/logger'),
    app = express(),
    port = process.env.PORT,
    bodyParser = require("body-parser");

	createtables();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

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

