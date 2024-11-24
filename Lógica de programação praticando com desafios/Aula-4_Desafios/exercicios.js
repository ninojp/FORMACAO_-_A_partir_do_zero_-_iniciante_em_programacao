'use strict';

function calcularDescontoTotal(quantidadeDeJogos) {
    let desconto = 0;
    let i = 0;
    while (i < quantidadeDeJogos) {
        if (quantidadeDeJogos >= 5 && quantidadeDeJogos < 10) {
            desconto += 0.1 * 50;
        } else if (quantidadeDeJogos >= 10) {
            desconto += 0.2 * 50;
        }
        i++;
    }
    console.log('calcularDescontoTotal: ' + desconto);
    return desconto;
};
calcularDescontoTotal(6);
//=================================================================

//Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.
const functionParseInt = (params) => {
    console.log('O parametro passado foi: ' + params, typeof params);
    let novoParams = parseInt(params);
    console.log('O novo parametro passado foi: ' + novoParams, typeof novoParams);
};
functionParseInt('10');

//Solução do professor
function converterParaInteiro(valorString) {
    return parseInt(valorString);
}
// Exemplo de uso
let valorString = "42";
let valorInteiro = converterParaInteiro(valorString);
console.log(valorInteiro);  // Saída esperada: 42
//===================================================================================

//Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.
// let tipoCalc;
// tipoCalc = 'adição';
// tipoCalc = 'subtração';
// tipoCalc = 'multiplicação';
// tipoCalc = 'divisão';
const calcAdicao = (val1, val2) => {
    if (val1 > 0 && val2 > 0) {
        return (val1 + val2);
    } else {
        console.log('O numero inserido precisa ser positivo!: Soma');
    }
};
const calcSubtracao = (val1, val2) => {
    if (val1 > 0 && val2 > 0 && val1 > val2) {
        return (val1 - val2);
    } else {
        console.log('O numero inserido precisa ser positivo e val1 maior q val2!: Subtração');
    }
};
const calcMultiplicacao = (val1, val2) => {
    if (val1 > 0 && val2 > 0) {
        return (val1 * val2);
    } else {
        console.log('O numero inserido precisa ser positivo!: Multiplicação');
    };
};
const calcDivisao = (val1, val2) => {
    if (val1 > 0 && val2 > 0 && val1 > val2) {
        return (val1 / val2);
    } else {
        console.log('O numero inserido precisa ser positivo e val1 maior q val2!: Divisão');
    };
};
const calculadora = (operacao, v1, v2) =>{
    switch (operacao) {
        case 'adição':
            console.log(calcAdicao(v1, v2));
            break;
        case 'subtração':
            console.log(calcSubtracao(v1, v2));
            break;
        case 'multiplicação':
            console.log(calcMultiplicacao(v1, v2));
            break;
        case 'divisão':
            console.log(calcDivisao(v1, v2));
            break;
        default:
            console.log('Escolha umas das quatro operações!')
            break;
    };
};
calculadora('divisão', 100, 20);
// if (tipoCalc == 'adição') {
//     let soma = calcAdicao(10, 2);
//     console.log(soma);
// } else if (tipoCalc == 'subtração') {
//     let sub = calcSubtracao(100, 12);
//     console.log(sub);
// } else if (tipoCalc == 'multiplicação') {
//     let mult = calcMultiplicacao(2, 20);
//     console.log(mult);
// } else if (tipoCalc == 'divisão') {
//     let div = calcDivisao(12, 10);
//     console.log(div);
// } else {
//     console.log('Escolha umas das quatro operações!')
// };

//Solução do professor
// function adicao(a, b) {
//     return a + b;
// }
// function subtracao(a, b) {
//     return a - b;
// }
// function multiplicacao(a, b) {
//     return a * b;
// }
// function divisao(a, b) {
//     if (b !== 0) {
//         return a / b;
//     } else {
//         return "Erro: divisão por zero.";
//     }
// }
// function calculadora(operacao, a, b) {
//     switch (operacao) {
//         case 'soma':
//             return adicao(a, b);
//         case 'subtracao':
//             return subtracao(a, b);
//         case 'multiplicacao':
//             return multiplicacao(a, b);
//         case 'divisao':
//             return divisao(a, b);
//         default:
//             return "Operação inválida.";
//     }
// }
// Exemplo de uso
// let resultado = calculadora('soma', 5, 3);
// console.log(resultado);  // Saída esperada: 8
//===================================================================

//Desafio 4: Verificação de Números Pares e Ímpares
const parOUimpar = (numero) => {
    if(numero % 2 === 0){
        return 'Numero é Par';
    }else{
        return 'Numero é Impar';
    }
};
console.log('Numero é Par ou Impar? ' +parOUimpar(1));
//==========================================================================

//não fiz porque não sabia como fazer o calculo da conversão!
//Desafio 5: Conversão de Temperatura
function converterTemperatura(valor, escala) {
    if (escala.toLowerCase() === 'celsius') {
        return (valor * 9/5) + 32;  // Celsius para Fahrenheit
    } else if (escala.toLowerCase() === 'fahrenheit') {
        return (valor - 32) * 5/9;  // Fahrenheit para Celsius
    } else {
        return "Escala inválida";
    }
}
// Exemplo de uso
let temperaturaCelsius = 25;
let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, 'celsius');
console.log(temperaturaFahrenheit);  // Saída esperada: 77
