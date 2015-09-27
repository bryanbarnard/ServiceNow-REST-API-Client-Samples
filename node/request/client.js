/**
 *
 * Created by bryan.barnard on 9/26/15.
 */
(function simpleRequest() {
    var request = require('request');
    //var request = request.defaults({jar:true});
    require('request-debug')(request);


    var options = {
        uri: 'https://demonightlyus.service-now.com/api/now/table/cmdb_ci?sysparm_limit=1',
        jar:true,
        time:true,
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


    request( options,function (error, response, body) {

        if (!error && response.statusCode == 200) {
            console.log('elapsed_time: ' + response.elapsedTime);
        }


        request(options ,function (error, response, body) {

            if (!error && response.statusCode == 200) {
                console.log('elapsed_time: ' + response.elapsedTime);
            }
        });
    });
})();