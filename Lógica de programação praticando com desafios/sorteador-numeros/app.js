'use strict'

function sortear() {
    // let quantidadeN = document.getElementById('quantidade').value;
    // let deN = document.getElementById('de').value;
    // let ateN = document.getElementById('ate').value;
    let quantidadeN = parseInt(document.getElementById('quantidade').value);
    let deN = parseInt(document.getElementById('de').value);
    let ateN = parseInt(document.getElementById('ate').value);
    // console.log(`Quantidade de Numero(s): ${quantidadeN} e do Numero: ${deN} até o Numero: ${ateN}`);
    let nSorteados = [];
    let numero;
    let resultado = document.getElementById('resultado');
    // console.log(quantidadeN, typeof quantidadeN);
    // console.log(deN, typeof deN);
    // console.log(ateN, typeof ateN);

    // if(deN <= ateN){
    //     resultado.innerHTML = `<label class="texto__paragrafo">O Numero "Do número" tem que ser menor que o "Até o Número"!</label>`;
    //     return;
    // }
    for (let i = 0; i < quantidadeN; i++) {
        numero = gerarNumeroEleatorio(deN, ateN);
        while (nSorteados.includes(numero)) {
            numero = gerarNumeroEleatorio(deN, ateN);
        }
        nSorteados.push(numero);
        // console.log(nSorteados);
    }
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${nSorteados}</label>`;
    alterarStatusBotao();
};

//Mas se você precisar que a função inclua, tanto o mínimo quanto o máximo, em seus resultados?
function gerarNumeroEleatorio(de, ate) {
    let min = Math.ceil(de);
    let max = Math.floor(ate);
    let nAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log( 'O Numero: '+nAleatorio, 'É do tipo: ' +typeof nAleatorio);
    return nAleatorio;
};

function alterarStatusBotao() {
    let btnReiniciar = document.getElementById('btn-reiniciar');
    if (btnReiniciar.classList.contains('container__botao-desabilitado')) {
        btnReiniciar.classList.remove('container__botao-desabilitado');
        btnReiniciar.classList.add('container__botao');
    } else {
        btnReiniciar.classList.remove('container__botao');
        btnReiniciar.classList.add('container__botao-desabilitado');
    }
};

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
};
