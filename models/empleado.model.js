const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    office: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

const Empleado = mongoose.model('Empleado', empleadoSchema);

module.exports = Empleado;
