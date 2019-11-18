const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const phoneSchema = require('./phone');
const addressSchema = require('./address');

const institutionOfficeSchema = new Schema ({
    name: String,
    address: addressSchema,
    phone: phoneSchema,
    isPublic: Boolean,
        belongsTo: {
            type: {
                enum: ['division', 'department'],
                type: String
            },
            related: mongoose.Schema.Types.ObjectId
        }
});


