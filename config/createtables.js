module.exports = function () {
	const vogels = require('vogels');
    // const AWS= require('aws-sdk');
    // console.log("Vogels log in create tables", vogels.AWS.config)
    if (process.env.NODE_ENV === "test") {
    // if (process.env.NODE_ENV === "development") {
        vogels.AWS.config.update({ accessKeyId: "myKeyId", secretAccessKey: "secretKey", region: "us-west-2" });
        // vogels.dynamoDriver(new vogels.AWS.DynamoDB({ endpoint: 'http://localhost:8000' }));
        vogels.dynamoDriver(new vogels.AWS.DynamoDB({ endpoint: 'http://ravidynamo:8000' }));
    } else {
        // console.log("AWS access key=", process.env.AWS_ACCESS_KEY, "AWS Secret key=", process.env.AWS_SECRET_KEY, "AWS Region =", process.env.AWS_REGION);
        vogels.AWS.config.update({accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_KEY, region: process.env.AWS_REGION});
        // vogels.AWS.config.update({accessKeyId: "AKIAIKAWFQ425PA3P47A", secretAccessKey: "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", region: "us-west-1" });
        // vogels.AWS.config.loadFromPath("../credentials.json");
        // vogels.AWS.config.update({region: process.env.AWS_REGION });
    }

    const Lr = require("../api/models/LRModel");
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

 

