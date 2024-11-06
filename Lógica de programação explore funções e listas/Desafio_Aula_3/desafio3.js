"use strict"

//Exercício 1
document.getElementById('IMC').addEventListener('click', () => {
    let altura = prompt('Digite sua altura, em metros:');
    let peso = prompt('Digite seu peso, em quilogramas:');
    calculoIMC(altura, peso);
});
const calculoIMC = (a, p) => {
    document.getElementById('pExibIMC').innerText = `O seu IMC é: ${parseInt(p / (a * a))}`;
};

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro 
//(formula: n! = n . (n – 1)), que eu achei na internet
document.getElementById('btnFatorial').addEventListener('click', () => {
    let nfDigitado = prompt('Digite um numero para o calculo Fatorial: ');
    caluculoFatorial(nfDigitado);
});
const caluculoFatorial = (nfDigitado) => {
    if (nfDigitado === 0 || nfDigitado === 1) {
        return 1;
    }
    let nFatorial = 1;
    for (let i = 2; i <= nfDigitado; i++) {
        nFatorial *= i;
    }
    //   return nFatorial;
    document.getElementById('pFatorial').innerText = `O Fatorial do numero ${nfDigitado} Digitado é: ${nFatorial}`;
    // let nFatorial = nfDigitado * (nfDigitado -1);
    // document.getElementById('pFatorial').innerText = `O Fatorial do numero Digitado é: ${nFatorial}`;
};
// Resposta do professor
// function calcularFatorial(numero) {
//     if (numero === 0 || numero === 1) {
//         return 1;
//     }
//     let fatorial = 1;
//     for (let i = 2; i <= numero; i++) {
//         fatorial *= i;
//     }
//     return fatorial;
// }
// // Exemplo de uso
// let numero = 7;
// let resultado = calcularFatorial(numero);
// console.log(`O fatorial de ${numero} é ${resultado}`);
//========================================================================================

//Crie uma função que converte um valor em dólar, passado como parâmetro, 
//e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$5,87.

document.getElementById('btnDolar').addEventListener('click', () => {
    let vdDolar = prompt('Digite o valor em dolar');
    conversorDolar(vdDolar);
});
const conversorDolar = (vdDolar) => {
    let vEmReais = vdDolar * 5.87;
    return document.querySelector('#pDolar').innerText = `O valor de ${vdDolar} dolar(es) em Reais é: R$${vEmReais}`;
}
//=================================================================================

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro
document.getElementById('btnAreaPerimetro').addEventListener('click', () => {
    let largura = parseInt(prompt('Digite a Largura:'));
    let comprimento = parseInt(prompt('Digite o Comprimento:'));
    areaPerimetroRetangulo(largura, comprimento);
});
const areaPerimetroRetangulo = (largura, comprimento) => {
    let area = largura * comprimento;
    let perimetro = 2 * (largura + comprimento);
    document.getElementById('pAreaPerimetro').innerText = `A area do Retangulo é: ${area} e seu Perimetro é: ${perimetro}`;
};
//========================================================================================

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
document.getElementById('btnAreaCircular').addEventListener('click', () => {
    let raio = parseInt(prompt('Digite o Raio do Circulo:'));
    circuloAreaPerimetro(raio);
});
const circuloAreaPerimetro = (raio) => {
    let areaCirculo = Math.PI * raio;
    let perimetroCirculo = 2 * Math.PI * raio;
    document.getElementById('pAreaCircular').innerText = `A area do Circulo é: ${areaCirculo.toFixed(2)} e seu Perimetro é: ${perimetroCirculo.toFixed(2)}`;
};
//========================================================================================

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
document.getElementById('btnTabuada').addEventListener('click', () => {
    let nTabuada = prompt('Digite um numero para nossa Tabuada?');
    criarTabuada(nTabuada);
});
const criarTabuada = (nTabuada) => {
    for(let i = 1 ; i <= 10 ; i++){
        let resultado = nTabuada * i;
        console.log(`${nTabuada} x ${i} = ${resultado}`);
    };
};
