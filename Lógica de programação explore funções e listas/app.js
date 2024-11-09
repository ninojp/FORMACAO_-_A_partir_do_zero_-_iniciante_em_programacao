"use strict"
let listaNumerosSecretos = [];
let nMaximoGerado = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;
limparCampo();
console.log(numeroSecreto);

function msgInicial(){
    inserirNoCampo('h1', 'Jogo do Numero Secreto');
    inserirNoCampo('p', 'Escolha um Numero entre 1 e 10');
};
msgInicial();
function inserirNoCampo(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
};

function verificarChute(){
    let numeroChute = parseInt(document.querySelector('input').value);
    // console.log(numeroChute == numeroSecreto);
    if (numeroChute === numeroSecreto) {
        inserirNoCampo('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let msgTentativas = `Você descobriu o número secreto! ${numeroChute}, com ${tentativas} ${palavraTentativas}`; 
        inserirNoCampo('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        numeroChute > numeroSecreto 
        ? inserirNoCampo('p', `O número secreto é menor que: ${numeroChute}`)
        : inserirNoCampo('p', `O número secreto é maior que: ${numeroChute}`);
        tentativas++;
        limparCampo();
    };
};

function gerarNumeroSecreto() {
    let numeroSecretoGerado = parseInt(Math.random() * nMaximoGerado + 1);
    if(listaNumerosSecretos.length == nMaximoGerado){
        listaNumerosSecretos = [];
    }
    if(listaNumerosSecretos.includes(numeroSecretoGerado)){
        return gerarNumeroSecreto();
    }else{
        listaNumerosSecretos.push(numeroSecretoGerado);
        console.log(listaNumerosSecretos);
        return numeroSecretoGerado;
    }
};

function limparCampo(){
    let campoChute = document.querySelector('input');
    campoChute.value = '';
};

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    msgInicial();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numeroSecreto);
};

function verificaBtn(){
    let btnDisabled = document.getElementById('reiniciar');
    if (!(btnDisabled.disabled == true)) {
        btnDisabled.disabled = true;
        console.log(btnDisabled);    
    }
}
verificaBtn();

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
