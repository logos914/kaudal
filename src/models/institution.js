const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const institutionOfficeSchema = require('./institutionOffice');
const phoneSchema = require('./phone');
const addressSchema = require('./address');
const socialNetworkLinkSchema = require('./socialNetworkLink');
const institutionDepartmentSchema = require('./institutionDepartment');

const institutionSchema = new Schema ({
    _id: mongoose.Schema.Types.ObjectID,
    name: {
        type: String,
        required: true
    },
    type: String,
    departments: [institutionDepartmentSchema],
    offices: [institutionOfficeSchema],
    address: addressSchema,
    phone: phoneSchema,
    email: String,
    web: String,
    socialNetworkProfiles: [socialNetworkLinkSchema],
    slogan: String,
    logo: String



});


let Institution = mongoose.model('institutions', institutionSchema);
module.exports = Institution;