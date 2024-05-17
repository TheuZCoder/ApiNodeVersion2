const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const clienteRouter = require("./Routers/cliente.router");
const funcionarioRouter = require("./Routers/funcionario.router");
const menuRouter = require("./Routers/menu.router")
const pedidoRouter = require("./Routers/pedido.router");

app.use("/clientes", clienteRouter);
app.use("/funcionarios", funcionarioRouter);
app.use("/menus", menuRouter);
app.use("/pedidos", pedidoRouter);

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});
