export async function fetchProdutos() {
  const response = await fetch("http://localhost:8080/api/produtos");
  const data = await response.json();
  return data;
}

export async function criarProduto(produto) {
  const response = await fetch("http://localhost:8080/api/produtos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar produto");
  }

  return response.json();
}
