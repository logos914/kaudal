const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const phoneSchema = require('./phone');
const addressSchema = require('./address');
const socialNetworkLinkSchema = require('./socialNetworkLink');

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: String,
        lastName: String
    },
    institution: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'institutions'
    },
    divisions: [Number],
    primaryDepartment: Number,
    office: Number,
    secreto: {
        type: String,
        required: true
    },
    salsita: {
        type: String,
        required: true
    },
    iterator: Number,
    locationSalsa: Number,
    alias: String,
    status: Boolean,
    emails: [
        {email: String,
        description: String
        }],
    phone:[phoneSchema],
    birthdate: Date,
    address: addressSchema,
    personId: String,
    socialNetworkProfiles: [socialNetworkLinkSchema]




});

let User = mongoose.model('users', userSchema);
module.exports = User;