var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client('localhost:2181/'),
    consumer = new Consumer(
        client,
        [
            { topic: 'topic1', partition: 0 }
        ],
        {
            autoCommit: false
        }
    );
    
    consumer.on('message', function (message) {
        console.log(message.value);
    });