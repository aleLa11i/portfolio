const express = require("express");
require("dotenv").config();
const {PORT} = process.env;
const app = express();
const cors = require("cors");
const { check } = require("express-validator");
const { validErr } = require("./middlewares/validErr");
const ControllerSendEmail  = require("./controllers/controllerSendEmail");

app.use( express.urlencoded({extended: false}));
app.use( express.static("public") );
app.use( express.json() );
app.use(cors());
app.post("/api/sendemail",
[
    check("email", "El email es inválido.").isEmail(),
    check("title", "El titulo es obligatorio.").not().isEmpty(),
    check("text", "El cuerpo es obligatorio.").not().isEmpty(),
    validErr
],
    ControllerSendEmail
) 

app.listen( PORT, () =>{
    console.log(`Servidor corriendo en puerto ${ PORT }`);
} )