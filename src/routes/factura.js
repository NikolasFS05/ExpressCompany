//Importación de modulos
const express = require("express");
const facturaSchema = require("../models/factura");
const registroSchema = require("../models/registro");
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

//Petición Post
router.post("/facturas", (req, res) => {
    const factura = facturaSchema(req.body);
    factura .save() .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Petición Put
router.put("/facturas/:id", async(req, res) => {
    const { id } = req.params;
    const registro = registroSchema(req.body);
    var idRegistro = null;

    const registroConsulta = await registroSchema.findOne({usuario: req.body.usuario});
    if (!registroConsulta) {
        await registro.save().then((dataRegistro) => {
            idRegistro = dataRegistro._id;
        });
    } else {
        idRegistro = registroConsulta._id;
    }

    //const { usuario, pais, producto, precio, empresa, metodoPago, horaCompra, idCompra} = req.body;
    facturaSchema.updateOne({ _id: id }, {
        $addToSet: {facturas: idRegistro}
        //$set: { usuario, pais, producto, precio, empresa, metodoPago, horaCompra, idCompra}
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Delete
router.delete("/facturas/:id", (req, res) =>{
    const { id } = req.params;
    facturaSchema.deleteOne({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error}));
});

module.exports = router;