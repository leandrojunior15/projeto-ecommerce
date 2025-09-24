let containerproduto = document.querySelector('.container-produtos')
let produtos = containerproduto


produtos = [
    {
        id: 1,
        nome: 'Iphone 15 Pro',
        categoria: 'smartphones',
        preco: 7999,
        precoOrignal: 8999,
        desconto: 11,
        imagem: "https://images.unsplash.com/photo-1700805732158-6f1169780ca7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descricao: "Smartphone Apple com câmera avençada ",
    },
    {
        id: 2,
        nome: 'sadasdasd'
    }
]


function mostrarProdutos(){
    let htmlProdutos = ""


    produtos.forEach(prd => {
        htmlProdutos = htmlProdutos + `
            <div class="cartao-produto">
                <img src="${prd.imagem}" class = "imagem-produto" >
                <div class = "info-produto">
                    <h3 class = "nome-produto">${prd.nome}</h3>
                    <p class = "descricao-produto"> ${prd.descricao} </p>
                    <p class = "preco-produto"> ${prd.preco} </p>
                    <button class = "botao-produto"> Ver Detalhes </button>
                </div>
            </div>
        `    
    });

    containerproduto.innerHTML = htmlProdutos
}

mostrarProdutos()