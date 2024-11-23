'use strict';

let btnFormSubmit = document.getElementById('btnFormSubmit');
btnFormSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    let primeiroNome = document.getElementById('primeiroNome').value;
    let segundoNome = document.getElementById('segundoNome').value;
    if(!primeiroNome || primeiroNome.trim() === '' || primeiroNome.textContent === ''){
        alert('O Campo "Primeiro nome" precisa ser preenchido!');
        return;
    }else if (!segundoNome || segundoNome.trim() === '' || segundoNome.textContent === '') {
        alert('O Campo "Segundo nome" precisa ser preenchido!');
        return; 
    }else{
        document.getElementById('pNomeCompleto').textContent = `Nome Completo: ${primeiroNome} ${segundoNome}`;
    };

    let inputIdade = parseInt(document.getElementById('inputIdade').value);
        console.log(inputIdade, typeof inputIdade);
    if (isNaN(inputIdade) || inputIdade <= 0) {
        alert('O Campo "Sua Idade" precisa ser preenchido!');
        return;
    }else{
        document.getElementById('pIdade').innerText = `Sua Idade atual é: ${inputIdade}`;
    };

    let seuEmail = document.getElementById('seuEmail').value;
    if(!seuEmail || seuEmail.trim() === ''){
        alert('O Campo "Seu E-Mail" precisa ser preenchido Corretamente!');
        return;
    }else{
        document.getElementById('pEmail').textContent = `E-Mail: ${seuEmail}`;
    };

    let dataNascimento = document.getElementById('dataNascimento').value;
    document.getElementById('pDataNasci').textContent = `Data de Nascimento: ${dataNascimento}`;

    let fotoPerfil = document.getElementById('fotoPerfil').value;
    document.getElementById('pImagemPerfil').textContent = `Imagem de Perfil: ${fotoPerfil}`;
    // console.log(pNomeCompleto, typeof pNomeCompleto);

    const dialogExibiFicha = document.getElementById("dialogExibiFicha");
    dialogExibiFicha.showModal();
});

// O botão cancelButtom fecha uma Dialog
var cancelButton = document.getElementById("cancel");
cancelButton.addEventListener("click", function () {
    dialogExibiFicha.close();
});


//===============================================================================================
//Exercícios 5 e 6 trabalhando com, String.split();
// const fraseComposta = 'Frase composta por: primeira palavra, segunda palavra, terceira, quarta';
// let fraseDepois = fraseComposta.split();
// console.log('.split(): '+fraseDepois, typeof fraseDepois);
// let fraseDepois1 = fraseComposta.split('');
// console.log('.split(""): '+fraseDepois1, typeof fraseDepois1);
// let fraseDepois2 = fraseComposta.split(' ');
// console.log('.split(" "): '+fraseDepois2, typeof fraseDepois2);
// let fraseDepois3 = fraseComposta.split(':');
// console.log('.split(":"): '+fraseDepois3[0], typeof fraseDepois3);

//Desafio 5: Separar duas sentenças com ponto e vírgula
const duasSentencas = "Criar o que não existe ainda deve ser a pretensão de todo sujeito que está vivo; A tarefa mais importante de uma pessoa que vem ao mundo é criar algo"
const frasesSeparadas = duasSentencas.split(';');
console.log(frasesSeparadas);
console.log(frasesSeparadas[0]);
console.log(frasesSeparadas[1]);

//Desafio 6: Separar número com split()
const numerosSeparados = "10,20,30,40,50";
const arrayNumeros = numerosSeparados.split(',');
console.log(arrayNumeros);
