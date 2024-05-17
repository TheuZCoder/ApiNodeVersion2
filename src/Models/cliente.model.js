const db = require("../Infraestrutura/database");

const listarClientes = async () => {
  try {
    const { rows } = await db.query("SELECT * FROM clientes");
    return rows;
  } catch (error) {
    console.log("Error during client search:", error);
    res
      .status(500)
      .json({ message: "erro interno no servidor ao buscar clientes :/" });
  }
};

const obterCliente = async (id) => {
  try {
    const { rows } = await db.query(
      "SELECT * FROM clientes WHERE id_cliente = $1",
      [id]
    );
    return rows;
  } catch (error) {
    console.log("Error during client search:", error);
    res
      .status(500)
      .json({ message: "erro interno no servidor ao buscar cliente :/" });
  }
};

const cadastrarCliente = async (
  nome_cliente,
  email_cliente,
  endereco_cliente,
  telefone_cliente,
  senha_cliente
) => {
  try {
    const { rows } = await db.query(
      "INSERT INTO clientes (nome_cliente, email_cliente, endereco_cliente, telefone_cliente, senha_cliente) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        nome_cliente,
        email_cliente,
        endereco_cliente,
        telefone_cliente,
        senha_cliente,
      ]
    );
    return rows;
  } catch (error) {
    console.log("Error during client registration:", error);
    res
      .status(500)
      .json({ message: "erro interno no servidor ao cadastrar :/" });
  }
};

const loginCliente = async (email_cliente, senha_clientes) => {
  try {
    const { rows } = await db.query(
      "SELECT * FROM clientes WHERE email_cliente = $1 AND senha_cliente = $2",
      [email_cliente, senha_clientes]
    );
    return rows;
  } catch (error) {
    console.log("Error during login:", error);
    res.status(500).json({ message: "erro no servidor ao fazer login :/" });
  }
};

// const atualizarCliente = async (id,cliente) => {
// }

// const excluirCliente = async (id) => {
// }

module.exports = {
  listarClientes,
  obterCliente,
  cadastrarCliente,
  loginCliente,
  //atualizarCliente,
  //excluirCliente
};
