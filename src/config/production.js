development = {
    server: {
        port: 3000,
    },
    database: {
        host: "127.0.0.1",
        port: 27017,
        dbname: "kaudal",
        username: "",
        password: ""
    },
    security: {
        jwtkey: "changeme for some random key"
    }

};

module.exports = development;