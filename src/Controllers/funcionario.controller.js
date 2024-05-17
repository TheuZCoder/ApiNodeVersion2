const funcionarioModel = require('../Models/funcionario.model');

exports.loginFuncionario = async (req, res) => {
    try {
        const funcionario = await funcionarioModel.loginFuncionario(req.body.nome_atendente, req.body.senha_atendente);
        res.json(funcionario);
    } catch (error) {
        res.status(500).json({ message: "erro interno no servidor ao fazer login no Controller :/" });
    }
}

exports.listarFuncionarios = async (req, res) => {
    try {
        const funcionarios = await funcionarioModel.listarFuncionarios();
        res.json(funcionarios);
    } catch (error) {
        res.status(500).json({ message: "erro interno no servidor ao listar funcionarios no Controller :/" });
    }
}

