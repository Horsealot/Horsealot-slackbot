const { WebClient, WebClientEvent } = require('@slack/web-api');
const token = process.env.SLACK_TOKEN;

// Initialize
const web = new WebClient(token);

web.on(WebClientEvent.RATE_LIMITED, (numSeconds) => {
    console.log(`A rate-limiting error occurred and the app is going to retry in ${numSeconds} seconds.`);
});

module.exports = web;
