const {Schema, model} = require('mongoose');

const studentSchema = new Schema({
    carnet: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    carrera: {
        type: String,
        required: true
    },
    promedioNotas: {
        type: Number,
        required: true
    }
});

module.exports = model('Student', studentSchema);