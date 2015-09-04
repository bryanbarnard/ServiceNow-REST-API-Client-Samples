/**
 * @description Sample Request Against ServiceNow REST Table API
 * Gets a single configuration item from DemoNightlytUS ServiceNow Sandbox Instance
 * Returning Configuration Item as JSON
 *
 * Uses Basic Authentication to make the request and the the Mashape Unirest Node.js library
 * http://unirest.io/nodejs.html
 */
(function simpleRequest() {
        var unirest = require('unirest');
        var Request = unirest.get('https://demonightlyus.service-now.com/api/now/table/cmdb_ci?sysparm_limit=1');
        var sessionCookie;


        //  this request will be made with a session cookie
        var makeRequestWithSessionCookie = function (sessionCookie) {
            var req = unirest.get('https://demonightlyus.service-now.com/api/now/table/cmdb_ci?sysparm_limit=1');


            req.auth({
                user: 'admin',
                pass: 'admin',
                sendImmediately: true
            });

            req.headers({
                'Accept': 'application/json',
                'User-Agent': 'Unirest Node.js'
            });

            // send request
            req.end(function (response) {
                console.log("second request status: " + response.status);
            });
        };



        Request.auth({
            user: 'admin',
            pass: 'admin',
            sendImmediately: true
        });

        Request.headers({
            'Accept': 'application/json',
            'User-Agent': 'Unirest Node.js'
        });


        // send request
        Request.end(function (response) {
            console.log("first request status: " + response.status);
            sessionCookie = response.cookie('JSESSIONID');
            makeRequestWithSessionCookie(sessionCookie);
        });
    }
)();