const express = require('express');
const router = express.Router();
const pedidoController = require('../Controllers/pedido.controller');

//rota para listar todos os pedidos
// router.get('/', pedidoController.listarPedidos);

//rota para obter detalhes de um pedido
router.get('/:id', pedidoController.obterPedido);

//rota para criar um novo pedido
router.post('/', pedidoController.criarPedido);

//rota para atualizar um pedido
// router.put('/:id', pedidoController.atualizarPedido);

//rota para excluir um pedido
// router.delete('/:id', pedidoController.excluirPedido);

module.exports = router;