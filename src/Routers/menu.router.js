const express = require('express');
const router = express.Router();
const menuController = require('../Controllers/menu.controller');

//rota para listar todos os produtos
router.get('/', menuController.listarMenus);

//rota para obter detalhes de um produto
router.get('/:id', menuController.obterMenu);

//rota para criar um novo produto
router.post('/', menuController.criarMenu);

//rota para atualizar um produto
router.put('/:id_pizza', menuController.atualizarMenu);

//rota para excluir um produto
router.delete('/:id', menuController.excluirMenu);

module.exports = router;