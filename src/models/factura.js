//Se importa el modulo para la base de datos
const mongoose = require("mongoose");

//Se crea el esquema
const facturaSchema = mongoose.Schema({
    usuario: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Registro'
    }],
    pais: {
        type: String,
        required: true
    },
    producto: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        requiered: true
    },
    empresa: {
        type: String,
        required: true
    },
    metodoPago: {
        type: String,
        required: true
    },
    horaCompra: {
        type: String,
        required: true
    },
    idCompra: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Facturas', facturaSchema);