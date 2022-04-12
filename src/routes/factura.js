//Importación de modulos
const express = require("express");
const facturaSchema = require("../models/factura");
const router = express.Router();

//Creación de EndPoints
//Petición Get
router.get("/facturas", (req, res) => {
    facturaSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Get con parametro
router.get("/facturas/:id", (req, res) => {
    const { id } = req.params;
    facturaSchema.find({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});