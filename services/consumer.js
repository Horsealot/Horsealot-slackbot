const amqp = require('amqplib/callback_api');
const config = require('config');
const dispatcher = require('./dispatcher');

module.exports = {
    start: function() {
        amqp.connect('amqp://' + process.env.RABBITMQ_SERVER, function(err, conn) {
            if(err) {
                throw new Error(`Exception while connecting to RabbitMQ ${err}`);
            }
            conn.createChannel(function(err, ch) {
                var q = config.rabbitMq.queue;

                // ch.sendToQueue(q, new Buffer('Hello World!'));
                ch.assertQueue(q,/**/ {durable: true});
                console.log("[Consumer] Waiting for messages in %s.", q);
                ch.consume(q, function(msg) {
                    let messageObject = JSON.parse(msg.content.toString());
                    messageObject.transactionId = crypto.randomBytes(16).toString("hex");
                    console.log("[Consumer][%s] Received %s", messageObject.transactionId, msg.content.toString());
                    dispatcher.dispatch(messageObject);
                }, {noAck: true});
            });
        });
    }
}
