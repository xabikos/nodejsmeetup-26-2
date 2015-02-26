var http = require('http');
var port = process.env.port || 1337;

var n = 0;
function spin1(count) {
    var x = 0;
    for (var i = 0; i < count; i++) {
        x += Math.sqrt(x) / Math.sqrt(x + 1) + Math.random();
    }
    return x;
}

function spin2(count) {
    var x = 0;
    for (var i = 0; i < count; i++) {
        x += Math.sqrt(x) / Math.sqrt(x + 1) + Math.random();
    }
    return x;
}

function spin3(count) {
    var x = 0;
    for (var i = 0; i < count; i++) {
        x += Math.sqrt(x) / Math.sqrt(x + 1) + Math.random();
    }
    return x;
}

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var s1 = 0; var s2 = 0; var s3 = 0;
    s1 = spin1(1000000);
    s2 = spin2(3000000);
    s3 = spin3(6000000);
    res.end(' n=' + n++ + ' s1=' + s1 + ' s2=' + s2 + ' s3=' + s3);    
}).listen(port);