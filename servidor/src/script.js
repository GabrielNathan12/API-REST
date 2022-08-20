const express = require("express");
const routes = require("./routes");
const cors = require("cors");
require("./database/script");

const Porta = 3010;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.listen(Porta, () => console.log(`escutando na porta : ${Porta}!`));