//Importación de modulos
const express = require("express");
const registroSchema = require("../models/registro");
const router = express.Router();

//Creación de EndPoints
//Petición Get
router.get("/registros", (req, res) => {
    registroSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Get con parametro
router.get("/registros/:id", (req, res) => {
    const { id } = req.params;
    registroSchema.find({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Post
router.post("/registros", (req, res) => {
    const registro = registroSchema(req.body);
    registro .save() .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
})

//Petición Put
router.put("/registros/:id", (req, res) => {
    const { id } = req.params;
    const {  nombres, apellidos, direccion, pais, ciudad, codigoPostal, telefono, correo, usuario, contraseña} = req.body;
    registroSchema.updateOne({ _id: id }, {
        $set: { nombres, apellidos, direccion, pais, ciudad, codigoPostal, telefono, correo, usuario, contraseña}
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});