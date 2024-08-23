const express = require("express");
const cors = require("cors");
const router = require("./router"); 

require('dotenv').config();
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
    console.log("Servidor rodando, tudo ok");
});
