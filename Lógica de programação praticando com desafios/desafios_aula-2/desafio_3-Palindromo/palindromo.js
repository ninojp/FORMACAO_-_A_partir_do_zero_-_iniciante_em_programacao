'use strict'

let btnPesquisar = document.getElementById('btnPesquisar');

btnPesquisar.addEventListener('click', ehPalindromo);

document.getElementById('inputPalavraTestar').addEventListener('keydown', (event)=>{
    if(event.key === 'Enter'){
        ehPalindromo();
    };
});

function ehPalindromo(){
    let inputPalavraTestar = document.getElementById('inputPalavraTestar').value.toLowerCase();
    document.getElementById('sectExibeTela').innerHTML = `<p>Palavra Digitada: ${inputPalavraTestar}</p>`;
    let separarLetras = inputPalavraTestar.split('');
    document.getElementById('sectExibeTela').innerHTML += `<p>Palavra Separada: [${separarLetras}]</p>`;
    let letrasInvertidas = separarLetras.reverse();
    document.getElementById('sectExibeTela').innerHTML += `<p>Letras invertidas: [${separarLetras}]</p>`;
    let palavraInvertida = letrasInvertidas.join('');
    // console.log(palavraInvertida);
    if (inputPalavraTestar == palavraInvertida) {
        document.getElementById('sectExibeTela').innerHTML += `<p>Palavra Digitada: ${inputPalavraTestar} é um Palíndromo!<br> Pois é igual ao seu inverso: ${palavraInvertida}!</p>`;
    } else {
        document.getElementById('sectExibeTela').innerHTML += `<p>Palavra Digitada: ${inputPalavraTestar} NÃO é um Palíndromo!<br> Pois é Diferente do seu inverso: ${palavraInvertida}!</p>`;
    };
};
