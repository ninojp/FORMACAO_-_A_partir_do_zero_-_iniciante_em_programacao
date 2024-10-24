# Curso Alura: Lógica de programação: mergulhe em programação com JavaScript

## Aula 01 - Iniciando com JavaScript

### Aula 01 - Introdução - Vídeo 1

Transcrição
Mônica: Olá, estudante! Boas-vindas ao curso de Lógica de Programação. Sou a Mônica Hillman e serei sua instrutora!

> Audiodescrição: Mônica é uma mulher de pele clara. Tem olhos e cabelos castanhos, mechas loiras e franja. Usa um óculos de grau com armação redonda e piercing no septo. Está com uma camiseta rosa e usa um microfone de mesa. Ao fundo, uma iluminação da cor azul.

Guilherme: Boas-vindas! Que bom te encontrar nesse curso de lógica de programação. Eu sou o Guilherme Lima e também serei seu instrutor.

> Audiodescrição: Guilherme é um homem de pele clara. Tem olhos castanhos, cabelos curtos e barba também castanhos. Usa óculos quadrados de armação preta e está com uma camisa cinza. Ao fundo, uma parede lisa e ao lado direito uma prateleira com livros.

Guilherme: Nesse curso vamos aprender o motivo pelo qual a Lógica de Programação é importante para nossa carreira como pessoas desenvolvedoras de software. Conheceremos conceitos comuns para a maioria das linguagens.

Mônica: Para isso, desenvolveremos um projeto, o jogo do número secreto.

Nele, a pessoa usuária precisará inserir alguns números para adivinhar qual foi o número aleatório gerado pelo computador.

Guilherme: Para desenvolver esse jogo, trabalharemos com variáveis, loops, condicionais, if e else. Conceitos usados no mercado de trabalho.

Além disso, mostraremos como o mercado escreveria este código que também estamos desenvolvendo, seguindo boas práticas de programação.

Vamos começar?

### Aula 01 - Carregando o projeto base - Vídeo 2

Transcrição  
Guilherme: Vamos iniciar nossos estudos!

Fizemos o download do projeto básico Games.js que utilizaremos nesse curso. Por padrão, existem diversas ferramentas que podemos usar para criar o nosso código, editá-lo, compilá-lo e fazer várias outras coisas. Usaremos uma bem conhecida no mercado: o Visual Studio Code.

Na atividade anterior a esse vídeo, você encontra o passo a passo necessário para rodar os códigos do curso. Além disso, também temos conteúdos que comparam outros editores de código e o motivo pelo qual preferimos o VS Code.

Guilherme: Nesse temos alguns arquivos.

- img, vamos usá-lo para editar as imagens do projeto;
- app.js, que ainda não tem nenhuma linha de código;
- index.html, referente a parte visual que vamos explorar em breve;
- style.css, os estilos.

Tudo isso foi criado pelo time da Moni.

Mônica: Isso mesmo, Gui! Como o HTML e o CSS não são linguagens de programação e esse é o foco desse curso, focaremos no app.js.

**Entendendo o Jogo do Número Secreto**  
Guilherme: Na pasta do projeto, clicamos com o botão direito no arquivo index.html e abri-lo no navegador. Feito isso, na tela visualizamos o desenho de um robô e ao lado o texto "Você acertou! Você descobriu o número secreto".

Vamos entender melhor o que faremos nesse curso. Para isso, darei uma folha escrita "número secreto" e uma caneta para que a Môni escolha um número entre 1 e 100 sem me mostrar.

Mônica: Pronto!

Guilherme: Agora, vou fazer alguns chutes. O número secreto é 42?

Mônica: Não, é menor!

Guilherme: É 20?

Mônica: É maior que 20.

Guilherme: Então é 30?

Mônica: Na verdade, é menor.

Guilherme: 25, 28,29?

Mônica: É 29!

Guilherme: Descobrimos o número secreto! Nosso desafio é criar um jogo de adivinhação, exatamente como fizemos.

Para isso, será necessário que o programa escolha um número secreto e a gente interaja com a pessoa que jogará, sempre perguntando qual número ela acha que é. Nisso, a pessoa irá fazer os chutes e daremos dicas se o número é maior ou menor.

**Começando a criação do código**  
Então, no Visual Studio Code vamos começar a escrever o código. Apertamos Ctrl+ B para visualizarmos apenas o app.js.

