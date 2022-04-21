//Importación de modulos
const express = require("express");
const ingresoSchema = require("../models/compra");
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
    ingresoSchema.find({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Post
router.post("/ingreso", (req, res) => {
    const ingreso = ingresoSchema(req.body);
    ingreso .save() .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Petición Put
router.put("/ingreso/:id", (req, res) => {
    const { id } = req.params;
    const { usuario, contrasena} = req.body;
    ingresoSchema.updateOne({ _id: id }, {
        $set: { usuario, contrasena}
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Delete
router.delete("/ingreso/:id", (req, res) =>{
    const { id } = req.params;
    ingresoSchema.deleteOne({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error}));
});

module.exports = router;