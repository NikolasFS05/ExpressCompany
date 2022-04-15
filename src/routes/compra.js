//Importación de modulos
const express = require("express");
const facturaSchema = require("../models/compra");
const router = express.Router();

//Creación de EndPoints
//Petición Get
router.get("/facturas", (req, res) => {
    facturaSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Get con parametro
router.get("/compra/:id", (req, res) => {
    const { id } = req.params;
    facturaSchema.find({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Post
router.post("/compra", (req, res) => {
    const factura = facturaSchema(req.body);
    factura .save() .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Petición Put
router.put("/compra/:id", (req, res) => {
    const { id } = req.params;
    const { usuario, producto, cuponDescuento ,precio, Totalprecio, metodoPago} = req.body;
    facturaSchemaSchema.updateOne({ _id: id }, {
        $set: { usuario, producto, cuponDescuento ,precio, Totalprecio, metodoPago}
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Delete
router.delete("/compra/:id", (req, res) =>{
    const { id } = req.params;
    facturaSchema.deleteOne({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error}));
});