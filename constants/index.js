module.exports = {
   eventTypes: {
      register: 1, // log only mail
      bruteForce: 2, // log to slack and cloudWatch
      appCrash: 3 // log to everywhere
   }
}