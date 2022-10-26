const merge = require('deepmerge');
const sharedConf = require('./wdio.shared.conf.js');

exports.config = merge(sharedConf.config, {
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--disable-dev-shm-usage',
                '--headless',
                '--disable-gpu'
            ],
        }
    }],
    services: ['chromedriver'],
    reporters: ['spec']
}, { clone: false })
