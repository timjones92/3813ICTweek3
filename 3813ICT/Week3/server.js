var express = require('express'); // used for routing
var app = express(); 
var path = require('path');
var http = require('http').Server(app); // used to provide http functionality
var bodyParser = require('body-parser'); // created an insatnce of body-parser
app.use(express.static(__dirname + '/www'));

// Using middleware to parse JSON data
app.use(bodyParser.json());

// Starts the server
let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log("Server has been started at : " + n + ':' + m)
    console.log("Server listening on: " + host + "port: " + port);
});

// Import login route
require('./routes/indexRoute.js')(app, path);

// Import account route
require('./routes/accountRoute.js')(app, path);

// Route to check user credentials and report if valid
app.post('/api/login', function(req, res) {
    if (!req.body) {
        return res.sendStatus(400)
    }
    var customer = {};
    customer.email = req.body.email;
    customer.password = req.body.password;
    if (req.body.email == "abc@com.au" && req.body.password == "123456") {
        customer.valid = true;
    } else {
        customer.valid = false;
    }
    res.send(customer);
});