var http = require('http');
var options = {hostname: 'localhost', port: 3000, path: '/', method: 'GET'};

var start = new Date().getTime();

for (i = 0; i < 1000; i++) {
    var req = http.request(options, function (res) {
        //console.log(res.headers.x);
        res.on('end', function () {
            console.log('No more data in response.')
        })
    });

    req.on('error', function (e) {
        console.log('problem with request: ' + e);
    });

    req.end();
}

var end = new Date().getTime();
var time = end - start;
console.log(time);