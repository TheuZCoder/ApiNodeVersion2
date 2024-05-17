const express = require('express');
const router = express.Router();
const funcionarioController = require('../Controllers/funcionario.controller');

//rota para listar todos os funcionarios
router.get('/', funcionarioController.listarFuncionarios);

//rota para obter detalhes de um funcionario
// router.get('/:id', funcionarioController.obterFuncionario);

//rota para criar um novo funcionario
// router.post('/', funcionarioController.criarFuncionario);

//rota para atualizar um funcionario
// router.put('/:id', funcionarioController.atualizarFuncionario);

//rota para excluir um funcionario
// router.delete('/:id', funcionarioController.excluirFuncionario);

//rota para login de funcionario
router.post('/login', funcionarioController.loginFuncionario);

module.exports = router;