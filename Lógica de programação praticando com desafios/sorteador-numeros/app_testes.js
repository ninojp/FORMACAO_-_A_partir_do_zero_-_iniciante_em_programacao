'use strict'

// let quantidadeValue = parseInt(document.getElementById('quantidade').value);
// console.log(quantidadeValue, typeof quantidadeValue);

// let quantidadeElement = document.getElementById('quantidade');
// console.log(quantidadeElement, typeof quantidadeElement);

// let quantidadeInner = document.getElementById('quantidade').innerHTML;
// console.log(quantidadeInner, typeof quantidadeInner);
// let deN = document.getElementById('de').value;
// let ateN = document.getElementById('ate').value;

function sortear() {
    let quantidadeValue = parseInt(document.getElementById('quantidade').value);
    let deN = parseInt(document.getElementById('de').value);
    let ateN = parseInt(document.getElementById('ate').value);
    console.log(quantidadeValue, deN, ateN, typeof quantidadeValue);
    let listNGerados = [];
    let numeroGerado;
    let divResultados = document.getElementById('resultado');
    // console.log(divResultados);

    if (quantidadeValue > 0 && deN > 0 && ateN > 0 && quantidadeValue < ateN && deN < ateN && (ateN - deN +1) > quantidadeValue) {
        console.log('Pode executar! O numero Digitado é: ' + quantidadeValue, deN, ateN);
        for (let i = 0; i < quantidadeValue; i++) {
            numeroGerado = gerarNumeroEleatorio(deN, ateN);
            while (listNGerados.includes(numeroGerado)) {
                numeroGerado = gerarNumeroEleatorio(deN, ateN);
                // alert('Tentando obter número inédito');
            };
            listNGerados.push(numeroGerado);
        }
        divResultados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listNGerados}</label>`;
        console.log(listNGerados);
        alteraStatusBtn();
        
    } else if (quantidadeValue <= 0 || deN <= 0 || ateN <= 0) {
        console.log('ELSE IF 1! Digite um Número maior que Zero, positivo: ' + quantidadeValue, deN, ateN);
        divResultados.innerHTML = `<label class="texto__paragrafo">Digite um Número maior que Zero, para os campos: ${quantidadeValue}, ${deN}, ${ateN}</label>`;
        alteraStatusBtn();
        return;
    } else if((quantidadeValue > ateN) || (deN > ateN) || ((ateN - deN +1) < quantidadeValue)){
        console.log('ELSE IF 2! Os Numeros, Devem ser menores que: ' + quantidadeValue, deN, ateN);
        divResultados.innerHTML = `<label class="texto__paragrafo">Os Campos, "Quantidade de números": ${quantidadeValue} e "Do número": ${deN}, devem ser menores que: ${ateN}</label>`;
        alteraStatusBtn();
        return;
    } else {
        console.log('Preencha todos os Campos: ' + quantidadeValue, deN, ateN);
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
    }
}

// switch (quantidadeValue) {
//     case 0:
//         console.log('Caso 1! O numero é igual a: ' + quantidadeValue, typeof quantidadeValue);
//         break;
//     case 1:
//         console.log('Caso 2! O numero é igual a: ' + quantidadeValue, typeof quantidadeValue);
//         break;
//     default:
//         console.log('Caso Default! O numero Digitado é: ' + quantidadeValue, typeof quantidadeValue);
//         break;
// }
