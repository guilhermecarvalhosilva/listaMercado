var nome = document.getElementById('produto')
var preco = document.getElementById('preco')
var lista = document.querySelectorAll('.lista')[0] 
var total = document.querySelector('#total') 
var produtos = []

document.getElementById("enviar").addEventListener('click', () => {
    if(nome.value.length == 0 || preco.value.length == 0) {
        alert('Campos não foram preenchidos')
        nome.value = ''
        preco.value = ''
    } else {
        var pr = Number(preco.value).toFixed(2)

        produtos.push({
            nome: nome.value,
            preco: pr
        })
        adicinarItem()
        nome.value = ''
        preco.value = ''
    }
})

function adicinarItem() {
    lista.innerHTML = ""
    total.innerHTML = ""
    let soma = 0
    produtos.forEach((item, index) => {
        lista.innerHTML += `
        <article class="lista-item">
            <p class="produto">${produtos[index].nome}</p>
            <span class="preco">R$ ${produtos[index].preco}</span>
        </article>
        `
        soma += Number(produtos[index].preco)
    })
    total.innerHTML = soma.toFixed(2)
}

