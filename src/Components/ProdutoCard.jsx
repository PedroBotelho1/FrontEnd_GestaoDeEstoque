import React from "react";
import "./ProdutoCard.css";

const ProdutoCard = ({ produto }) => {
  return (
    <div className="produto-card">
      <h2>{produto.nome}</h2>
      <p>Quantidade: {produto.quantidade}</p>
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
    </div>
  );
};

export default ProdutoCard;