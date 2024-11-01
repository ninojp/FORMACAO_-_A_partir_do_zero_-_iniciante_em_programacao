//função que exibe "Olá, mundo!" no console
exibeMSG = () => {
    console.log('Ola Mundo!');
};

//função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console
exibeNome = () => {
    let nome = prompt('Digite seu nome');
    alert(`Ola, ${nome}, Bem vindo ao Mundo JavaScript!`);
};

//função que recebe um número como parâmetro e retorna o dobro desse número
recebeNumero = () => {
    let numeroInteiro = parseInt(prompt('Insira um numero Inteiro'));
    dobroNumero(numeroInteiro);
}
dobroNumero = (numeroInteiro) => {
    let dobroNumeroInteiro = numeroInteiro *2;
    return alert(`O dobro do numero digitado é: ${dobroNumeroInteiro}`);
};

//Criar uma função que recebe três números como parâmetros e retorna a média deles
recebe3Numeros = () => {
    numero1 = parseInt(prompt('Insira o Primeiro Numero'));
    numero2 = parseInt(prompt('Insira o Segundo Numero'));
    numero3 = parseInt(prompt('Insira o Terceiro Numero'));
    mediaNumeros(numero1, numero2, numero3);
};
mediaNumeros = (n1, n2, n3) => {
    numerosMedia = (n1 + n2 + n3) /3;
    return alert(`A Média dos 3 Numeros é: ${numerosMedia}`);
};

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles
insira2Numeros = () => {
    ni1 = parseInt(prompt('Insira o Primeiro Numero'));
    ni2 = parseInt(prompt('Insira o Segundo Numero'));
    maiorNumero(ni1, ni2);
};
maiorNumero = (n1, n2) => {
    // if (n1 > n2){
    //     alert(`Primeiro: ${n1}, Segundo: ${n2}. O Maior Numero é: ${n1}`);
    // } else {
    //     alert(`Primeiro: ${n1}, Segundo: ${n2}. O Maior Numero é: ${n2}`);
    // };
    return alert(n1 > n2 ? `Primeiro: ${n1}, Segundo: ${n2}. O Maior Numero é: ${n1}` : `Primeiro: ${n1}, Segundo: ${n2}. O Maior Numero é: ${n2}`);
};

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
insira1Numero = () => {
    n1 = parseInt(prompt('Insira o Primeiro Numero'));
    multiplicaNumero(n1);
};
multiplicaNumero = (n) => {
    Mnxn = n *n;
    return alert(Mnxn);
};
