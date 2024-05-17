const menuModel = require('../Models/menu.model');

exports.listarMenus = async (req, res) => {
    try {
        const menus = await menuModel.listarMenus();
        res.json(menus);
    } catch (error) {
        res.status(500).json({ message: "erro interno no servidor ao buscar menus no Controller :/" });
    }
};

exports.obterMenu = async (req, res) => {
    try {
        const menu = await menuModel.obterMenu(req.params.id);
        res.json(menu);
    } catch (error) {
        res.status(500).json({ message: "erro interno no servidor ao buscar menu no Controller :/" });
    }
};

exports.criarMenu = async (req, res) => {
    try {
        const menu = await menuModel.criarMenu(req.body.nome_pizza, req.body.image_pizza, req.body.descricao_pizza, req.body.preco_pizza);
        res.status(201).json(menu);
    } catch (error) {
        res.status(500).json({ message: "erro interno no servidor ao cadastrar menu no Controller :/" });
    }
};

exports.atualizarMenu = async (req, res) => {
    try {
        const menu = await menuModel.atualizarMenu(
          req.body.nome_pizza,
          req.body.image_pizza,
          req.body.descricao_pizza,
          req.body.preco_pizza,
          req.params.id_pizza
        );
        res.json(menu);
    } catch (error) {
        res.status(500).json({ message: "erro interno no servidor ao atualizar menu no Controller :/" });
    }
};

exports.excluirMenu = async (req, res) => {
    try {
        const menu = await menuModel.excluirMenu(req.params.id);
        res.json(menu);
    } catch (error) {
        res.status(500).json({ message: "erro interno no servidor ao excluir menu no Controller :/" });
    }
};


