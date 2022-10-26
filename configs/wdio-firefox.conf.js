const merge = require('deepmerge');
const sharedConf = require('./wdio.shared.conf.js');

exports.config = merge(sharedConf.config, {
    maxInstances: 1,
    capabilities: [{
        browserName: 'firefox'
    }],
    services: ['geckodriver'],
    reporters: ['spec']
}, { clone: false })
