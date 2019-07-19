var express = require('express'); // used for routing
var app = express(); 
var path = require('path');
var http = require('http').Server(app); // used to provide http functionality
var bodyParser = require('body-parser'); // created an insatnce of body-parser
app.use(express.static(__dirname + '/www'));

app.use(bodyParser.json());

let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Week3 Nodejs Server.")
    console.log("Server listening on: " + host + "port: " + port);
});

// Import login route
require('./routes/indexRoute.js')(app, path);

// Import account route
require('./routes/accountRoute.js')(app, path);

// app.post('/api/login', function(req, res) {
//     if (!req.body) {
//         return res.sendStatus(400)
//     }
//     var customer = {};
//     customer.email = req.body.email;
//     cus
// })