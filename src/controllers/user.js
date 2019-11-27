'use strict';
// Cargamos los modelos para usarlos posteriormente
var User = require('../models/user');

var jwt = require('jsonwebtoken');
var authHelper = require('../helpers/auth');

// Conseguir datos de un usuario
exports.loginWithCredential = function(req, res) {

    console.log(req.body);


    if (req.body.username == null) {
        return res.status(403).send({message: 'Not Authorized'});
    }

    if (req.body.secreto == null) {
        return res.status(403).send({message: 'Not Authorized'});
    }

//buscar un documento por un  id
    User.find({alias:  req.body.username},
        function (err,user) {

        console.log(user);

        if (user.length > 0) {
            console.log("Piden por " + req.body.username);
            console.log("Se encontro a " + user[0].iterator);



            if (err) return res.status(403).send({message: 'Not Authorized'});


            let iterator = authHelper.decoderIterator(user[0].iterator);

            let buildingKey = authHelper.decoderPaswordConsalsita(req.body.secreto,user[0].salsita,user[0].locationSalsa);

            let buildedKey = authHelper.hashingSecreto(buildingKey,iterator);

            console.log("CONSTRUIDA: " + buildedKey);
            console.log("GUARDADA  : " + user[0].secreto);

            if (buildedKey === user[0].secreto) {
                const payload = {
                    check:  true
                };
                const token = jwt.sign(payload, req.app.get('jwtkey'), {
                    expiresIn: 1440
                });

                res.json({
                    message: 'Login granted',
                    token: token,
                    vosSos: req.body.username,

                })

            } else {
                res.status(403).json({
                    message: 'Login error'
                })
            }
        }




    });






};

