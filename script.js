function saudar(nome) {
    document.getElementById("saudacao").textContent =
      `Olá, ${nome}! Seja bem-vindo!`;
  }
  
  document.getElementById("btnSaudar").addEventListener("click", () => {
    const nome = document.getElementById("inputNome").value;
    saudar(nome || "visitante");
  });
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pares = [];
  
  for (const numero of numeros) {
    if (numero % 2 === 0) {
      pares.push(numero);
    }
  }
  
  document.getElementById("pares").textContent =
    "Pares: " + pares.join(", ");
  
  document.getElementById("btnTitulo").addEventListener("click", () => {
    document.getElementById("titulo").textContent =
      "Título alterado com sucesso!";
  });