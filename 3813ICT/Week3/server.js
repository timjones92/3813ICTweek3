var express = require('express'); // used for routing
var app = express();
var http = require('http').Server(app); // used to provide http functionality
app.use(express.static(__dirname + '/www'));

let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!")
    console.log("Server listening on: " + host + "port: " + port);
});

// Import login route
require('./routes/loginModule.js')(app, path);

// Import account route
require('./routes/accountModule.js')(app, path);

app.post('/api/login', function(req, res) {
    if (!req.body) {
        return res.sendStatus(400)
    }
    var customer = {};
    customer.email = req.body.email;
    cus
})