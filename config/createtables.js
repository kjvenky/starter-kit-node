module.exports = function () {
	const vogels = require('vogels');
    if (process.env.NODE_ENV === "test") {
        vogels.AWS.config.update({ accessKeyId: "myKeyId", secretAccessKey: "secretKey", region: "us-west-2" });
        vogels.dynamoDriver(new vogels.AWS.DynamoDB({ endpoint: 'http://ravidynamo:8000' }));
    } else {
        vogels.AWS.config.update({accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_KEY, region: process.env.AWS_REGION});
    }

    const Lr = require("../api/models/LRModel");
	vogels.createTables({
		'load_receipts': {readCapacity: 10, writeCapacity: 10}
	}, function(err) {
		if (err) {
			console.log('Error creating tables: ', err);
		} else {
			console.log('Tables have been created');
		}
	});
}

 

