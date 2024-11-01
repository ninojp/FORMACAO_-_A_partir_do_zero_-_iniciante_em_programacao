let numeroSecreto = gerarNumeroSecreto();
console.log(numeroSecreto);

function verificarChute(){
    let numeroChute = document.querySelector('input').value;
    console.log(numeroChute == numeroSecreto);
    
};

function inserirNoCampo(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};
inserirNoCampo('h1', 'Jogo do Numero Secreto');
inserirNoCampo('p', 'Escolha um Numero entre 1 e 10');

function gerarNumeroSecreto() {
    return parseInt(Math.random()*10 +1);
};



//======================================================================
// let titulo = document.querySelector('h1');
// let paragrafo = document.querySelector('p');

// titulo.innerHTML = 'Jogo do Numero Secreto';
// paragrafo.innerHTML = 'Escolha um Numero entre 1 e 10';

// Existe diversas formas de SELECIONAR um elemento do document (DOM)

// let titulo = document.querySelector('h1');
// let titulo = document.querySelector('.h1__titulo');
// let titulo = document.querySelector('#tituloPagina');
// let titulo = document.getElementById('tituloPagina');
// let titulo = document.getElementsByTagName('h1');
// let titulo = document.getElementsByClassName('h1__titulo');
// console.log(titulo[0].innerHTML);
// console.log(titulo.innerHTML);
// console.log(titulo.innertext); //undefined
// console.log(titulo.textContent);

// Assim como existe outras formas de INSERIR

// titulo.innerHTML = 'Jogo do    Numero Secreto';
// titulo.innerText = 'Jogo do     Numero Secreto';
// titulo.textContent = 'Jogo do     Numero Secreto';