No navegador, repare que quando o jogo começa não é exibido nada. Queremos exibir uma mensagem na tela. Na programação existem diversos comandos, funções, atalhos e ferramentas que utilizamos para resolver esse desafio.

Usaremos um código em Javascript, vamos entender um pouco sobre os padrões e como ele funciona.

Para passar uma mensagem para a pessoa que iniciou o jogo, usaremos a palavra alert seguido de parênteses.

Lembrando que usamos alert e não alerta, pois o Javascript foi desenvolvido utilizando o idioma inglês.

Ao fazer isso, repare que o cursor fica entre os parênteses. Isso significa que podemos passar uma mensagem nesse espaço. Porém, existe uma regra.

Para passar essa mensagem, adicionamos aspas.

Mônica: No caso do Javascript podemos usar tanto aspas simples como duplas. Sendo assim, a única preocupação é em manter sempre uma padronização em todo o código. Se você começar usando aspas simples, mantenha em todo o projeto.

Guilherme: Em algumas linguagens, quando passamos uma mensagem é preciso utilizar aspas duplas, já outras permitem as aspas simples. No Javascript usaremos aspas simples.

Em seguida, passaremos uma mensagem simples.

Mônica: Podemos colocar a mensagem mais tradicional para as pessoas que estão iniciando em programação, "Olá Mundo".

Guilherme: Ótimo! Feito isso, no fim da linha adicionamos ;.

No Javascript, o ponto e vírgula é inserido em um momento específico de interpretação. Esse não é nosso foco agora. No mundo real do desenvolvimento, existem ferramentas que inserem o ponto e vírgula quando nós não o fazemos.

Como não usaremos nada disso, usaremos o ; durante todo o curso. Então, Moni, se eu esquecer, por favor, me lembre.

> alert('Olá mundo');

Mônica: A falta do ponto e vírgula não daria erro no código, mas cada linguagem tem sua particularidade e no Javascript, para identificar que o comando terminou é recomendado utilizar o ponto e vírgula.

> Guilherme: Agora, salvamos o projeto apertando o comando Ctrl + S.

Em seguida, acessamos o aplicativo no navegador e atualizamos apertando "F5". Feito isso, aparece uma mensagem escrita "Olá, Mundo". Clicamos no botão "Ok" e a tela exibe a imagem do robô.

Ficou melhor! Mas, trocaremos a mensagem para "Boas-vindas ao jogo do Número Secreto". Novamente apertamos Ctrl + S para salvar.

> alert('Boas-vindas ao jogo do Número Secreto');

Lembre-se sempre de salvar todas as alterações de código!

Atualizamos a página e visualizamos a nova mensagem. Clicamos em "Ok" e a tela é exibida.

### Aula 01 - Exibindo mensagens na tela - Vídeo 3

Transcrição  
Guilherme: Môni, o número que você havia escrito era mesmo 29?

Mônica: Sim!

Guilherme: Que bacana! Te pedi para memorizar esse número, pois precisaremos desse mesmo conceito na programação. Não queremos que o computador mude o número ou esqueça dele, certo?

Mônica: O jogo deve ser justo.

Guilherme: Exatamente! Então, para conseguirmos armazenar informações no programa, utilizamos um conceito chamado variáveis.

**Criando variáveis**  
Guilherme: Em cada linguagem de programação, há uma forma diferente de criar uma variável. No Javascript, para criarmos variáveis e armazenar valores nelas, usamos a palavra-chave let.

Escrevemos isso no app.js, na linha abaixo de alert(). Isso significa que reservaremos um espaço na memória para guardar uma informação.

O conteúdo que queremos armazenar é o número secreto. Para isso, existe um padrão para declarar as variáveis, então, após let, escrevemos numeroSecreto. Sem acento e com a primeira letra da segunda palavra em maiúsculo.

Mônica: Também precisamos considerar o sentido prático do nome da variável e de outros conceitos que aprenderemos no decorrer do curso. Poderíamos colocar simplesmente número, mas seria mais útil usar NúmeroSecreto, sugerindo que esse é o número que queremos acertar no jogo.

Guilherme: Ótimo ponto! Quando pensamos no desenvolvimento de software de um programa, os nomes que atribuímos, especialmente para as variáveis e para outros conceitos, precisam ser claros.

As outras pessoas que forem trabalhar com esse projeto precisam saber o que está acontecendo no código.

