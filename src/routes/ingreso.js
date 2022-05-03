//Importación de modulos
const express = require("express");
const ingresoSchema = require("../models/compra");
const registroSchema = require("../models/registro");
const router = express.Router();

//Creación de EndPoints
//Petición Get
router.get("/ingreso", (req, res) => {
    ingresoSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Get con parametro
router.get("/ingreso/:id", (req, res) => {
    const { id } = req.params;
    ingresoSchema.find({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Post
router.post("/ingreso", (req, res) => {
    const ingreso = ingresoSchema(req.body);
    ingreso.save().then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Put
router.put("/ingreso/:id", async (req, res) => {
    const { id } = req.params;
    const registro = registroSchema(req.body);
    var idRegistro = null;

    const registroConsulta = await registroSchema.findOne({ usuario: req.body.usuario });
    if (!registroConsulta) {
        await registro.save().then((dataRegistro) => {
            idRegistro = dataRegistro._id;
        });
    } else {
        idRegistro = registroConsulta._id;
    }

    //const { usuario, contrasena } = req.body;
    ingresoSchema.updateOne({ _id: id }, {
        $addToSet: { ingreso: idRegistro }
        //$set: { usuario, contraseña}
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Delete
router.delete("/ingreso/:id", (req, res) => {
    const { id } = req.params;
    ingresoSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;