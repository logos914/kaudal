var Config = require('./config');
const mongoose = require('mongoose');
conf = new Config();
var User = require('../models/user');

var authHelper = require('../helpers/auth');

// Connecting to database
mongoose.connect(conf.database.connectionString)
    .then(db => console.log('Successfully connected to database server'))
    .catch(err => console.log(err));


let iterative = authHelper.encodeIterator();
let salt = authHelper.createSalt();
let locationSalsa = authHelper.createPositionsalsita();


newUserForAdd = new User({
    _id: new mongoose.mongo.ObjectId(),
    name: {
        firstName: "Ignacio",
        lastName: "Tula"
    },
    alias: "itula",
    secreto: "InTer22Sol",
    iterator: iterative,
    salsita: salt,
    locationSalsa: locationSalsa
});



let iterator = authHelper.decoderIterator(newUserForAdd.iterator);
let buildingKey = authHelper.decoderPaswordConsalsita(newUserForAdd.secreto,newUserForAdd.salsita,newUserForAdd.locationSalsa);
let buildedKey = authHelper.hashingSecreto(buildingKey,iterator);
newUserForAdd.secreto = buildedKey;

newUserForAdd.save();