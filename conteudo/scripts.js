let containerproduto = document.querySelector('.container-produtos')
let produtos = containerproduto
let pesquisa = document.querySelector('#pesquisa')
let filtro = ""
let categoria = document.querySelectorAll('.botao-categorias')
let categoriaEscolhida = "todos"

produtos = [
    {
        id: 1,
        nome: 'Iphone 15 Pro',
        categoria: 'smartphones',
        preco: 7999,
        precoOrignal: 8999,
        desconto: 11,
        imagem: "https://images.unsplash.com/photo-1695619575284-72db5dd6439e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descricao: "Smartphone Apple com câmera avençada ",
    },
    {
        id: 2,
        nome: 'MacBook Air M2',
        categoria: 'notebooks',
        preco: 8999,
        precoOriginal: 9999,
        desconto: 10,
        imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descricao: "Notebook Apple ultrafino e potente, com chip M2",
    },
    {
        id: 3,
        nome: 'AirPods Pro',
        categoria: 'fones',
        preco: 1899,
        precoOriginal: 2999,
        desconto: 11,
        imagem: "https://images.unsplash.com/photo-1682939960849-60f4098b4b39?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descricao: "Fones de ouvido sem fio com cancelamento de ruído",
    },
    {
        id: 4,
        nome: 'Apple Watch Series 9',
        categoria: 'smartwatch',
        preco: 3299,
        precoOriginal: 4299,
        desconto: 100,
        imagem: "https://images.unsplash.com/photo-1654888209393-3bfddc5a84ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descricao: "Relógio inteligente com monitoramento de saúde e muito mais"
    },
    {
        id: 5,
        nome: 'Samsung Galaxy S25 Ultra',
        categoria: 'smartphones',
        preco: 5499,
        precoOriginal: 6598,
        desconto: 11,
        imagem: "https://images.unsplash.com/photo-1738830246146-599b67d009db?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descricao: "Smartphone Samsung com câmera de alta resolução",
    },
    {
        id: 6,
        nome: 'Dell XPS 13',
        categoria: 'notebooks',
        preco: 7499,
        precoOriginal: 8499,
        desconto: 11,
        imagem: "https://images.unsplash.com/photo-1720556405438-d67f0f9ecd44?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descricao: "Notebook Dell com design elegante e desempenho potente",
    },
    {
        id: 7,
        nome: 'Sony WH-1000XM5',
        categoria: 'fones',
        preco: 1499,
        precoOriginal: 1999,
        desconto: 25,
        imagem: "imagens/Sony WH-1000XM5.jpg",
        descricao: "Fones de ouvido com cancelamento de ruído de alta qualidade",
    },
    {
        id: 8,
        nome: 'Teclado Magic',
        categoria: 'acessorios',
        preco: 1699,
        imagem: "https://images.unsplash.com/photo-1625645153391-ae69c0b090cf?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descricao: "Teclado sem fio da Apple com design elegante",
    },
    {
        id: 9,
        nome: 'Magic Mouse',
        categoria: 'acessorios',
        preco: 829,
        imagem: "https://images.unsplash.com/photo-1625645183402-c242f22e1911?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descricao: "Mouse sem fio da Apple com design ergonômico",
    }
]


function mostrarProdutos() {
    let htmlProdutos = ""


    produtos.forEach(prd => {

        if (prd.nome.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())) {
            if( prd.categoria === categoriaEscolhida || categoriaEscolhida === "todos" ) {

            htmlProdutos = htmlProdutos + `
            <div class="cartao-produto">
                <img src="${prd.imagem}" class = "imagem-produto" >
                <div class = "info-produto">
                    <h3 class = "nome-produto">${prd.nome}</h3>
                    <p class = "descricao-produto"> ${prd.descricao} </p>
                    <p class = "preco-produto"> R$ ${prd.preco} </p>
                    <button class = "botao-produto"> Ver Detalhes </button>
                </div>
            </div>
        `
            }
        }
    });

    containerproduto.innerHTML = htmlProdutos
}

mostrarProdutos()

pesquisa.addEventListener('input', filtrar)


function filtrar() {
    filtro = pesquisa.value

    mostrarProdutos()
}

categoria.forEach(botao => {
    botao.addEventListener("click", function(){
        categoriaEscolhida = botao.getAttribute('data-categoria')
        categoria.forEach(b => b.classList.remove('ativo'))
        botao.classList.add('ativo')
        mostrarProdutos()
    } )
})