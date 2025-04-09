import React, { useEffect, useState } from "react";
import ProdutoCard from "../Components/ProdutoCard";
import ProdutoForm from "../Components/ProdutoForm";
import { fetchProdutos } from "../services/api";
import axios from "axios";
import "./ProdutoList.css";

const ProdutoList = () => {
  const [produtos, setProdutos] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    fetchProdutos().then(setProdutos);
    buscarValorTotal();
  }, []);

  const handleNovoProduto = (produto) => {
    setProdutos((prev) => [...prev, produto]);
    buscarValorTotal(); // Atualiza o total quando adiciona produto
  };

  const buscarValorTotal = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/produtos/valor-total");
      setValorTotal(response.data);
    } catch (error) {
      console.error("Erro ao buscar valor total:", error);
    }
  };

  return (
    <div className="pagina-produtos">
      <h1>Lista de Produtos</h1>
      <ProdutoForm onProdutoCriado={handleNovoProduto} />
      <div className="produtos-container">
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>

      <footer className="rodape-total">
        Valor total do estoque: <strong>R$ {valorTotal.toFixed(2)}</strong>
      </footer>
    </div>
  );
};

export default ProdutoList;
