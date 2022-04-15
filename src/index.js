//Importación de modulos
const bodyparser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//Importación de las rutas
const compraRoutes = require("./routes/compra");
const ingresoRoutes = require("./routes/ingreso");
const registroRoutes = require("./routes/registro");
const facturaRoutes = require("./routes/factura");

//Creación del puerto y uso de express
const port = 3000;
const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//Creación del intermediario hacia las rutas
<<<<<<< Updated upstream
app.use('/api', registroRoutes);
=======
app.use('/api', compraRoutes);
app.use('/api',ingresoRoutes);
app.use('/api',registroRoutes);
>>>>>>> Stashed changes
app.use('/api', facturaRoutes);

//Conexión de la base de datos
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));

//Conexión con el puerto
app.listen(port, () => {
    console.log("Puerto en uso: " +port);
});