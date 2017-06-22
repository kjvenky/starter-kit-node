module.exports = function () {
	const vogels = require('vogels');
    Lr = require("../api/models/LRModel"),
	vogels.AWS.config.update({accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_KEY, region: process.env.AWS_REGION });

	vogels.createTables({
		'lrs': {readCapacity: 10, writeCapacity: 10}
	}, function(err) {
		if (err) {
			console.log('Error creating tables: ', err);
		} else {
			console.log('Tables have been created');
		}
	});
}

 

