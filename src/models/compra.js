//Se importa el modulo para la base de datos
const mongoose = require("mongoose");

//Se crea el esquema
const compraSchema = mongoose.Schema({
    codigo:{
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    producto: {
        type: String,
        required: true
    },
    cuponDescuento: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        requiered: true
    },
    Totalprecio: {
        type: Number,
        requiered: true
    },
    metodoPago: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Compras', compraSchema);