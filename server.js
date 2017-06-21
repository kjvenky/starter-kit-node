require('dotenv').config()
const express = require("express"),
	vogels = require('vogels'),
    app = express(),
    port = process.env.PORT,
    bodyParser = require("body-parser");

// vogels.createTables({
// 	'tasks': {readCapacity: 10, writeCapacity: 10}
// }, function(err) {
// 	if (err) {
// 		console.log('Error creating tables: ', err);
// 	} else {
// 		console.log('Tables has been created');
// 	}
// });

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// var routes = require('./api/routes/todoListRoutes');
// routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);



