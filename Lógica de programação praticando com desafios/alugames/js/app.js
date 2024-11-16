'use strict'

function alterarStatus(id){
    let liElement = document.getElementById(`game-${id}`);
    let divImgElement = liElement.querySelector('.dashboard__item__img');
    let aBtnElement = liElement.querySelector('.dashboard__item__button');

    if(divImgElement.classList.contains('dashboard__item__img--rented')){
        divImgElement.classList.remove('dashboard__item__img--rented');
        aBtnElement.classList.remove('dashboard__item__button--return');
        aBtnElement.innerHTML = 'Alugar';
        // console.log(liElement, divImgElement, aBtnElement)
    }else{
        divImgElement.classList.add('dashboard__item__img--rented');
        aBtnElement.classList.add('dashboard__item__button--return');
        aBtnElement.innerHTML = 'Devolver';
    };
};
