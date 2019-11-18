var clc = require("cli-color");

var defaultConfigFile = 'production';

module.exports = function(){

    // If is set the environment variable
    if (process.env.NODE_ENV) {

        // Obtain configs vars from file with same name as NODE_ENV
        if (typeof process.env.NODE_ENV === 'string') {
            console.log(clc.whiteBright.bgBlue.bold("Using " + process.env.NODE_ENV + " as environment variable"));
            var config = require('./' + process.env.NODE_ENV  );
            config.database.connectionString = mongoDBConnectionString(config.database);
            return config;


        }
        else {
            console.log(clc.white.bgRedBright("Error with environment variable"));
            process.exit();
        }


        // Environment var not set
    } else {
        try {
            console.log(clc.black.bgBlue.bold("Environment variable not set, using default: " + defaultConfigFile));
            var config = require('./' + defaultConfigFile);
            config.database.connectionString = mongoDBConnectionString(config.database);
            return config;
        }
        catch (e) {
            console.log(clc.whiteBright.bgRedBright.bold("Environment variable not set, and default file config not exist"));
            console.log(clc.black.bgBlue("Change value of defaultConfigFile in config/config.js to an existing file or set a valid environment variable"));
            //console.log(e);
            process.exit();
        }
    }



};


function mongoDBConnectionString(database) {

    if(database.username !== "") {
        return "mongodb://" + database.username + ":" + database.password + "@" + database.host + ":" + database.port + "/" + database.dbname;
    } else {
        return "mongodb://" + database.host + ":" + database.port + "/" + database.dbname;
    }


}
