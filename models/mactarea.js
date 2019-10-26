const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mactareaShema = new Schema({
    mac: String,
    mac: String,
    mac: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('mactarea', mactareaShema); 