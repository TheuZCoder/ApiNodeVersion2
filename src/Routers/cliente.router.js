const express = require('express');
const router = express.Router();
const clienteController = require('../Controllers/cliente.controller');

//rota para listar todos os clientes
router.get('/', clienteController.listarClientes);

//rota para obter detalhes de um cliente
router.get('/:id', clienteController.obterCliente);

//rota para criar um novo cliente
router.post('/', clienteController.cadastrarCliente);

//rota para login de cliente
router.post('/login', clienteController.loginCliente);

//rota para atualizar um cliente
// router.put('/:id', clienteController.atualizarCliente);

//rota para excluir um cliente
// router.delete('/:id', clienteController.excluirCliente);

module.exports = router;