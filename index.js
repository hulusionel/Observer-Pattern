const { setupEmailEventHandler } = require('./events/email-listeneer');
const { setupLogEventHandler } = require('./events/log-listeneer');
const { setupSlackEventHandler } = require('./events/slack-listeneer');
const { appCrash, bruteForce } = require('./services/app');

const { register, forgotPassword } = require('./services/user');


setupEmailEventHandler();
setupLogEventHandler();
setupSlackEventHandler();



//register('Hulusi', '1234', 'hulusi@gmail.com');

appCrash('microservice memory error');

//bruteForce('11111', 'hulusi@gmail.com')

//orgotPassword('hulusi@gmail.com');