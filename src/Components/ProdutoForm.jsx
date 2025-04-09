// src/Components/ProdutoForm.jsx
import React, { useState } from "react";
import { criarProduto } from "../services/api";

const ProdutoForm = ({ onProdutoCriado }) => {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [preco, setPreco] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoProduto = {
      nome,
      quantidade: parseInt(quantidade),
      preco: parseFloat(preco),
    };

    const produtoCriado = await criarProduto(novoProduto);
    onProdutoCriado(produtoCriado);

    // Limpar campos
    setNome("");
    setQuantidade(0);
    setPreco(0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "40px" }}>
      <h2>Novo Produto</h2>
      <input
        type="text"
        placeholder="Nome do produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        step="0.01"
        required
      />
      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

export default ProdutoForm;
