//Se importa el modulo para la base de datos
const mongoose = require("mongoose");
//Se importa el componente BCrypt
const bcrypt = require("bcrypt");

//Se crea el esquema
const ingresoSchema = mongoose.Schema({
    usuario: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Registro'
    }],
    contrasena: {
        type: String,
        required: true
    }
});

registroSchema.methods.encyptClave = async(contraseña) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(contraseña, salt);
}

module.exports = mongoose.model('Ingresos', ingresoSchema);