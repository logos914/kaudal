const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const socialNetworkLinkSchema = new Schema ({
    network: {
        type: String,
        enum: ['facebook','youtube','twitter',
            'instagram','igtv','linkedin', 'whatsapp',
            'telegram', 'snapchat' , 'pinterest' , 'reddit' ,
            'taringa' , 'foursquare' , 'unitv-play' ,
            'discord', 'twitch'  ],
        required: true
    },
    profileUrl: {
        type: String,
        required: true
    },
    userName: String,
    userID: String

});

