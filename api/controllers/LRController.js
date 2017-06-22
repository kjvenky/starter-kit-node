'use strict';

const Lr  = require('../models/LRModel');


exports.list_all_lrs = function(req, res) {

	Lr.scan().exec(function (err, task) {
		console.log('----------------------------------------------------------------------');
		if(err) {
			console.log('Error running scan', err);
		} else {
			res.json(task)
		}

		console.log('----------------------------------------------------------------------');
	});
};


exports.create_a_lr = function(req, res) {

	Lr.create(req.body, {overwrite : false}, function (err, item) {
		if(err){
			res.send(err);
		} else {
			console.log(item);
			res.sendStatus(200);
		}
	});

};

