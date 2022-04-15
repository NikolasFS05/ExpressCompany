//Importación de modulos
const express = require("express");
const compraSchema = require("../models/compra");
const router = express.Router();

//Creación de EndPoints
//Petición Get
router.get("/ingreso", (req, res) => {
    compraSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Get con parametro
router.get("/ingreso/:id", (req, res) => {
    const { id } = req.params;
    compraSchema.find({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Post
router.post("/ingreso", (req, res) => {
    const ingreso = compraSchema(req.body);
    ingreso .save() .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Petición Put
router.put("/ingreso/:id", (req, res) => {
    const { id } = req.params;
    const { usuario, producto, cuponDescuento ,precio, Totalprecio, metodoPago} = req.body;
    compraSchema.updateOne({ _id: id }, {
        $set: { usuario, producto, cuponDescuento ,precio, Totalprecio, metodoPago}
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Delete
router.delete("/ingreso/:id", (req, res) =>{
    const { id } = req.params;
    compraSchema.deleteOne({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error}));
});