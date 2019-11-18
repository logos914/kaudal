var express = require('express');
var app = express();
var users = require('./routes/users');
var auth = require('./routes/auth');
var clc = require("cli-color");
var jwt = require('jsonwebtoken');
var Config = require('./config/config');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Splash screen console
console.log(clc.whiteBright.bgMagenta.bold("Aquí comienza  Kaudal (K, Automatizador de Diligencias Audiovisuales Libre)"));
console.log(clc.bgWhiteBright.magenta.bold("                                                                           "));
console.log(clc.bgWhiteBright.magenta.bold("Now is starting the execution of K, (Free) Audiovisual Diligence Automator "));
console.log("\n\n");

// Loading configuration
conf = new Config();

// Connecting to database
mongoose.connect(conf.database.connectionString)
    .then(db => console.log('Successfully connected to database server'))
    .catch(err => console.log(err));

// Setting up constant for express
app.set('jwtkey', conf.security.jwtkey);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// setting up routers for express
app.use('/auth', auth);
app.use('/users', users);



// starting listening server
app.listen(conf.server.port, function () {
    console.log(clc.whiteBright.bgGreen('Kaudal running on port ' + conf.server.port));
});


