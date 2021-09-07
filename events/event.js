const subscribers = {};

const subscribe = (eventType, fn) => {
   if(subscribers[eventType] === undefined) {
      subscribers[eventType] = []
   }
   subscribers[eventType].push(fn)
}

const postEvent = (eventType, data) => {
   if(subscribers[eventType] === undefined) {
      return
   }
   for (let fn in subscribers[eventType]) {
      (subscribers[eventType][fn])(data)
   }
}

module.exports = {
   subscribe,
   postEvent
}