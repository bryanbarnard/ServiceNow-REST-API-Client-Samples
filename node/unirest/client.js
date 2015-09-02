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