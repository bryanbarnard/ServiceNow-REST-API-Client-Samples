/**
 *
 * Created by bryan.barnard on 9/26/15.
 */
(function simpleRequest() {
    var request = require('request');
    var request = request.defaults({jar:true});  //default all requests to use global jar object and be sessio naware
    require('request-debug')(request);


    var options = {
        uri: 'https://demonightlyus.service-now.com/api/now/table/cmdb_ci?sysparm_limit=1',
        method: 'GET',
        time:true, //causes each request to be timed
        auth: {
            'user': 'admin',
            'pass': 'snow2004',
            'sendImmediately': true
        },
        headers : {
            'accept': 'application/json',
            'connection': 'close'
        }
    };


    var callback = function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('elapsed_time: ' + response.elapsedTime);
        }
    };

    //make the request, note that subsequent requests will send cookies if cookies were received in first response
    request(options, callback);
})();

//blah
