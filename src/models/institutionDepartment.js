const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const institutionDivisionSchema = require('./institutionDivision');

const institutionDepartmentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    type: {
        type: String,
        enum: ['DTO_TYPE_PRODUCTION', 'DTO_TYPE_TECHNICAL',
            'DTO_TYPE_ARTISTICAL', 'DTO_TYPE_POSTPRODUCTION',
            'DTO_TYPE_BROADCAST', 'DTO_TYPE_PUBLICATION']
    },
    divisions: [institutionDivisionSchema]
    

})
