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

    if (quantidade > 0) {
        exibeProduto.innerHTML += `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorXQuantidade}</span></section>`;
        valorTotal += valorXQuantidade;
        exibeValorTotal.innerHTML = '';
        document.getElementById('quantidade').value = 1;
        // quantidade = 1; //NÂO FUNCIONA
        exibeValorTotal.innerHTML = `R$ ${valorTotal}`;
        // mudaStatusBtn();
        ativaBtn();
    } else {
        alert('O campo "quantidade" precisa ser preenchido!');
    }
    // mudaStatusBtn();
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
