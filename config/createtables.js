module.exports = function () {
	const vogels = require('vogels');
    const AWS= require('aws-sdk');
    const Lr = require("../api/models/LRModel");
    if (process.env.NODE_ENV === "test") {
        AWS.config.update({ accessKeyId: "myKeyId", secretAccessKey: "secretKey", region: "us-west-2" });
        vogels.dynamoDriver(new AWS.DynamoDB({ endpoint: 'http://localhost:8000' }));
    } else {
        vogels.AWS.config.update({accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_KEY, region: process.env.AWS_REGION });
    }

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

 

