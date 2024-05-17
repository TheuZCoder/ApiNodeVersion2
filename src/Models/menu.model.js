const db = require("../Infraestrutura/database");

const listarMenus = async () => {
    try {
        const {rows} = await db.query('SELECT * FROM produto');
        return rows;
    } catch (error) {
        console.log("Error during product search:", error);
        res.status(500).json({ message: "erro interno no servidor ao buscar produtos :/" });
    }
}

const obterMenu = async (id) => {
    try {
        const {rows} = await db.query('SELECT * FROM produto WHERE id_pizza = $1', [id]);
        return rows;
    } catch (error) {
        console.log("Error during product search:", error);
        res.status(500).json({ message: "erro interno no servidor ao buscar pizza :/" });
    }
}

const criarMenu = async (
  nome_pizza,
  image_pizza,
  descricao_pizza,
  preco_pizza
) => {
  try {
    const { rows } = await db.query(
      "INSERT INTO produto (nome_pizza, image_pizza, descricao_pizza, preco_pizza) VALUES ($1, $2, $3, $4) RETURNING *",
      [nome_pizza, image_pizza, descricao_pizza, preco_pizza]
    );
    return rows;
  } catch (error) {
    console.log("Error during product registration:", error);
    res
      .status(500)
      .json({ message: "erro interno no servidor ao cadastrar pizza :/" });
  }
};

const atualizarMenu = async (nome_pizza,image_pizza,descricao_pizza,preco_pizza,id_pizza) => {
    try {
        const { rows } = await db.query(
          "UPDATE produto SET nome_pizza = $1, image_pizza = $2, descricao_pizza = $3, preco_pizza = $4 WHERE id_pizza = $5 RETURNING *",
          [nome_pizza, image_pizza, descricao_pizza, preco_pizza, id_pizza]
        );
        return rows;
    } catch (error) {
        console.error("Error during product update:", error);
        res.status(500).json({ message: "Erro ao editar pizza" });
    }
}

const excluirMenu = async (id) => {
    try {
        const {rows} = await db.query('DELETE FROM produto WHERE id_pizza = $1', [id]);
        if (result.row.length === 1) {
            res.status(200).json({ message: "Produto excluido com sucesso" });
        } else {
            res.status(404).json({ message: "Produto não encontrado" });
        }
    } catch (error) {
        console.log("Error during product deletion:", error);
        res.status(500).json({ message: "erro interno no servidor ao excluir pizza :/" });
    }
}

module.exports = {
    listarMenus,
    obterMenu,
    criarMenu,
    atualizarMenu,
    excluirMenu
}