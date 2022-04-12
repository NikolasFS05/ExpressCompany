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