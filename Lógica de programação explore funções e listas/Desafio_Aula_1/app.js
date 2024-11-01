let selectH1 = document.querySelector('h1');
selectH1.innerText = 'Hora do Desafio';

//Eu usei a notação de ARROW FUNCTION, mas poderia ser do modo declarativo: function nomeFuncao(){};
consoleBTN = () => {
    console.log('Console.log(): O botão foi clicado');
};

alertBTN = () => {
    alert('Alert(): Eu amo JS');
};

prompBTN = ()=>{
    let cidade = prompt('Digite nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
};

somaBTN=()=>{
    let numero1 = parseInt(prompt('Trabalhando com Soma. Digite o primeiro numero: '));
    let numero2 = parseInt(prompt('Digite o Segundo numero: '));
    let soma = numero1 + numero2;
    alert(`A Soma de ${numero1} + ${numero2} = ${soma}`);
};
