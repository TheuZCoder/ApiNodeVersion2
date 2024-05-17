const clienteModel = require('../Models/cliente.model');

exports.listarClientes = async (req, res) => {
    try {
        const clientes = await clienteModel.listarClientes();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: "erro interno no servidor ao buscar clientes no Controller :/" });
    }
};

exports.obterCliente = async (req, res) => {
    try {
        const cliente = await clienteModel.obterCliente(req.params.id);
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: "erro interno no servidor ao buscar cliente no Controller :/" });
    }
}

exports.cadastrarCliente = async (req, res) => {
    try {
        const cliente = await clienteModel.cadastrarCliente(req.body.nome_cliente, req.body.email_cliente, req.body.endereco_cliente, req.body.telefone_cliente, req.body.senha_cliente);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ message: "erro interno no servidor ao cadastrar cliente no Controller :/" });
    }
}

exports.loginCliente = async (req, res) => {
    try {
        const cliente = await clienteModel.loginCliente(req.body.email_cliente, req.body.senha_cliente);
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: "erro interno no servidor ao fazer login no Controller :/" });
    }
}

exports.atualizarCliente = async (req, res) => {
    try {
        const cliente = await clienteModel.atualizarCliente(req.params.id, req.body);
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: "erro interno no servidor ao atualizar cliente no Controller :/" });
    }
}

exports.excluirCliente = async (req, res) => {
    try {
        const cliente = await clienteModel.excluirCliente(req.params.id);
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: "erro interno no servidor ao excluir cliente no Controller :/" });
    }
}