Mônica: Até porque teremos muitos números no código, como os usados na tentativa de acerto, o número secreto e, se você quiser tornar o jogo mais complexo, outras variáveis que também serão números.

Guilherme: Vou utilizar o seu exemplo e definir o número secreto como 29. Para isso, na mesma linha de código, adicionamos espaço, o sinal de igual e o número 29.

```JavaScript
alert('Boas-vindas ao jogo do número secreto');  
let numeroSecreto = 29;
```

Dessa forma, temos o número secreto armazenado. O próximo desafio será perguntar para a pessoa qual é o valor do número secreto.

Se voltarmos no navegador, repare que o alert é responsável por exibir uma mensagem na tela. Não existe um campo para escrevermos o número secreto.

Após clicar em "Ok" a tela do fim do jogo aparece. Para usarmos um comando que possamos fazer uma pergunta, ou pedir para a pessoa chutar um número, usaremos o comando prompt.

Adicionamos parênteses, aspas simples e escrevemos a mensagem Escolha um número entre 1 e 30.

```JavaScript
alert('Boas-vindas ao jogo do número secreto');  
let numeroSecreto = 29;  
prompt('Escolha um número entre 1 e 30');
```

Note que, sempre que estamos lidando com mensagens ou textos, usamos aspas simples.

Mônica: Inclusive, quando definimos uma variável para receber um número, não utilizamos aspas, inserimos o número diretamente. Dessa forma, o JavaScript interpreta esse 29 como um número e não como texto.

Guilherme: Salvamos o código e voltamos no navegador. Ao atualizar a página, aparece a mensagem se boas-vindas. Ao clicar em"Ok" aparece outra mensagem escrita "Escolha um número entre 1 e 30" com um campo de texto abaixo.

Digitamos 29 e clicamos em "Ok". Feito isso, somos direcionados para a página final.

Mas, será que o nosso jogo está realmente funcionando conforme o esperado? Para isso, mudaremos o número secreto para 5 e definir um intervalo de 1 a 10 e salvamos. Depois, vamos errar propositalmente para verificar o que acontece.

```JavaScript
alert('Boas-vindas ao jogo do número secreto');  
let numeroSecreto = 5;  
prompt('Escolha um número entre 1 e 10');
```

É sempre muito importante testar os erros. Em fase de teste, sempre simulamos alguns caminhos.

Feito isso, voltamos no navegador e atualizamos a página. Clicamos no "Ok" de boas-vindas e chutamos o número 4. Ao clicar em "Ok" encontramos um bug no nosso jogo. A mensagem exibida ainda é "Parabéns, você descobriu o número secreto".

Vamos corrigir esse problema no próximo vídeo!

### Aula 01 - Comparando variáveis - Vídeo 4

Transcrição  
Guilherme: Moni, será mesmo que estamos comparando os valores inseridos no prompt com o número secreto?

Mônica: Acho que não, pois quando testamos inserindo o número 4, ainda assim ganhamos o jogo. E isso não deveria acontecer.

Guilherme: Então, vamos corrigir isso!

Para realizarmos uma comparação, existe um comando em JavaScript que podemos utilizar para verificar se um valor é igual a outro.

Mônica: Neste caso, não seria de fato uma comparação, mas sim uma condição, certo?

Guilherme: Exato! Então, damos espaço no código e no fim escrevemos if, seguido de espaço.

Agora, precisaremos seguir uma regra do JavaScript, que é adicionar parênteses e dentro a condição que queremos verificar.

Então, escrevemos numeroSecreto seguido de =. Porém, repare que há algo diferente. Anteriormente, usamos o sinal de igual para atribuir um valor a uma variável. No entanto, quando queremos fazer uma comparação, usamos um sinal de igual duplo ==.

Mas temos um problema. Como vamos comparar o valor do prompt? Afinal, ele não armazena o valor sozinho, certo?

Mônica: Para guardar esse valor precisamos de uma "caixa", que é o conceito de variáveis que acabamos de aprender.

Guilherme: Então, na Linha 3, antes de prompt, escrevemos let, pois quero que o valor digitado seja armazenado em algum lugar. Também precisamos de um nome para essa variável, que nesse caso será chute. Em seguida, adicionamos o sinal de igual.

```JavaScript
alert('Boas-vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');
```

Agora conseguimos comparar. Então, na linha 5, se o chute for igual ao número inserido, podemos comparar. Então, após o sinal de igual duplo, escrevemos chute.

