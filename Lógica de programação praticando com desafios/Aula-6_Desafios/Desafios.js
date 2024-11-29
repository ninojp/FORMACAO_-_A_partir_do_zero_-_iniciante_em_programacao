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
        dadaAtualDoInput();
    } else {
        pExiSuaIdade.innerHTML = ` :(^_^): MENOR de Idade: ${inputIdSuaIdade.value}<br>`;
        dadaAtualDoInput();
    }
};
function dadaAtualDoInput(){
    pExiSuaIdade.innerHTML += ` :(^_^): Data Do Input: ${new Date(inputIdSuaIdade.value)}<br>`;
    pExiSuaIdade.innerHTML += ` :(^_^): Data Atual: ${new Date()}<br>`;
}
//=================================================================================================
// 3. Desenvolva uma função que valide se uma string é vazia ou não.

//=================================================================================================
// 4. Crie uma função que determine se um ano é bissexto

//=================================================================================================
// 5. Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.

//=================================================================================================
// 6. Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.

//=================================================================================================
// 7. Crie um array e utilize a função includes para verificar se um elemento específico está presente

//=================================================================================================
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
