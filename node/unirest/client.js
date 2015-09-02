/**
 * @description Sample Request Against ServiceNow REST Table API
 * Gets a single configuration item from DemoNightlytUS ServiceNow Sandbox Instance
 * Returning Configuration Item as JSON
 *
 * Uses Basic Authentication to make the request and the the Mashape Unirest Node.js library
 */



var unirest = require('unirest');
var Request = unirest.get('https://demonightlyus.service-now.com/api/now/table/cmdb_ci?sysparm_limit=1');

Request.auth({
    user: 'admin',
    pass: 'snow2004',
    sendImmediately: true
});

Request.headers({
    'Accept': 'application/json',
    'User-Agent': 'Unirest Node.js'
});


// send request
Request.end(function (response) {
    console.log(response.body);
});