Assim, se o número digitado for igual ao número secreto, algo acontecerá. Caso for verdade, adicionamos chaves no código.

Repare que ao adicionar uma chave o VS Code autocompleta com a segunda. Esse software possui vários atalhos, especialmente quando estamos escrevendo código em JavaScript.

Dentro das chaves pressionamos "Enter". Tudo o que escrevermos nesse espaço entre as chaves será executado apenas se o número secreto for igual ao chute.

Existe outro comando em JavaScript onde podemos testar e visualizar, como se fosse um ambiente quase secreto para desenvolvedoras e desenvolvedores. Esse ambiente é chamado de console.log().

Então, nas chaves escrevemos console.log('Isso ai! Você descobriu o número secreto (5)').

```JavaScript
alert('Boas-vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
        console.log("Isso aí! você descobriu o número secreto (5)");
}
```

Lembrando que quando usamos o if na linha 5, essa instrução específica não leva ponto e vírgula. Mas, quando criamos o código que será executado, caso a condição seja verdadeira, nós temos essa mensagem.

Salvamos o código e abrimos o navegador para testar. Atualizamos a página e clicamos em "Ok". Depois, chutamos o número 5, acertaremos propositalmente. Feito isso, aparece a mensagem Você acertou!".

Mônica: Gui, mas essa imagem irá aparecer mesmo se errarmos, porque configuramos como condição para exibir uma mensagem no console, mas não na tela.

Guilherme: Nós vamos corrigir isso até o final do jogo! A minha única dúvida nesse momento é onde está essa mensagem que colocamos no console.log.

Para isso, clicando com o botão direito em qualquer parte da tela do navegador e depois em inspecionar. Feito isso, encontramos uma parte do HTML e do CSS correspondente ao nosso código. Isso significa que é possível conseguirmos ver o código HTML e CSS de outras aplicações também.

Repare que na lateral superior direita encontramos um botão chamado "Console". Ao clicá-lo, encontramos o texto "Isso ai! Você descobriu o número secreto (5)".

Agora, testaremos errando propositalmente. Dessa vez, digitamos o número 3. Ao clicar em "Ok" repare que a mensagem não é exibida na janela de inspeção.

Podemos inserir algumas dicas para a pessoa, como, por exemplo, indicar que ela errou o número. Faremos isso a seguir!

#### Aula 01 - Alert e prompt

Uma pessoa está desenvolvendo a tela de boas vindas de uma aplicação feita com JavaScript e criou o seguinte código:.

```JavaScript
let mensagemDeBoasVindas = 'Boas vindas ao App';
alert('mensagemDeBoasVindas');
```

Com base nisso, analise as afirmações abaixo e marque apenas as verdadeiras em relação ao código mostrado acima.

Ao executar o programa, uma caixa será exibida com a mensagem mensagemDeBoasVindas.

Isso aí… Para a mensagem armazenada na variável seja exibida, é necessário remover as aspas simples, deixando o código do alert da seguinte forma: alert(mensagemDeBoasVindas).

O problema nesse código é que a variável mensagemDeBoasVindas não está sendo utilizada corretamente ao ser exibida na função alert.

No código apresentado, a linha alert('mensagemDeBoasVindas') está passando um texto e a variável não está sendo utilizada de forma correta.

#### Aula 01 - Alterando o valor das variáveis

Em um projeto prático dentro do curso "Iniciando com JavaScript", você está desenvolvendo um jogo no qual os usuários têm que adivinhar o número secreto. Você escreveu um código que mostra uma mensagem de boas-vindas aos jogadores, pedindo que escolham um número entre 1 e 10, e apresenta uma resposta se eles acertarem, conforme a sequência a seguir:

```JavaScript
 alert('Boas-vindas ao jogo do número secreto')
 let chute = prompt('Escolha um número entre 1 e 10')
 let numeroSecreto = 4
 if (chute == numeroSecreto) {
    alert('Acertou')
 }
```

Qual variável você precisaria alterar para mudar o número secreto a cada rodada do jogo?

> let numeroSecreto = 4

Esta linha de código está relacionada diretamente à modificação do número secreto.

#### Aula 01 - Onde está o bug?

Luis é apaixonado por tecnologia e está dando seus primeiros passos no mundo da programação. Para praticar lógica de programação, ele decidiu desenvolver um sistema de login de usuário único em que é necessário apenas informar a senha para ver o conteúdo do restante do projeto.

