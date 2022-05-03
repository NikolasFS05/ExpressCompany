//Importación de modulos
const express = require("express");
const compraSchema = require("../models/compra");
const router = express.Router();

//Creación de EndPoints
//Petición Get
router.get("/compra", (req, res) => {
    compraSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Get con parametro
router.get("/compra/:id", (req, res) => {
    const { id } = req.params;
    compraSchema.find({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Post
router.post("/compra", (req, res) => {
    const ingreso = compraSchema(req.body);
    ingreso.save().then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Put
router.put("/compra/:id", (req, res) => {
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

    //const { usuario, producto, cuponDescuento ,precio, Totalprecio, metodoPago} = req.body;
    compraSchema.updateOne({ _id: id }, {
        $addToSet: {compras: idRegistro}
        //$set: { usuario, producto, cuponDescuento, precio, Totalprecio, metodoPago }
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Petición Delete
router.delete("/compra/:id", (req, res) => {
    const { id } = req.params;
    compraSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;