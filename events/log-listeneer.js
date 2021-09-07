const { log } = require('../lib/log');
const { subscribe } = require('./event');
const { eventTypes } = require('../constants');

const appCrashEvent = (message) => {
   log(`Warning!! app crashed: ${message}`)
}

const appBruteForceEvent = (ip) => {
   log(`has been started this bruteForce with this ip address ${ip}`)
}


const setupLogEventHandler = () => {
   subscribe(eventTypes.appCrash, appCrashEvent)
   subscribe(eventTypes.bruteForce, appBruteForceEvent)
}

module.exports = {
   setupLogEventHandler
}