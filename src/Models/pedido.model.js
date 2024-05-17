const db = require("../Infraestrutura/database");

// const listarPedidos = async () => {
// }

const obterPedido = async (id) => {
    try {
        const {rows} = await db.query(`
    SELECT
    Pedidos.id_pedido,
    Pedidos.data_pedido,
    Pedidos.status_pedido,
    Clientes.nome_cliente,
    ARRAY_AGG(Produto.nome_pizza) AS nome_pizzas,
    ARRAY_AGG(Produto.preco_pizza) AS precos_pizzas,
    SUM(Produto.preco_pizza) AS total_preco_pizzas
    FROM Pedidos
    INNER JOIN Clientes ON Pedidos.id_cliente = Clientes.id_cliente
    CROSS JOIN LATERAL (
    SELECT id_pizza
    FROM unnest(Pedidos.id_pizza) AS id_pizza
    ) AS id_pizza_expanded
    INNER JOIN Produto ON Produto.id_pizza = id_pizza_expanded.id_pizza
    WHERE Pedidos.id_pedido = Pedidos.id_pedido
    GROUP BY Pedidos.id_pedido, Pedidos.data_pedido, Pedidos.status_pedido, Clientes.nome_cliente;
    `);
    return rows;
    } catch (error) {
        console.log("Error during order search:", error);
        res.status(500).json({ message: "erro interno no servidor ao buscar pedido :/" });   
    }
}

const criarPedido = async (
  id_pedido,
  data_pedido,
  status_pedido,
  nome_pedido,
  id_cliente,
  id_pizza
) => {
  try {
    const { rows } = await db.query(
      "INSERT INTO Pedidos (id_pedido, data_pedido, status_pedido, nome_pedido,id_cliente, id_pizza) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [id_pedido, data_pedido, status_pedido, nome_pedido,id_cliente, id_pizza]
    );
    return rows;
  } catch (error) {
    console.log("Error during order registration:", error);
    res
      .status(500)
      .json({ message: "erro interno no servidor ao cadastrar pedido :/" });
  }
};

// const atualizarPedido = async (id, pedido) => {
// }

// const excluirPedido = async (id) => {
// }

module.exports = {
  //  listarPedidos,
    obterPedido,
    criarPedido,
  //  atualizarPedido,
  //  excluirPedido
}