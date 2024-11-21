'use strict'
// let pMsg = document.getElementById('pMsg');
// console.log(pMsg);
// let btnCalcular = document.querySelector('#btnCalcular');
// console.log(btnCalcular);
document.getElementById('btnCalcular').addEventListener('click', () => {
    let notaAtual = probalidadeAdocaoPet();
    document.getElementById('pMsg').innerHTML = `Probabilidade de adoção é: ${notaAtual}0%`;
});

function probalidadeAdocaoPet() {
    let peso = document.getElementById('pesoPet').value;
    let idade = document.getElementById('idadePet').value;
    let nota = 10;
    // console.log(peso, typeof peso, idade, typeof idade)

    if (peso > 20) {
        nota = nota - 4;
    } else if (peso > 10) {
        nota = nota - 2;
    }

    if (idade >= 14) {
        nota = nota - 4;
    } else if (idade >= 8) {
        nota = nota - 2;
    }

    // document.getElementById('pMsg').innerHTML = `Probabilidade de adoção é: ${nota}0%`;
    console.log(nota)
    return nota;
}
