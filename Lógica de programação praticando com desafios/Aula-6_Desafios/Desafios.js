'use strict';

// - Crie uma função que valide se um número é positivo, negativo ou zero.
// - Implemente uma função que verifique se uma pessoa é maior de idade.
// - Desenvolva uma função que valide se uma string é vazia ou não.
// - Crie uma função que determine se um ano é bissexto
// - Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
// - Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.
// - Crie um array e utilize a função includes para verificar se um elemento específico está presente
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
// 2ª VERSÃO DO CODIGO 
document.getElementById('btnBusca').addEventListener('click', () => {
    // let pExiBusca = document.getElementById('pExiBusca');
    animes.includes(document.getElementById('inputBusca').value) ?
    pExiBusca.textContent = `Encontrei O: ${document.getElementById('inputBusca').value}` :
    pExiBusca.textContent = `Não Encontrei o Termo: ${document.getElementById('inputBusca').value}`;
});
