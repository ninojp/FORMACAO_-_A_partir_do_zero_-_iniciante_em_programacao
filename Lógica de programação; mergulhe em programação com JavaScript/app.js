// alert('Bem vindo ao jogo do Numero Secreto!');
let numeroSecreto = 8;
console.log(`Numero Secreto: ${numeroSecreto}`)
let numeroChute = prompt('Diga um numero entre 1 e 10?');

if(numeroChute == numeroSecreto){
    // alert(`Você acertou o Numero Secreto ${numeroSecreto}`);
    console.log('Você acertou o Numero Secreto: ' + numeroSecreto);
}else{
    alert('Você errou o numero :(');
    // console.log('Você errou o numero :(');
};
