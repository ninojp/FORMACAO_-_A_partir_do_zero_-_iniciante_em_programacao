'use strict'

let gamesAlugados = 0;
let contagemTotalAlugueis = [];

function alterarStatus(id){
    let liTag = document.getElementById(`game-${id}`);
    // console.log(liTag);
    let divImgTag = liTag.querySelector('.dashboard__item__img');
    // console.log(divImgTag);
    let aBtnDisabled = liTag.querySelector('.dashboard__item__button');
    // console.log(aBtnDisabled);
    let nomeGame = liTag.querySelector('.dashboard__item__name');

    let divDashboard = document.getElementById('divDashboard');

    if(divImgTag.classList.contains('dashboard__item__img--rented')){
        if(confirm(`Você está devolvendo o Game: ${nomeGame.textContent}`)){
            divImgTag.classList.remove('dashboard__item__img--rented');
            aBtnDisabled.classList.remove('dashboard__item__button--return')
            aBtnDisabled.innerHTML = 'Alugar';
            gamesAlugados--;
            // console.log(gamesAlugados, +' Contagem -- '+ typeof gamesAlugados);
        }
    }else{
        divImgTag.classList.add('dashboard__item__img--rented');
        aBtnDisabled.classList.add('dashboard__item__button--return')
        aBtnDisabled.innerHTML = 'Devolver';
        gamesAlugados++;
        contagemTotalAlugueis.push(id);

        divDashboard.innerHTML = `<p>Total de games Alugados ${contagemTotalAlugueis.length}</p>`;
        divDashboard.innerHTML += `<p>Array dos games Alugados [${contagemTotalAlugueis}]</p>`;
        // console.log(gamesAlugados, +' Contagem ++ '+ typeof gamesAlugados);
        console.log(divDashboard);
    }

    exibirContagemAlugueis();
};
// Inicializa a contagem considerando os jogos que já estão alugados
document.addEventListener('DOMContentLoaded', function() {
    gamesAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    exibirContagemAlugueis();
});
function exibirContagemAlugueis(){
    console.log(gamesAlugados);
    console.log(contagemTotalAlugueis);
}
