let userNome = prompt('Digite seu Nome');
let userIdade = prompt('Digite sua Idade');

let habilitado = 18;

if(userIdade >= habilitado){
    
    alert(`${userNome}, Você está apto a Dirigir.`);
}else{
    alert(`${userNome}, Você não possui idade para dirigir!`)
}
