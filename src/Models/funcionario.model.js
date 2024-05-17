const db = require("../Infraestrutura/database");


const loginFuncionario = async (nome_atendente, senha_atendente) => {
    try {
        const { rows } = await db.query('SELECT * FROM atendente WHERE nome_atendente = $1 AND senha_atendente = $2', [nome_atendente, senha_atendente]);
        return rows;
    } catch (error) {
        console.log("erro ao executar consulta sSQL", error);
        res.status(500).json({ message: "erro no servidor ao fazer login :/" });
    }
}

const listarFuncionarios = async () => {
    try {
        const { rows } = await db.query('SELECT * FROM atendente');
        return rows;
    } catch (error) {
        console.log("erro ao executar consulta sSQL", error);
        res.status(500).json({ message: "erro no servidor ao listar funcionarios :/" });
    }
}

// const obterFuncionario = async (id) => {
// }

// const criarFuncionario = async (funcionario) => {
// }

// const atualizarFuncionario = async (id, funcionario) => {
// }

// const excluirFuncionario = async (id) => {
// }

module.exports = {
    loginFuncionario,
    listarFuncionarios,
    // obterFuncionario,
    // criarFuncionario,
    // atualizarFuncionario,
    // excluirFuncionario
}