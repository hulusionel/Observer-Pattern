const { postSlackMessage } = require('../lib/slack');
const { subscribe } = require('./event');
const { eventTypes } = require('../constants');

const appCrashEvent = (message) => {
   postSlackMessage('slackChannel', `Warning!! app crashed: ${message}`)
}

const appBruteForceEvent = (ip) => {
   postSlackMessage('slackChannel', `has been started this bruteForce with this ip address ${ip}`)
}


const setupSlackEventHandler = () => {
   subscribe(eventTypes.appCrash, appCrashEvent)
   subscribe(eventTypes.bruteForce, appBruteForceEvent)
}

module.exports = {
   setupSlackEventHandler
} 