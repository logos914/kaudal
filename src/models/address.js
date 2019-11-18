const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addressSchema = new Schema ({
    street: String,
    city: String,
    cp: String,
    floor: String,
    department: String
});

