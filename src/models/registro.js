//Se importa el modulo para la base de datos
const mongoose = require("mongoose");
//Se importa el componente BCrypt
const bcrypt = require("bcrypt");

//Se crea el esquema
const registroSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    codigoPostal: {
        type: Number,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    }
});

registroSchema.methods.encyptClave = async(contraseña) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(contraseña, salt);
}

module.exports = mongoose.model('Registros', registroSchema);