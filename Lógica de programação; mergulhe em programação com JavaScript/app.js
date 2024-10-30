// alert('Bem vindo ao jogo do Numero Secreto!');
let numeroSecreto = 5;
console.log(`Numero Secreto: ${numeroSecreto}`);

let numeroChute;
let tentativas = 1;

//Enqunto o chute não for igual ao numero secreto
while(numeroChute != numeroSecreto){
    numeroChute = prompt('Diga um numero entre 1 e 10?');

    if(numeroChute == numeroSecreto){
        alert(`Você acertou o Numero Secreto ${numeroSecreto} com ${tentativas} Tentativas`);
        // console.log('Você acertou o Numero Secreto: ' + numeroSecreto);
    }else{
        // alert('Você errou o numero :(');
        // console.log('Você errou o numero :(');
        if(numeroChute < numeroSecreto){
            alert(`Você errou! O Numero secreto é MAIOR que o digitado: ${numeroChute}`);
        }else{
            alert(`Você errou! O Numero secreto é MENOR que o digitado: ${numeroChute}`);
        }
        // tentativas = tentativas +1;
        tentativas++;
    };
};

//Exercicio..
// let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
// let soma = 0;
// let contador = qtdNumeros;
// while(contador > 0){
//     let numero = parseInt(prompt('Digite o numero:'));
//     // soma += numero;
//     // contador++
//     // qtdNumeros++
//     contador--
// }
// let media = soma / qtdNumeros;
// console.log(media);
