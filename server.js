var connect = require('connect'),
    http = require('http'),
    path = require('path'),
    url = require('url'),
    fs = require('fs');

const hostname = '127.0.0.1';
const port = 3030;

var interceptorFunction = function (req, res, next) {
    fs.readFile(__dirname + "/docs/test.html", 'utf-8', function (error, data) {
        if (error) {
            res.writeHead(500);
            return res.end();
        }

        res.statusCode(200);
        res.setHeader( 'content-type', 'text/html' );
        return res.end();


    });
    next();
}

var server = connect()
    .use(interceptorFunction);


server.listen(port, hostname, function () {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});

