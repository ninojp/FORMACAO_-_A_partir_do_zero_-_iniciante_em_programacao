'use strict';

const listaAmigosInseridos = [];

function adicionar() {
    const amigoInserido = document.getElementById('nome-amigo');
    listaAmigosInseridos.push(amigoInserido.value);
    let exibAmigosInseridos = document.getElementById('lista-amigos');
    exibAmigosInseridos.textContent = listaAmigosInseridos;
    document.getElementById('nome-amigo').value = '';
    // console.log(listaAmigosInseridos, typeof listaAmigosInseridos);
};

function sortear() {
    embaralharArray(listaAmigosInseridos);
    // for(let i = 0; i < listaAmigosInseridos.length; i++){
    //     console.log(amigoAtual[i]);
    // };

    listaAmigosInseridos.forEach((amigoAtual, i) => {
        if(i == listaAmigosInseridos.length -1){
            document.getElementById('lista-sorteio').innerHTML += `${listaAmigosInseridos[i]} => ${listaAmigosInseridos[0]}<br>`;
        }else{
            document.getElementById('lista-sorteio').innerHTML += `${listaAmigosInseridos[i]} => ${listaAmigosInseridos[i + 1]}<br>`;
        }
        // console.log(listaAmigosInseridos[i]);
    });
    
};

function embaralharArray(listaAmigosInseridos) {
    for (let indice = listaAmigosInseridos.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // atribuição via destructuring
        [listaAmigosInseridos[indice - 1], listaAmigosInseridos[indiceAleatorio]] =
            [listaAmigosInseridos[indiceAleatorio], listaAmigosInseridos[indice - 1]];
    };
}

function reiniciar() {

};
