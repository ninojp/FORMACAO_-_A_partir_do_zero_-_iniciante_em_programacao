'use strict';
// 1. Crie uma função que valide se um número é positivo, negativo ou zero.
function validaNumero(numero){
    if(numero > 0) {
        return 'Positivo';
    }else if(numero < 0){
        return 'Negativo';
    }else{
        return 'Neutro: Zero';
    };
};
btnInseriN.addEventListener('click', ()=>{
    pExiInseriN.textContent = ` :(^_^): O Número Digitado é: ${validaNumero(inputIdInseriN.value)}`;
});
inputIdInseriN.addEventListener('keypress', (event)=>{
    if (event.key === 'Enter') {
        pExiInseriN.textContent = ` :(^_^): O Número Digitado é: ${validaNumero(inputIdInseriN.value)}`;
    };
});
//=================================================================================================

// 2. Implemente uma função que verifique se uma pessoa é maior de idade.
// const inputIdSuaIdade = document.getElementById('inputIdSuaIdade');
inputIdSuaIdade.addEventListener('keypress', (event)=>{
    if ((event.key === 'Enter') && (inputIdSuaIdade.value !== '')) {
        console.log(inputIdSuaIdade.value, typeof inputIdSuaIdade.value);
        verificaIdade();
    }
});
btnSuaIdade.addEventListener('click', ()=>{
    verificaIdade();
});
function verificaIdade(){
    // console.log('Exercício 2: new Date().getFullYear().toString()\n' + new Date().getFullYear().toString());
    // console.log('Exercício 2: new Date().toISOString()\n' + new Date().toISOString());
    if (inputIdSuaIdade.value >= 18) {
        pExiSuaIdade.innerHTML = ` :(^_^): MAIOR de Idade: ${inputIdSuaIdade.value}<br>`;
        // dadaAtualDoInput();
        comparaIdades();
    } else {
        pExiSuaIdade.innerHTML = ` :(^_^): MENOR de Idade: ${inputIdSuaIdade.value}<br>`;
        // dadaAtualDoInput();
        comparaIdades();
    }
};
//As duas funções abaixo não funcionan foram apenas testes
// function comparaIdades(){
//     let inputSuaIdade = new Date(inputIdSuaIdade.value);
//     console.log(inputSuaIdade, typeof inputSuaIdade);
//     inputSuaIdade.setHours(0, 0, 0, 0);
//     console.log(inputSuaIdade, typeof inputSuaIdade);

//     let dataAtual = new Date();
//     console.log(dataAtual, typeof dataAtual);
//     dataAtual.setHours(0, 0, 0, 0);
//     console.log(dataAtual, typeof dataAtual);

//     let inputDataNasc = inputIdDataNasc.value;
//     console.log(inputDataNasc, typeof inputDataNasc);
// };
// function dadaAtualDoInput(){
//     pExiSuaIdade.innerHTML += ` :(^_^): Data Do Input: ${new Date(inputIdSuaIdade.value)}<br>`;
//     pExiSuaIdade.innerHTML += ` :(^_^): Data Atual: ${new Date()}<br>`;
// }
//=================================================================================================

// 3. Desenvolva uma função que valide se uma string é vazia ou não.
function validaTexto(texto){
    return texto === '' ? 'Digite algo!' : 'Foi Digitado';
}
console.log('Exercício 3: '+validaTexto(''));
console.log('Exercício 3: '+validaTexto('Nino JP'));

//=================================================================================================

// 4. Crie uma função que determine se um ano é bissexto
function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Ano bissexto";
    } else {
        return "Não é bissexto";
    }
}
console.log('Exercício 4: '+verificarAnoBissexto(2025));
//=================================================================================================

// 5. Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
function calcularMedia(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Um dos números não é válido.";
    }
    return (num1 + num2) / 2;
}
console.log('Exercício 5: '+calcularMedia(8,5))
//=================================================================================================

// 6. Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.
function obterTamanhoArray(arr) {
    return arr.length;
}
//exemplo de uso
const minhaLista = [1,2,3,4,5,6,7,8,9,10]
console.log('Exercício 6: '+obterTamanhoArray(minhaLista));
//=================================================================================================

// 7. Crie um array e utilize a função includes para verificar se um elemento específico está presente
const meuArray = [10, 20, 30, 40, 50];
console.log("Exercício 7: O array contém o número 30?", meuArray.includes(30));
//saída esperada: "O array contém o número 30?" true
//=================================================================================================

// Exercícios 8. 9.
const animes = [];
animes.push('.Hack');
animes.push('7 Seeds');
animes.push('9 A Salvação');
animes.push('11Eyes');
animes.push('30-sai no Hoken Taiiku');
// 1ª VERSÃO DO CODIGO 
// const btnBusca = document.getElementById('btnBusca');
// const inputBusca = document.getElementById('inputBusca');
// btnBusca.addEventListener('click', () => {
//     buscaNome(inputBusca.value);
// });
// const buscaNome = (valorInputBusca) => {
//     const pExiBusca = document.getElementById('pExiBusca');
//     if (animes.includes(valorInputBusca)) {
//         pExiBusca.textContent = `Encontrei O: ${valorInputBusca}`;
//     } else {
//         pExiBusca.textContent = `Não Encontrei o Termo: ${valorInputBusca}`;
//     }
// };
// 2ª, 3ª VERSÃO DO CODIGO - Descobri q posso usar DIRETAMENTE o ID do elemento HTML, aqui no javascript
const buscaNoArray = () => {
    // let pExiBusca = document.getElementById('pExiBusca');
    // let inputBusca = document.getElementById('inputBusca').value;
    animes.includes(inputBusca.value) ?
    pExiBusca.textContent = `Encontrei :(^_^): - ${inputBusca.value}` :
    pExiBusca.textContent = `Não Encontrei :(^_^): - ${inputBusca.value}`;
};
// document.getElementById('btnBusca').addEventListener('click', () => buscaNoArray());
btnBusca.addEventListener('click', () => buscaNoArray());
divIdCampoBusca.addEventListener('keypress', () => buscaNoArray());
//=========================================================================================

//10. Desenvolva uma função que receba um array de objetos representando estudantes de um curso
//e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.

// Função que verifica se um objeto está presente no array
function verificarObjetoNoArray(arr, objeto) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}
// Array de objetos representando alunos
const alunos = [
    { id: 1, nome: 'João', idade: 20 },
    { id: 2, nome: 'Maria', idade: 22 },
    { id: 3, nome: 'Pedro', idade: 21 },
    { id: 4, nome: 'Ana', idade: 19 }
];
// Objeto que queremos verificar se está presente no array
const alunoProcurado = { id: 2, nome: 'Maria', idade: 22 };
// Utilizando a função para verificar a presença do objeto no array
const objetoEstaPresente = verificarObjetoNoArray(alunos, alunoProcurado);
// Exibindo o resultado
if (objetoEstaPresente) {
    console.log('Exercício 10: O aluno está presente no array.');
} else {
    console.log('Exercício 10: O aluno não está presente no array.');
}
//=================================================================================

//11. Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.
function calcularSomaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;
    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    }
    return {
        somaPares,
        produtoImpares
    };
}
const numeros = [1, 2, 3, 4, 5];
const resultado = calcularSomaProduto(numeros);
console.log("Exercício 11: Soma dos pares:", resultado.somaPares);
console.log("Exercício 11: Produto dos ímpares:", resultado.produtoImpares);
