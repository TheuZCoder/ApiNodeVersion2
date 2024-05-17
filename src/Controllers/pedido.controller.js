const pedidoModel = require('../Models/pedido.model');


exports.obterPedido = async (req, res) => {
    try {
        const pedido = await pedidoModel.obterPedido(req.params.id);
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ message: "erro interno no servidor ao buscar pedido no Controller :/" });
    }
};

exports.criarPedido = async (req, res) => {
    try {
        const pedido = await pedidoModel.criarPedido(req.body.id_pedido, req.body.data_pedido, req.body.status_pedido, req.body.nome_pedido,req.body.id_cliente, req.body.id_pizza);
        res.status(201).json(pedido);
    } catch (error) {
        res.status(500).json({ message: "erro interno no servidor ao cadastrar pedido no Controller :/" });
    }
};



