let passwordHash = require('password-hash');
let crypto = require('crypto');
const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error_msg', 'Not Authorized.');
    res.redirect('/users/signin');
};

helpers.decoderIterator = function(iteratorEncode) {

    //Determinar cuantas iteraciones de hasheo a la password requiere)
    if (iteratorEncode < 0) {
        var iterator = Math.cbrt(iteratorEncode);
    } else if (iteratorEncode > 0) {
        var iterator = Math.sqrt(iteratorEncode);
    }
    return iterator;

};

helpers.decoderPaswordConsalsita = function(secreto,salsita,locationSalsa) {

    let buildingKey;

    // determinar la posición de la salsa segun el ubicador
    if (locationSalsa == 0) {
        buildingKey = salsita + secreto;
    } else if (locationSalsa == 1) {
        buildingKey = secreto + salsita;
    }

    return buildingKey;
};

helpers.hashingSecreto = function(secreto,iterator) {

    let buildingKey = secreto;
    for (let i = 0; i < iterator; i++) {




        buildingKey = crypto.createHmac('sha256', secreto)
            .update(buildingKey)
            .digest('hex');

    }

    return buildingKey;
};




helpers.encodeIterator = function() {

    iterar = this.random();

    while (iterar == 0 || iterar == 1 || iterar == -1) {
        iterar = this.random();
    }



    if (iterar < 0) {
        iterative = Math.pow(iterar,3);
    } else {
        iterative = Math.pow(iterar,2);
    }

    return iterative;
};

helpers.random = function () {
   return Math.floor(Math.random() * (10 + 9 + 1)) - 9;
};


helpers.createSalt = function () {

    return crypto.randomBytes(Math.ceil(80/2))
        .toString('hex') /** convert to hexadecimal format */
        .slice(0,80);
};

helpers.createPositionsalsita = function(){

    let locationSalsa = Math.random();

    if (locationSalsa % 2 === 0) {
        locationSalsa = 0;
    } else {
        locationSalsa = 1;
    }

    return locationSalsa;
};

module.exports = helpers;