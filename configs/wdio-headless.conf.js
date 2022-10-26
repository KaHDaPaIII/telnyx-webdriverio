const merge = require('deepmerge');
const sharedConf = require('./wdio.shared.conf.js');

exports.config = merge(sharedConf.config, {
    maxInstances: 10,
    maxInstancesPerCapability: 1,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu']
        }
    },{
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['-headless']
        },
    }],
    services: ['chromedriver','geckodriver'],
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]]
}, { clone: false })
