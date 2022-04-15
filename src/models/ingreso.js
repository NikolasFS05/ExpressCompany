//Se importa el modulo para la base de datos
const mongoose = require("mongoose");

//Se crea el esquema
const registroSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Registros', registroSchema);