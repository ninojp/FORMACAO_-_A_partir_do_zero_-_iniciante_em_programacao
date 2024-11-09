'use strict'

//Crie uma lista vazia, com o nome listaGenerica
let listaGenerica = [];

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
document.getElementById('btnAdicionar').addEventListener('click', ()=>{
    console.log(linguagensDeProgramacao);
    linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
    console.log(linguagensDeProgramacao);
});

//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
document.getElementById('btnExib1').addEventListener('click', ()=>{
    console.log(linguagensDeProgramacao[0]);
});

//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
document.getElementById('btnExib2').addEventListener('click', ()=>{
    console.log(linguagensDeProgramacao[1]);
});

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
document.getElementById('btnExibUltimo').addEventListener('click', ()=>{
    console.log(linguagensDeProgramacao.length -1);
    console.log(linguagensDeProgramacao[linguagensDeProgramacao.length -1]);
});
