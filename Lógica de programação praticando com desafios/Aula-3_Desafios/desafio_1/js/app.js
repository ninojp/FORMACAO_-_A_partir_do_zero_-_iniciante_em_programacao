'use strict'

let valorTotal;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    console.log(produto, typeof produto);
    let nomeProduto = produto.split('-')[0];
    // console.log(nomeProduto, typeof nomeProduto);
    let valorUnitario = parseInt(produto.split('R$')[1]);
    // console.log(valorUnitario, typeof valorUnitario);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    // console.log(quantidade, typeof quantidade);
    let valorXQuantidade = (valorUnitario * quantidade);
    // let exibeProduto = document.querySelector('.carrinho__produtos__produto');
    // console.log(exibeProduto, typeof exibeProduto);
    let exibeProduto = document.getElementById('lista-produtos');
    let exibeValorTotal = document.querySelector('.carrinho__total');

    // Verificar se o produto existe: !produto ou produto.trim(semEspaço) idêntico a string'vazia'.
    if (!produto || produto.trim() === '' || produto.textContent === '') {
        alert("Selecione um produto válido.");
        return;
    };
    // Verificar se a quantidade é um NaN ou menor ou igual a zero.
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('O campo "quantidade" precisa ser preenchido!');
        return;
    }
    exibeProduto.innerHTML += `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorXQuantidade}</span></section>`;
    valorTotal += valorXQuantidade;
    exibeValorTotal.innerHTML = '';
    document.getElementById('quantidade').value = 1;
    // quantidade = 1; //NÂO FUNCIONA
    exibeValorTotal.innerHTML = `R$ ${valorTotal}`;
    ativaBtn();
};
//recuperar valores nome do produto, quantidade e valor 
//calcular o preço, o nosso subtotal 
//adicionar no carrinho 
//atualizar o valor total
function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.querySelector('.carrinho__total').textContent = 'R$ 0';
    desativaBtn();
};

function ativaBtn() {
    let btnLimpar = document.querySelector('#btnLimpar');
    if (btnLimpar.classList.contains('botao-limpar')) {
        btnLimpar.classList.remove('botao-limpar');
        btnLimpar.classList.add('botao-limpar-ativo');
    };
};
function desativaBtn() {
    let btnLimpar = document.querySelector('#btnLimpar');
    if (btnLimpar.classList.contains('botao-limpar-ativo')) {
        btnLimpar.classList.remove('botao-limpar-ativo');
        btnLimpar.classList.add('botao-limpar');
    };
};
