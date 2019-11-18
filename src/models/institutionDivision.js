const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const institutionDivisionSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['DIV_TYPE_TEC_AUDIOVISUAL', 'DIV_TYPE_TEC_MEDIA_MANAGMENT',
        'DIV_TYPE_TEC_TICS', 'DIV_TYPE_TEC_BACKENDS',
        'DIV_TYPE_TEC_INGEST', 'DIV_TYPE_TEC_PUBLICATION',
        'DIV_TYPE_TEC_TRANSFER', 'DIV_TYPE_PROD_CONTENT',
        'DIV_TYPE_PROD_LOGISTIC', 'DIV_TYPE_PROD_ADMINISTRATIVE',
        'DIV_TYPE_GENERALDIRECTION', 'DIV_TYPE_PROD_DIRECTION',
        'DIV_TYPE_ARTIS_VIDEOEDIT', 'DIV_TYPE_ARTIS_GRAPHIC']
    }


});