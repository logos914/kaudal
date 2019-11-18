const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const phoneSchema = new Schema ({
    type: {
        type: String,
        enum: ['PHONE_TYPE_MOBILE', 'PHONE_TYPE_WORK', 'PHONE_TYPE_HOME']
    },
    area: Number,
    number: Number,
    extension: Number
});

