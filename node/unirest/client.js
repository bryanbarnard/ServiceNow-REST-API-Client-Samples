/**
 * @description Sample Request Against ServiceNow REST Table API
 * Gets a single configuration item from DemoNightlytUS ServiceNow Sandbox Instance
 * Returning Configuration Item as JSON
 *
 * Uses Basic Authentication to make the request and the the Mashape Unirest Node.js library
 * http://unirest.io/nodejs.html
 */


var unirest = require('unirest');
unirest.request.defaults({jar:true}); //causes each request to be session aware and reuse sessions
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