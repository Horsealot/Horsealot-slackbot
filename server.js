const Utils = require('./utils/index');

Utils.assertMandatoryParam('SLACK_TOKEN');
Utils.assertMandatoryParam('RABBITMQ_SERVER');


// const HorsealotProcessor = require('./processors/horsealot');
const Consumer = require('./services/consumer');
Consumer.start();
