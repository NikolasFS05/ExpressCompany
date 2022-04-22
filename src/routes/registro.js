//Importación de modulos
const express = require("express");
const registrosSchema = require("../models/registro");
const router = express.Router();

//Creación de EndPoints
//Petición Get
router.get("/registros", (req, res) => {
    registrosSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Get con parametro
router.get("/registros/:id", (req, res) => {
    const { id } = req.params;
    registrosSchema.find({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Post
router.post("/registros", (req, res) => {
    const registro = registrosSchema(req.body);
    registro .save() .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
})

//Petición Put
router.put("/registros/:id", (req, res) => {
    const { id } = req.params;
    const {  nombres, apellidos, direccion, pais, ciudad, codigoPostal, telefono, correo, usuario, contraseña} = req.body;
    registrosSchema.updateOne({ _id: id }, {
        $set: { nombres, apellidos, direccion, pais, ciudad, codigoPostal, telefono, correo, usuario, contraseña}
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Delete
router.delete("/registros/:id", (req, res) =>{
    const { id } = req.params;
    registrosSchema.deleteOne({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error}));
});

module.exports = router;