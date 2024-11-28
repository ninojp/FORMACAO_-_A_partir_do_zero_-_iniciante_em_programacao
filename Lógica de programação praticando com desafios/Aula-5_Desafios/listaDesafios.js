'use strict';

// Exercício
// for (let numero = 1; numero <= 100; numero++) {
//     // if (numero / 5) {
//     if (numero % 5 == 0) {
//         console.log(numero);
//     }
// }

/* Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 
separadamente em outra variável. Use o método concat() para combinar as sequências de valores
em uma nova lista chamada novaLista. Imprima novaLista no console. */
let minhaLista = [1, 2, 2, 3];
let minhaLista2 = [4, 5, 5, 6];
let novaLista = minhaLista.concat(minhaLista2);
console.log('Exercício 2: ' +novaLista);

/* Remova o último elemento de novaLista. Imprima novaLista após a remoção. */
novaLista.pop();
console.log('Exercício 3: ' +novaLista);

/*Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar
os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento. */
const embaralhar = (novaLista) => {
    for (let indice = novaLista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // atribuição via destructuring
        [novaLista[indice - 1], novaLista[indiceAleatorio]] =
            [novaLista[indiceAleatorio], novaLista[indice - 1]];
    };
};
embaralhar(novaLista);
console.log('Exercício 4: ' +novaLista);

/* Crie uma função chamada removerDuplicatas que aceita um array como parâmetro
e retorna um novo array sem elementos duplicados. Teste a função com novaLista 
e imprima o array resultante. */

// Função para remover duplicatas de um array
function removerDuplicatas(array) {
    return [...new Set(array)];
  }
  // Testando a função com novaLista
  let novaListaSemDuplicatas = removerDuplicatas(novaLista);
  console.log("Remover duplicatas:", novaListaSemDuplicatas);
