const { createUser, findUser } = require('../lib/db');
const { postEvent } = require('../events/event');
const { eventTypes } = require('../constants');

const register = (name, password, email) => {
   const user = createUser(name, password, email)

   postEvent(eventTypes.register, user)
}

const forgotPassword = (email) => {
   const user = findUser(email)

   postEvent(eventTypes.forgotPassword, user)
}

module.exports = {
   register,
   forgotPassword
}