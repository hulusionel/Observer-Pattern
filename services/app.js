const { postEvent } = require('../events/event');
const { eventTypes } = require('../constants');

const appCrash = (message) => {
   postEvent(eventTypes.appCrash, message)
}

const bruteForce = (ip) => {
   postEvent(eventTypes.bruteForce, ip)
}

module.exports = {
   appCrash,
   bruteForce
}