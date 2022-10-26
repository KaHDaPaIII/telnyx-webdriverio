const merge = require('deepmerge');
const sharedConf = require('./wdio.shared.conf.js');

exports.config = merge(sharedConf.config, {
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome'
    }],
    services: ['chromedriver'],
    reporters: ['spec']
}, { clone: false })
