const { sendEmail } = require('../lib/email');
const { subscribe } = require('./event');
const { eventTypes } = require('../constants');

const userRegisterEvent = (user) => {
   sendEmail(user.email, 'welcome', `thanks for registiring ${user.name}`)
}

const appCrashEvent = (message) => {
   sendEmail('Warning!! app crashed', `${message}`)
}

const setupEmailEventHandler = () => {
subscribe(eventTypes.register, userRegisterEvent)
subscribe(eventTypes.appCrash, appCrashEvent)
}

module.exports = {
   setupEmailEventHandler
} 