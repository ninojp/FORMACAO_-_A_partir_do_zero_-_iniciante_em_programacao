'use strict';

let listaAmigosInseridos = [];

function adicionar() {
    const amigoInserido = document.getElementById('nome-amigo');
    if (amigoInserido.value == '') {
        alert('O Campo "Nome Amigo" precisa ser preenchido');
        return;
    } else {
        if (listaAmigosInseridos.includes(amigoInserido.value)) {
            alert('Essa pessoa já está na lista');
            return;
            //Eu fiz assim
            // listaAmigosInseridos.forEach((inserido) => {
            //     if (inserido == amigoInserido.value) {
            //         alert('Essa pessoa já está na lista');
            //         return;
            //     }
            // });
        } else {
            listaAmigosInseridos.push(amigoInserido.value);
            let exibAmigosInseridos = document.getElementById('lista-amigos');
            exibAmigosInseridos.textContent = listaAmigosInseridos;
            document.getElementById('nome-amigo').value = '';
            // console.log(listaAmigosInseridos, typeof listaAmigosInseridos);
            atualizarLista();
            atualizarSorteio();
        }
    }
};

function sortear() {
    if (listaAmigosInseridos.length < 4) {
        alert('Para sortear é necessário no mínimo 4 Pessoas!')
    } else {
        embaralharArray(listaAmigosInseridos);
        listaAmigosInseridos.forEach((amigoAtual, i) => {
            if (i == listaAmigosInseridos.length - 1) {
                document.getElementById('lista-sorteio').innerHTML += `${listaAmigosInseridos[i]} => ${listaAmigosInseridos[0]}<br>`;
            } else {
                document.getElementById('lista-sorteio').innerHTML += `${listaAmigosInseridos[i]} => ${listaAmigosInseridos[i + 1]}<br>`;
            };
        });
    };
};

function excluirAmigo(index) {
    listaAmigosInseridos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
};

function embaralharArray(listaAmigosInseridos) {
    for (let indice = listaAmigosInseridos.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // atribuição via destructuring
        [listaAmigosInseridos[indice - 1], listaAmigosInseridos[indiceAleatorio]] =
            [listaAmigosInseridos[indiceAleatorio], listaAmigosInseridos[indice - 1]];
    };
};

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
};

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
    for (let i = 0; i < listaAmigosInseridos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = listaAmigosInseridos[i];
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function () {
            excluirAmigo(i);
        });
        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    };
};

function reiniciar() {
    listaAmigosInseridos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
};
