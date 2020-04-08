const port = 3000;
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
    res.send({ nome: "sabao", preco: "2.50" });
});

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}.`)
});