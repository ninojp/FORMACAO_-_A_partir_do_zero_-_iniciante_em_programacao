'use strict';

//Ao declarar a variável aqui, ela recebe o APENAS o valor(value) de quando a página é carregada 
// const tipoIngresso = document.getElementById('tipo-ingresso').value;
// const qtd = document.getElementById('qtd').value;

const form = document.getElementById('formComprar');
const sectionMsgAlert = document.getElementById('msgAlert');

function comprar() {
    const tipoIngresso = document.getElementById('tipo-ingresso').value;
    const qtd = parseInt(document.getElementById('qtd').value);
    if(qtd > 0){
        switch (tipoIngresso) {
            case 'pista':
                comprarPista(qtd);
                break;
            case 'inferior':
                comprarInferior(qtd);
                break;
            case 'superior':
                comprarSuperior(qtd);
                break;
            default:
                alert('selecione um tipo de ingrasso!');
                break;
        }
    }else{
        alert('A Quantidade inserida deve ser um numero válido!');
        return;
    }
    // if (tipoIngresso == 'pista') {
    //     comprarPista(qtd);
    // }
    // if (tipoIngresso == 'inferior') {
    //     comprarInferior(qtd);
    // }
    // if (tipoIngresso == 'superior') {
    //     comprarSuperior(qtd);
    // }
};

function comprarPista(qtd) {
    const qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtdPista >= qtd) {
        document.getElementById('qtd-pista').textContent = qtdPista - qtd;
        sectionMsgAlert.innerHTML = `Parabens! Seus ${qtd} Ingressos, para Pista, foram adguiridos.`
        form.reset();
    } else {
        alert('Quantidade indisponivel para Pista');
    }
}
function comprarInferior(qtd) {
    const qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtdInferior >= qtd) {
        document.getElementById('qtd-inferior').textContent = qtdInferior - qtd;
        sectionMsgAlert.innerHTML = `Parabens! Seus ${qtd} Ingressos, para Inferior, foram adguiridos.`
        form.reset();
    } else {
        alert('Quantidade indisponivel para Inferior');
    }
}
function comprarSuperior(qtd) {
    const qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtdSuperior >= qtd) {
        document.getElementById('qtd-superior').textContent = qtdSuperior - qtd;
        sectionMsgAlert.innerHTML = `Parabens! Seus ${qtd} Ingressos, para Superior, foram adguiridos.`
        form.reset();
    } else {
        alert('Quantidade indisponivel para Superior');
    }
}
