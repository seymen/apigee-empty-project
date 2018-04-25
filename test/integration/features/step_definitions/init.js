/* eslint new-cap: 0 */

const apickli = require('apickli');
const {defineSupportCode} = require('cucumber');
const config = require('../../config.json');

const readEnvironmentConfig = function(config) {
    const env = process.env.NODE_ENV;
    if (!env) {
        throw new Error('set the environment using NODE_ENV environment variable');
    }

    const envConfig = config[env];
    console.log(envConfig);
    return envConfig;
};

const envConfig = readEnvironmentConfig(config);

defineSupportCode(function({Before}) {
    Before(function() {
        this.apickli = new apickli.Apickli('https', envConfig.domain + envConfig.basepath);
        this.apickli.addRequestHeader('Cache-Control', 'no-cache');
    });
});

defineSupportCode(function({setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);
});
