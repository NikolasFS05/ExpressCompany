//Se importa el modulo para la base de datos
const mongoose = require("mongoose");

//Se crea el esquema
const ingresoSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Ingresos', ingresoSchema);