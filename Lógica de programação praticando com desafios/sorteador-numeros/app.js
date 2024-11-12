'use strict'

function sortear(){
    let quantidadeN = parseInt(document.getElementById('quantidade').value);
    let deN = parseInt(document.getElementById('de').value);
    let ateN = parseInt(document.getElementById('ate').value);
    // alert(`Quantidade de Numero(s): ${quantidadeN} e do Numero: ${deN} até o Numero: ${ateN}`);
    console.log(`Quantidade de Numero(s): ${quantidadeN} e do Numero: ${deN} até o Numero: ${ateN}`);
    // gerarNumeroEleatorio(deN, ateN);
    let nSorteados = [];
    let numero;
    
    for (let i = 0; i < quantidadeN; i++){
        numero = gerarNumeroEleatorio(deN, ateN);

        while (nSorteados.includes(numero)) {
            numero = gerarNumeroEleatorio(deN, ateN);
        }
        
        nSorteados.push(numero);
        // console.log(nSorteados);
    }
    console.log(nSorteados);
    let resultado = document.getElementById('resultado');
    // console.log(resultado);
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${nSorteados}</label>`;
};

//Mas se você precisar que a função inclua, tanto o mínimo quanto o máximo, em seus resultados?
function gerarNumeroEleatorio(de, ate){
    let min = Math.ceil(de);
    let max = Math.floor(ate);
    let nAleatorio = Math.floor(Math.random() * (max - min +1) + min);
    console.log( 'O Numero: '+nAleatorio, 'É do tipo: ' +typeof nAleatorio);
    return nAleatorio;
};
