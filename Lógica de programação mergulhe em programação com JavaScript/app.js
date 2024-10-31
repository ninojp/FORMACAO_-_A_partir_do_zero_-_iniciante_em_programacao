let numeroMaximo = prompt('Bem vindo ao jogo do Numero Secreto!\n Digite UM Valor MÁXIMO para o Game!');
let numeroSecreto = parseInt(Math.random() *numeroMaximo +1);
console.log(`Numero Secreto: ${numeroSecreto}`);

let numeroChute;
let tentativas = 1;

//Enqunto o chute não for igual ao numero secreto
while(numeroChute != numeroSecreto){
    numeroChute = prompt(`Diga um numero entre 1 e ${numeroMaximo}?`);

    if(numeroChute == numeroSecreto){
        break;
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
let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
alert(`Você acertou o Numero Secreto: ${numeroSecreto}, com ${tentativas} ${palavraTentativa}`);
// if (tentativas > 1) {
//     alert(`Você acertou o Numero Secreto: ${numeroSecreto} com ${tentativas} Tentativas`);
// } else {
//     alert(`Você acertou o Numero Secreto: ${numeroSecreto} com ${tentativas} Tentativa`);
// };

