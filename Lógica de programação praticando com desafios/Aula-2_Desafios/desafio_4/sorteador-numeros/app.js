'use strict'

function sortear() {
    let quantidadeValue = parseInt(document.getElementById('quantidade').value);
    let deN = parseInt(document.getElementById('de').value);
    let ateN = parseInt(document.getElementById('ate').value);
    let listNGerados = [];
    let numeroGerado;
    let divResultados = document.getElementById('resultado');

    if (quantidadeValue > 0 && deN > 0 && ateN > 0 && quantidadeValue < ateN && deN < ateN && (ateN - deN +1) > quantidadeValue) {
        for (let i = 0; i < quantidadeValue; i++) {
            numeroGerado = gerarNumeroEleatorio(deN, ateN);
            while (listNGerados.includes(numeroGerado)) {
                numeroGerado = gerarNumeroEleatorio(deN, ateN);
            };
            listNGerados.push(numeroGerado);
        }
        divResultados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listNGerados}</label>`;
        divResultados.innerHTML += `<label class="texto__paragrafo">Números sorteados Ordenados: ${listNGerados.sort((a,b)=>a-b)}</label>`;
        alteraStatusBtn();
        
    } else if (quantidadeValue <= 0 || deN <= 0 || ateN <= 0) {
        divResultados.innerHTML = `<label class="texto__paragrafo">Digite um Número maior que Zero, para os campos: ${quantidadeValue}, ${deN}, ${ateN}</label>`;
        alteraStatusBtn();
        return;
    } else if((quantidadeValue > ateN) || (deN > ateN) || ((ateN - deN +1) < quantidadeValue)){
        divResultados.innerHTML = `<label class="texto__paragrafo">Os Campos, "Quantidade de números": ${quantidadeValue} e "Do número": ${deN}, devem ser menores que: ${ateN}</label>`;
        alteraStatusBtn();
        return;
    } else {
        divResultados.innerHTML = `<label class="texto__paragrafo">Preencha todos os Campos corretamente, para proseguir!</label>`;
        alteraStatusBtn();
        return;
    };
};

const gerarNumeroEleatorio = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let nAleatorio = Math.floor(Math.random() * (maxFloored - minCeiled + 1)  + minCeiled);
    return nAleatorio;
};

const reiniciar = () => {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alteraStatusBtn();
};

const alteraStatusBtn = () => {
    let btnReiniciar = document.getElementById('btn-reiniciar');
    if (btnReiniciar.classList.contains('container__botao-desabilitado')) {
        btnReiniciar.classList.remove('container__botao-desabilitado');
        btnReiniciar.classList.add('container__botao');
    } else {
        btnReiniciar.classList.remove('container__botao');
        btnReiniciar.classList.add('container__botao-desabilitado');
    };
};
