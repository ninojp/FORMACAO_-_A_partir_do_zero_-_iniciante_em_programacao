//SELECIONAR um elemento do document
let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p');
// let titulo = document.querySelector('.h1__titulo');
// let titulo = document.querySelector('#tituloPagina');
// let titulo = document.getElementById('tituloPagina');
// let titulo = document.getElementsByTagName('h1');
// let titulo = document.getElementsByClassName('h1__titulo');
// console.log(titulo[0].innerHTML);
// console.log(titulo.innerHTML);
// console.log(titulo.innertext); //undefined
// console.log(titulo.textContent);

//INSERIR
titulo.innerHTML = 'Jogo do Numero Secreto';
paragrafo.innerHTML = 'Escolha um Numero entre 1 e 10';
// titulo.innerText = 'Jogo do     Numero Secreto';
// titulo.textContent = 'Jogo do     Numero Secreto';

function verificarChute(){
    console.log('O botão foi clicado')
    alert('O botão foi clicado');
}

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Bem-vindo ao mundo dev';