No entanto, ao testar o seu projeto, percebeu que não importava a senha passada para o sistema, o acesso sempre era permitido.

Sabendo que você também está estudando lógica de programação, Luis pediu sua ajuda para que vocês consigam encontrar o bug juntos. Para isso, ele disponibilizou o código que escreveu:

```JavaScript
let senhaDoSistema = "senhaTeste!";
let senha = prompt("Digite a senha do sistema:");
if (senha = senhaDoSistema){
    alert("Acesso ao sistema garantido");
}
```

De acordo com o código disponibilizado, qual é o problema?

O código apresenta um bug dentro da estrutura condicional proposta, pois o operador de comparação não está sendo utilizado.

O operador de comparação é o ==, no entanto, dentro da estrutura condicional está sendo utilizado o de atribuição =.

### Aula 01 - Desafio: hora da prática

Praticar a lógica de programação, incluindo conceitos como variáveis, condicionais (if), alert, prompt, é essencial para seu desenvolvimento. Esses fundamentos fornecem a base para resolver problemas de forma estruturada, tomar decisões no código, criar interações controladas e interagir eficazmente com as pessoas.

Compreender esses conceitos não apenas facilita o aprendizado de novas linguagens e tecnologias, mas também capacita você a criar soluções inovadoras, depurar eficientemente e manter a qualidade ao longo do ciclo de vida do software. Portanto, investir tempo nesses princípios desde cedo é fundamental para construir uma trajetória bem-sucedida no campo da programação.

Pensando nisso, criamos uma lista de atividades (não obrigatórias) focada em prática para melhorar ainda mais sua experiência de aprendizagem. Bora praticar então?

Desafios  

1. Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

2. Declare uma variável chamada nome e atribua a ela o valor "Lua".

3. Crie uma variável chamada idade e atribua a ela o valor 25.

4. Defina uma variável numeroDeVendas e atribua a ela o valor 50.

5. Defina uma variável saldoDisponivel e atribua a ela o valor 1000.

6. Exiba um alerta com o texto "Erro! Preencha todos os campos"

7. Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.

8. Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.

9. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.

10. Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião da pessoa instrutora”.

Opinião do instrutor

Para te ajudar a verificar seus códigos, deixo disponibilizado de forma conjunta com a identificação dos 10 números iniciais quando foram propostos, uma possível resolução dos 10 desafios [neste link](https://github.com/alura-cursos/logica-js/tree/desafio_1) para você construir ou validar suas soluções.

Boa sorte nos estudos!

### Aula 01 - Para saber mais: documentação

A leitura da documentação oficial de uma linguagem de programação é crucial para que uma pessoa desenvolvedora de software possa utilizá-la de forma eficaz.

No caso do JavaScript, essa documentação fornece uma ampla gama de informações, incluindo conceitos sobre sintaxe, as bibliotecas e as funcionalidades disponíveis na linguagem.

Alguns links úteis para a documentação oficial do JavaScript incluem:

- A documentação da [linguagem de programação JavaScript (MDN)](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [Guia de JavaScript:](https://www.alura.com.br/artigos/javascript) o que é e como aprender a linguagem mais popular do mundo?

Ao ler a documentação oficial, temos uma compreensão mais profunda da linguagem e de suas funcionalidades. Isso facilita a escrita de códigos mais limpos, claros e seguros. A documentação também pode ajudar o desenvolvedor ou desenvolvedora a economizar tempo, além de evitar a necessidade de pesquisar em fóruns ou outras fontes de informação não confiáveis.

### Aula 01 - O que aprendemos?

Aqui está um resumo dos tópicos ensinados nesta aula:

- Preparamos o ambiente de desenvolvimento com a instalação do Visual Studio Code para criar programas utilizando a linguagem JavaScript;

- Entendemos o conceito de variável para guardar informações, como números ou palavras, para usar mais tarde no nosso programa;

- Usamos o alert para exibir uma mensagem passando algumas instruções sobre o programa e usamos o prompt para interagir com a pessoa permitindo inserir um valor e armazenando em uma variável;

- Criamos um if, que é uma instrução em programação que permite ao computador tomar decisões ao executar um bloco de código apenas se uma condição específica for verdadeira.

Na próxima aula:  
Vamos seguir as boas práticas de programação e aprofundar ainda mais nossos conhecimentos!

## Aula 02 - Condicionais e Concatenação

### Aula 02 -  - Vídeo 1
