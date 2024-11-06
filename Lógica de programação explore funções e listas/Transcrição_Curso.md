# Curso Alura: Lógica de programação explore funções e listas

## Aula 1 - Interagindo com o HTML

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Mônica: Olá, estudante! Eu sou a Mônica Hillman e te dou boas-vindas a mais um curso de Lógica de Programação!

Audiodescrição: Mônica se autodescreve como uma mulher branca, de cabelos castanhos com algumas mechas loiras. Usa óculos de grau com armação prateada e piercing no septo. Está com uma camiseta azul-marinho com o desenho de um coelho. À sua frente, um microfone e um notebook sob a mesa. Na outra ponta da mesa, também à sua frente, outra pessoa instrutora. Ao fundo, uma parede na cor azul com linhas brancas.

Guilherme: Olá! Meu nome é Guilherme Lima e sou instrutor e desenvolvedor na Alura!

Audiodescrição: Guilherme é um homem branco, de cabelos e barba castanho-escuros. Usa óculos de grau na cor preta e está com uma camiseta também preta escrito "The Beatles" em letras brancas. À sua frente, uma mesa com microfone e notebook. Na outra ponta, também à sua frente, a instrutora Mônica Hillman.

No primeiro curso de Lógica de Programação, utilizamos bastante alert prompt. Mas, quando acessamos um e-commerce ou site, não é comum que eles fiquem surgindo na tela, não é mesmo?

Pensando nisso, o objetivo principal deste curso é aprender como podemos usar o JavaScript para interagir com a tela, assim como as ferramentas que usamos no dia a dia. Além disso, vamos reforçar os conhecimentos de lógica de programação e colocar nosso projeto no ar para mostrar a outras pessoas.

Mônica: Vamos manter o projeto do número secreto, incluindo novas funcionalidades e tornando-o visualmente mais atraente.

Se você se interessou em aprender tudo isso, nos vemos no próximo vídeo!

### Aula 1 - Manipulando textos - Vídeo 2

Transcrição  
Guilherme: Vamos começar nossos estudos?

Inicialmente, fizemos o download do projeto que usaremos como base durante esse treinamento. Vamos abrir o Visual Studio para analisá-lo!

Neste projeto, temos três arquivos: index.html, style.css e app.js - esse último é onde faremos o desenvolvimento.

Mônica: Apesar de ser parecido com o que estávamos fazendo no curso anterior, veremos algumas diferenças.

Guilherme: Exatamente! Vamos clicar com o botão direito do mouse sobre index.html e selecionar a opção "Open with Live Server" para abri-lo com o Live Server.

Ao abrir, note que temos um projeto visualmente diferente. À esquerda, temos uma caixa de texto, provavelmente para inserir o número secreto.

Abaixo desta caixa, temos dois botões: um na cor azul escrito "Chutar" e um na cor cinza escrito "Novo jogo". À direita da tela, um personagem de cabelo roxo olhando para a caixa de texto.

Essa caixa de texto significa que não vamos mais usar alert prompt, pois queremos que as coisas sejam manipuladas no HTML.

Mônica: Essa característica confere uma aparência mais próxima à de um site real, concorda? Normalmente, não interagimos com caixas dentro do navegador, mas sim com campos de texto integrados à aplicação.

Guilherme: Isso mesmo! Imagine uma situação em que você está fazendo uma compra em um e-commerce e são exibidos 10 prompts de alerta. Isso certamente seria incomum. Portanto, vamos direcionar nosso projeto para uma abordagem mais próxima da experiência real.

O que precisamos fazer é pegar o JavaScript e manipular o HTML. Caso contrário, não vai funcionar.

Mônica: Caso você não saiba, HTML é o que usamos para construir cada elemento da tela. Portanto, queremos conseguir manipulá-los de forma dinâmica, mas não diretamente no HTML, e sim com o auxílio do JavaScript. Isso facilita a inserção caso o texto sofra constantes alterações, assim a pessoa desenvolvedora não precisará acessar o arquivo HTML para procurar a tag ou elemento específico.

Guilherme: O grande benefício de manipular com o JavaScript, principalmente a parte visual, é que vamos garantir uma dinamicidade melhor para o nosso projeto.

Mônica: Sim! Eu, como pessoa desenvolvedora front-end, posso dizer que normalmente colocamos no HTML elementos que não serão alterados ou que sofrerão poucas alterações. Assim, os itens passíveis de sofrerem mais mudanças são alocados no JavaScript.

Guilherme: Vamos acessar o arquivo app.js, que ainda não possui linhas de código. Além disso, é interessante mantermos o arquivo index.html aberto para conseguirmos fazer consultas e entender o que está sendo feito.

Já entendemos como trabalhamos com variáveis. Se queremos, de alguma maneira, apontar para o HTML e manipular algum texto existente nele, é importante lembrarmos qual tag estamos utilizando. Ou seja, qual a propriedade do HTML, se é um título, parágrafo, entre outros.

Na linha 22 do arquivo HTML, temos `<h1></h1>`. Geralmente, a tag h1 é usada para dar nome aos títulos da página.

Mônica: Esta tag vai de h1 até h6, como se fossem níveis, sendo h1 o principal. Por ser o principal, geralmente é o único. Ou seja, apenas um título da página é elencado com a tag de nível h1, o que facilita sua seleção.

Guilherme: Isso! Note que essa tag está vazia, ou seja, não há texto. Então vamos manipulá-lo.

Para isso, no arquivo app.js, criaremos uma variável let cujo título será titulo.

> let titulo =

Para conseguirmos, de fato, alterar o conteúdo do HTML com o JavaScript, precisamos capturar esse fragmento e selecionar h1. Conseguimos fazer isso usando uma palavra reservada chamada document.

> let titulo = document.

Esse document ainda não capta o h1, já que o documento HTML tem muitos elementos. Para que ele saiba o que deve ser selecionado, usamos .querySelector().

É importante que o "S" esteja em maiúsculo, caso contrário, não vai funcionar. Trata-se de um case sensitive, que diferencia maiúsculas e minúsculas.

> let titulo = document.querySelector()

Nos parênteses, passamos entre aspas simples o nome da propriedade (tag) a ser selecionada. No caso, h1:

> let titulo = document.querySelector('h1');

Desta forma, selecionamos o que queríamos.

O próximo passo é inserir um texto dentro desta tag. Para isso, vamos pegar a variável titulo, sem o uso de let, pois usamos apenas para criar esta variável, e chamar .innerHTML.

> let titulo = document.querySelector('h1');  
titulo.innerHTML =

Mônica: O innerHTML tem uma tradução que deixa claro o seu sentido. Se você traduzir, encontrará algo semelhante a "dentro do HTML". Neste caso, dentro do HTML do título.

O interessante sobre o JavaScript é que os atributos e propriedades nativos da linguagem, geralmente deixam claro sua funcionalidade ao ser traduzidos.

Ele precisará receber um valor que será um texto. Como já vimos anteriormente, quando queremos enviar texto, precisamos passá-lo entre aspas.

Guilherme: Pensando nisso, vamos optar pelo texto "Jogo do número secreto":

> let titulo = document.querySelector('h1');  
titulo.innerHTML = 'Jogo do número secreto';

Ao fazer isso. Vamos salvar teclando "Ctrl + S" e voltar ao projeto.

Note que o título com o texto "Jogo do número secreto" surgiu acima da caixa de texto!

Vamos alterar mais uma tag para entendermos melhor.

No código HTML, na linha 23, temos um parágrafo, representado pela tag p:

> `<p class="texto_paragrafo"></p>`

Nesse parágrafo, poderíamos inserir as mensagens que estavam no alerta, como "Escolha um número entre 1 e 10", por exemplo.

Voltemos ao arquivo .js para selecionar o parágrafo do documento HTML. O processo é o mesmo que acabamos de fazer, então vamos criar uma variável chamada paragrafo que será igual a document.querySelector(). Entre parênteses e aspas simples, colocamos o nome da tag: p.

> let titulo = document.querySelector('h1');  
titulo.innerHTML = 'Jogo do número secreto';  
let paragrafo = document.querySelector('p');

Selecionamos a propriedade p. O que precisamos fazer, agora, é alterar seu conteúdo. Para isso, usamos paragrafo.innerHTML e passamos o texto entre aspas:

> let titulo = document.querySelector('h1');  
titulo.innerHTML = 'Jogo do número secreto';

> let paragrafo = document.querySelector('p');  
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

Mônica: É importante reforçar que o que estamos vendo é específico do JavaScript. Sendo assim, você provavelmente não encontrará funções como innerHTML e querySelector em outras linguagens de programação.

Mas o interessante do JavaScript é exatamente isso: ele funciona tanto para quem trabalha com front-end quanto para quem trabalha com back-end. É por isso que estamos usando durante este curso!

Guilherme: Isso! Após fazer essas alterações, vamos salvar e ver como ficou.

Na aplicação, note que o texto "Escolha um número entre 1 e 10" apareceu acima da caixa de texto, em um tamanho bem menor que o título que está logo acima.

Agora temos um título com o texto "Jogo do número secreto" e, abaixo, um parágrafo cujo texto é "Escolha um número entre 1 e 10"!

### Aula 1 - Criando uma função - Vídeo 3

Transcrição  
Guilherme: O próximo desafio consiste em reconhecer os botões que temos abaixo da caixa de texto: "Chutar" e "Novo jogo".

O botão de novo jogo está desabilitado, o que faz sentido, pois não iremos trabalhar com o novo jogo agora, mas sim com o jogo atual. O objetivo, portanto, é que ao clicar em "Chutar", algo aconteça.

Vamos clicar com o botão direito do mouse e selecionar a opção "Inspecionar". Uma janela abrirá e, nela, vamos em "Mais guias", representado pelo símbolo de suas setas para direita ">>". Em seguida, clicamos em "Console".

Mônica: Nossa intenção é manter o console aberto para ver alguma atividade ao clicar em "Chutar". Por enquanto, é um botão simples, sem ação, mas vamos fazer essa implementação com JavaScript.

Guilherme: No HTML, por volta da linha 27, temos o botão "Chutar" e um elemento onclick.

> `<button onclick="" class="container__botao">Chutar</button>`

Isso significa que iremos escrever algo para o JavaScript executar. Neste caso, passaremos para onclick, entre aspas duplas, a verificação de chute: "verificarChute()", com "v" em minúsculo e "c" em maiúsculo, seguido de parênteses. Faremos desta forma porque será uma função.

> `<button onclick="verificarChute()" class="container__botao">Chutar</button>`

Sempre que criamos uma função em onclick, no HTML, e queremos usá-la no JavaScript, escrevemos o mesmo nome desta função. Ou seja, no arquivo app.js, chamaremos verificarChute().

> verificarChute()

Mônica: No HTML, temos um atributo bastante intuitivo, o onclick, que ao clique precisa acionar uma funcionalidade. Portanto, podemos criar uma função, e, para criar uma função no JavaScript, precisamos descrever em inglês. Sendo assim, adicionamos o termo function antes de verificarChute():

> function verificarChute()

Guilherme: Mas o que é uma função? Independente da linguagem de programação, sempre que pensamos em uma função, pensamos em um trecho de código que executa uma ação ou tem alguma responsabilidade.

Neste caso, queremos uma função que vai verificar o chute que a pessoa deu. Portanto, temos um campo para a pessoa inserir um número e a função vai verificar esse número "chutado". Ou seja, precisamos pegar o valor do chute e verificar se ele é igual ao número secreto.

Para isso, precisaremos ter um escopo, que é o corpo da função. Esse escopo é representado por chaves, dentro das quais implementaremos o conteúdo dessa função:

> function verificarChute() {  
  // Corpo da função  
}

Vale ressaltar que este formato é um padrão, então sempre que criamos uma função precisamos colocar function antes do nome da função. Além disso, é importante lembrar que, seguindo boas práticas de programação, as nossas funções precisam ter nomes descritivos. O nome "v", por exemplo, é muito vago e não nos dá ideia do que uma função faz. Já verificarChute é bem descritivo e qualquer pessoa entenderá do que se trata.

Mônica: A regra que seguimos para declarar variáveis, também funciona para funções. Funções com nomes pouco descritivos são exemplos de má prática e devem ser evitadas!

Guilherme: A função é responsável por executar alguma ação dentro do nosso programa. Por padrão e por convenção, é ideal determinar que as funções tenham apenas uma responsabilidade. Logo, a responsabilidade do botão que verifica o chute, como o nome sugere, é verificar o chute.

No escopo da função, vamos incluir um console.log() com a mensagem "O botão foi clicado!":

> function verificarChute() {  
  console.log('O botão foi clicado!')  
}

Vamos salvar e voltar para a aplicação.

Cada vez que clicamos no botão "Chutar", a função é chamada e a frase "O botão foi clicado!" é impressa no console. Isso significa que o botão está funcionando corretamente!

Em seguida, vamos nos aprofundar na questão de funções e começar a trabalhar em nosso jogo.

### Aula 1 - Para saber mais: diferenças entre html, css e Js

![alt text](image.png)

HTML, CSS e JavaScript (JS) são três tecnologias fundamentais para o desenvolvimento web.

O HTML (HyperText Markup Language) é a linguagem de marcação utilizada para estruturar o conteúdo de uma página web. Essa linguagem usa tags para definir a hierarquia dos elementos de uma página. Originado em 1991 por Tim Berners-Lee, o HTML é como o esqueleto de uma página web: trabalha organizando o conteúdo, como títulos, parágrafos, imagens e links, para que tudo fique bem arrumado e no lugar certo.

O CSS (Cascading Style Sheets), criado em 1995, é destacado como uma linguagem de estilos. Ele separa a apresentação da estrutura: é responsável pela apresentação e estilização dos elementos, pois permite controlar cores, fontes, layouts e outros aspectos visuais. É como vestir a estrutura HTML com roupas elegantes para que a página pareça exatamente como você deseja.

O JavaScript, por sua vez, é a única linguagem de programação das três. É responsável por adicionar interatividade e dinamismo às páginas. Possibilita a criação de funcionalidades como animações, validações de formulários e atualizações de conteúdo em tempo real.

O papel de cada tecnologia dessas na construção de aplicações web, de forma bem resumida, é: o HTML estrutura o conteúdo, o CSS define o estilo e o layout, e o JavaScript adiciona funcionalidades dinâmicas.

**Tecnologia - Função - Exemplos de Uso**  
HTML - Linguagem de marcação para estruturar conteúdo - Título, Parágrafo

CSS - Linguagem de estilos para apresentação e estilização. - p { color: blue; } div { background: #f2f2f2; }

JavaScript (JS) - Linguagem de programação para interatividade. - function iniciarJogo() { ... }

A aprendizagem dessas tecnologias é crucial para qualquer pessoa interessada em desenvolvimento web, uma vez que elas formam a base do ambiente digital. Compreender o HTML é necessário para estruturar e organizar o conteúdo de uma página de maneira semântica, o que é vital para a acessibilidade, indexação por motores de busca e uma experiência consistente entre diferentes dispositivos.

O CSS permite que pessoas desenvolvedoras controlem o design e a aparência de seus sites, possibilitando a criação de layouts atraentes e responsivos, que se adaptam a diferentes tamanhos de tela.

Por fim, o JavaScript capacita os desenvolvedores e as desenvolvedoras a criar experiências interativas e dinâmicas, e melhorar a usabilidade ao oferecer às pessoas usuárias funcionalidades mais avançadas.

A proficiência em HTML, CSS e JavaScript permite materializar ideias de maneira criativa e funcional, o que proporciona aos usuários finais uma experiência envolvente e intuitiva.

Além disso, essas habilidades são altamente valorizadas no mercado de trabalho, visto que a demanda por pessoas desenvolvedoras web qualificadas é constante, dada a importância contínua da presença online para empresas e indivíduos. Portanto, aprender e aprimorar essas tecnologias é um investimento significativo para qualquer pessoa que deseja se destacar na área de desenvolvimento web.

Para saber mais ainda sobre as características dessas três tecnologias a [Rafa Ballerini escreveu um artigo](https://www.alura.com.br/artigos/html-css-e-js-definicoes) enfatizando essas diferenças.

### Aula 1 - Desafio: hora da prática

Em uma carreira de desenvolvimento de software, a prática consistente da lógica de programação desempenha um papel fundamental na construção de bases sólidas.

A lógica de programação não apenas permite a criação de algoritmos eficientes e soluções elegantes, mas também desenvolve a capacidade de pensar de forma estruturada e analítica.Essa habilidade é essencial para enfrentar desafios complexos e transformar problemas abstratos em implementações tangíveis.

Pensando nisso, criamos uma lista de atividades (não obrigatórias) focada em prática para melhorar ainda mais sua experiência de aprendizagem. Bora praticar então?

***Desafios***

1. Faça o download de outro projeto [clicando neste link](https://github.com/alura-cursos/js-curso-2/tree/desafio_1) e abra no Visual Studio Code.

2. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

3. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

6. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião da pessoa instrutora”.

Para te ajudar a verificar seus códigos, está disponível uma possível resolução dos desafios [neste link](https://github.com/alura-cursos/js-curso-2/tree/desafio_1_respostas) para você construir ou validar suas soluções.

### Aula 1 - O que aprendemos?

Aqui está um resumo dos tópicos ensinados nesta aula:

- Carregamos o projeto com o HTML e o CSS para criar a estrutura e o estilo da página que utilizaremos durante o curso;

- Aprendemos a manipular o conteúdo dos elementos HTML, como o H1 e o parágrafo (p), utilizando JavaScript para alterar dinamicamente o texto exibido na página;

- Entendemos a importância da interação entre o HTML e o JavaScript para criar páginas web dinâmicas e interativas.

Na próxima aula:  
Vamos aprender o que são funções de forma prática e qual a sua importância na carreira de desenvolvimento de software!

## Aula 2 - Funções

### Aula 2 - Funções com parâmetros - Vídeo 1

Transcrição  
Guilherme: Vamos aprofundar ainda mais em relação a funções.

Funções com parâmetros
Guilherme: Moni, se você observar o nosso código, especificamente nas linhas 1 e 2 e nas linhas 4 e 5, você pode pensar que ambas são muito diferentes e não têm qualquer semelhança.

app.js:

```JavaScript
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
```

Em uma, pegamos o conteúdo do h1 e, na outra, pegamos o conteúdo do parágrafo, criando variáveis e assim por diante.

Mônica: No entanto, elas estão bem semelhantes. Apesar de pegar elementos diferentes, elas fazem a mesma ação. Elas pegam o elemento, armazenam em uma variável e também alteram seu texto.

Guilherme: Vamos analisar isso detalhadamente? Primeiro, temos let titulo, let paragrafo. Qual é a diferença entre eles?

No caso de let titulo, criamos uma variável para guardar a seleção do h1. Enquanto em let paragrafo, criamos uma variável para guardar o elemento do parágrafo.

Basicamente, estamos fazendo algo do tipo, let campo, let tag ou let elemento, seguindo essa ideia. Um desses campos é o título, o outro é o parágrafo.

Após isso, colocamos um igual à document.querySelector(). Dentro os parênteses, tem algo diferente. No titulo, buscamos pelo h1, no outro, buscamos por uma tag p.

Portanto, a única diferença aqui é a tag.

Na linha seguinte, pegamos a valor desse campo, que um é título e o outro é parágrafo, e fazemos campo.innerHTML para atribuir outro valor.

A diferença está no texto de cada um. O texto do título é "jogo do número secreto" e o texto do parágrafo é "escolha um número entre 1 e 10".

Exemplo

> let campo = document.querySelector(tag)  
campo.innerHTML = texto

Você pode perguntar: "Guilherme, isso não vai funcionar. O que você está fazendo?".

A explicação é a seguinte:

Sempre que temos padrão de código ou um código muito parecido, onde apenas alguns detalhes são modificados, podemos isolar esse comportamento em uma função.

Em vez de escrever quatro linhas de código, escrevemos menos linhas.

Mônica: Sim, é uma boa prática evitar a repetição de código com funções!

Guilherme: Nesse caso, utilizamos dois seletores. O seletor do h1 e o seletor do p.

Mas imagine se no nosso projeto tivéssemos que lidar com 50 seletores, como h1, h2, parágrafo e outros diversos seletores? Seria bastante difícil e trabalhoso escrever o mesmo código 50 vezes.

Mônica: Agora, você pode estar se perguntando: "Por que primeiro você mostra o modo errado e depois o modo correto?". Bom, não é errado, estamos apenas aprimorando uma boa prática.

Guilherme: Na verdade, o código que temos está em evolução. Isso é comum. Lembre-se, a maneira atual não é a maneira errada, pois o código ainda funciona.

No contexto em que estamos inseridos, a estrutura atual funciona. A questão é: "Como podemos tornar esse código independente do campo, onde passamos uma tag e passamos um texto?". Poderemos fazer isso usando funções.

Por isso, vamos criar uma nova função a partir da linha 7, usando o termo function. Esta função terá um nome, por exemplo, exibirTextoNaTela().

Mônica: Para seguir o padrão de boas práticas, a primeira letra de cada palavra deve ser maiúscula, exceto a primeira.

Guilherme: Abrimos e fechamos chaves e recortamos a lógica do campo dentro do bloco da função.

Mônica: Também, vamos adicionar o ponto e vírgula no final dessas duas linhas.

Guilherme: Sim, Moni! Essa é a razão pela qual o Pair Programming (programação em dupla) é tão útil.

Mônica: Pronto, na linha 14 após o console.log(), falta um ponto e vírgula também. Portanto, vamos conferindo e fazendo as alterações necessárias à medida que avançamos.

```JavaScript
function exibirTextoNaTela() {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function verificarChute() {
    console.log('O botão foi clicado!');
}
```

Guilherme: Agora vem a parte desafiadora. Precisamos fazer com que o código funcione usando uma função.

O que é diferente é a tag, o h1 e o p. Por isso, na hora de invocar essa função, podemos especificar que o JavaScript deve usar a função exibirTextoNaTela() especificamente para o h1. Posteriormente, o JavaScript deverá usar a função exibirTextoNaTela() especificamente para o parágrafo.

Vamos comentar a linha do let titulo ao paragro.innerHTML, adicionando // no começo. Assim, poderemos usar a função que criamos.

```JavaScript
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
```

Na linha abaixo da função, vamos digitar exibirTextoNaTela(). Assim, primeiro criamos a função e, agora, estamos de fato executando esta função.

Queremos exibir o texto na tela. Porém, o texto na tela refere-se ao h1. Para conseguir capturar o h1 e passar dentro da tag no querySelector(), vamos passar a tag como parâmetro da função. Ou seja, escrevemos tag entre os parênteses de function exibirTextoNaTela().

Com isso, na chamada da função exibirTextoNaTela(), passados o h1 entre aspas. Pois, queremos que esse valor de tag seja substituído pela string h1. Dessa forma, todos os lugares onde existir tag serão substituídos por h1.

Mas, queremos fazer o mesmo para o parágrafo também. Em uma nova linha, basta escrever exibirTextoNaTela() para o parágrafo, ou seja, informando o p entre aspas.

```JavaScript
function exibirTextoNaTela(tag) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1');
exibirTextoNaTela('p');
```

Mônica: Através desses parênteses após o nome da função, conseguimos nos comunicar com aquela função sobre o que queremos que aconteça lá dentro.

Guilherme: Perceba que na primeira vez que chamamos a função exibirTextoNaTela(), passando o h1, todo lugar que tiver tag será substituído pelo h1.

Na segunda vez que chamamos essa função exibirTextoNaTela(), passando p, todo lugar que tiver tag será substituído pelo valor p.

Mônica: Sim, mas também temos que informar o texto para o campo.innerHTML. O que é texto? Também é algo que precisaremos comunicar para essa função. Então, dentro dos parênteses da função na linha 7, vamos adicionar uma vírgula para informar outro parâmetro que essa função vai receber e adicionamos o texto.

Agora, onde chamamos o exibirTextoNaTela(), vamos informar o texto que queremos. Após enviar o primeiro parâmetro, adicionamos uma vírgula, e enviamos o segundo parâmetro.

Na primeira chamada da função, o segundo parâmetro será Jogo do número secreto entre aspas. Na segunda chamada, será o texto Escolha um número entre 1 e 10 também entre aspas.

```JavaScript
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
```

No curso anterior, mencionamos muito que o JavaScript lê linha a linha. Por isso, estamos criando a função e chamando-a depois.

Mas, se colocássemos a função depois, também funcionaria. O JavaScript pega tudo que está declarado como função, guarda em algum lugar para ser lido somente quando invocamos (chamamos) essa função.

Guilherme: Lembrando que isso é algo específico do JavaScript, tanto que não estamos fazendo desta forma. Preferimos declarar a função e, abaixo, usar essa função.

Podemos apagar da linha 1 a 5, onde tínhamos os trechos comentados de código. Dessa forma, evoluímos o nosso código.

Qual é o desafio agora? Precisamos testar para verificar se as alterações funcionam. Vamos voltar no navegador. Ainda temos os textos: "Jogo do nome secreto" e "Escolha um número entre 1 e 10". Excelente!.

Ao clicar em "Chutar", aparece a mensagem no console:

O botão foi clicado.

Mônica: Portanto, aprendemos dois tipos de funções: com parâmetros e sem parâmetros. No entanto, essas não são as únicas operações que podemos realizar com funções.

### Aula 2 - Funções com retorno - Vídeo 2

Transcrição  
Mônica: Já criamos dois tipos de funções: uma para exibir textos na tela e outra para verificar a interação com o botão.

Agora, precisamos gerar um número aleatório. Como isso é uma nova funcionalidade, podemos implementá-la utilizando funções.

Funções com retorno
Guilherme: Vamos criar uma nova função na linha 13 do nosso código, após verificarChute().

Repare que quando começamos a escrever function, o Visual Studio Code já sugere a criação de um function statement. Quando confirmamos, pressionando "Enter", a estrutura básica de uma função é criada automaticamente.

app.js:

> function name(params) {  
  
}

Aproveite as sugestões da IDE!

No lugar de name, podemos nomear a função da forma que achamos mais adequado. Vamos chamá-la de gerarNumeroAleatorio.

Mônica: Há uma sugestão para que um parâmetro seja adicionado à função. Mas, neste caso, não precisamos disso, pois desejamos que a máquina gere um número aleatório sem a necessidade de receber qualquer informação prévia.

Por isso, podemos apagar params que está entre os parênteses, deixando-os vazios.

Guilherme: Para gerar o número aleatório, utilizaremos o código que conhecemos: Math.random(). Será uma função que multiplica por 10 e soma 1 para ter um número entre 1 e 10.

Mônica: A função Math.random() retorna um valor decimal, mas queremos um número inteiro. Por isso, colocamos a expressão matemática entre parênteses e utilizamos parseInt() para converter o resultado em um número inteiro.

```JavaScript
function gerarNumeroAleatorio() {
    parseInt(Math.random() * 10 + 1);
}
```

Guilherme: Dessa forma, isolamos esse processo. Em outras palavras, existe uma parte da nossa aplicação que é capaz de gerar esse número aleatório.

Imagine se tivéssemos um código com 500 linhas. Encontrar onde é gerado um número aleatório poderia ser bem complicado. Ao utilizar a função, a aplicação fica mais fácil de ser compreendida.

Não nos aprofundamos em Math.random(), porque já aprendemos essa função anteriormente. Dúvidas sobre essa função? Revisite o curso anterior!

Mônica: Agora, precisamos guardar o valor do número aleatório em algum lugar para posteriormente fazer sua verificação.

Guilherme: Por isso, vamos criar na linha 1 a variável let numeroSecreto que vai ser igual à função gerarNumeroAleatorio().

> let numeroSecreto = gerarNumeroAleatorio();

Mas, temos um problema. Diferente das outras funções, como exibirTextoNaTela() e verificarChute(), esperamos que a função gerarNumeroAleatorio() nos retorne uma informação.

Mônica: Atualmente, o que acontece em nosso código? Essa função é chamada na linha 1, ela é executada e gera um número aleatório. Mas para onde vai essa informação? Ela precisa ser armazenada na memória.

Guilherme: Ao gerar o número aleatório, queremos que a função nos retorne esse número que terá valor entre 1 e 10. Para garantir esse comportamento, precisamos informar que queremos este retorno utilizando a palavra reservada return na linha 16, antes de toda a expressão matemática.

```JavaScript
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
```

Mônica: Com isso, o valor gerado será atribuído à variável numeroSecreto através do retorno da função.

Guilherme: Nesse ponto, podemos perceber que existem diferentes modelos de funções. Por exemplo, temos uma função que não possui parâmetros e nem retorno, que é a função verificarChute().

Temos a função exibirTextoNaTela(). Ela realiza a tarefa de exibir um texto na tela, mas não esperamos que ela nos devolva uma informação. Por isso, ela possui parâmetros que são as informações que queremos exibir, mas não possui um retorno.

Na função de gerarNumeroAleatorio(), não definimos nenhum parâmetro. Por isso, não tem nenhuma informação entre os parênteses. Contudo, há um retorno. Qual é o retorno? A geração de um número entre 1 e 10.

E o que fazemos quando essa função é chamada, ou seja, quando a utilizamos na linha let numeroSecreto?

Note que não estamos utilizando a função quando a declaramos como function. Nesse momento, apenas estamos declarando que a função existe. Para efetivamente usar a função, precisamos invocá-la como gerarNumeroAleatorio().

Com isso, pegamos o resultado retornado pela função e o armazenamos na variável chamada numeroSecreto.

Agora, vamos testar a geração desse número secreto para certificar que a função funciona corretamente.

Mônica: Precisamos imprimir esse número em algum lugar.

Guilherme: Podemos imprimi-lo no console. Podemos substituir o texto do console.log() da função verificarChute() pela variável numeroSecreto.

```JavaScript
function verificarChute() {
    console.log(numeroSecreto);
}
```

Após salvar o arquivo, voltamos ao projeto no navegador e atualizamos a página. Desse modo, o número secreto só será exibido quando clicarmos no botão "Chutar".

Vamos limpar o console com "CTRL + L" e clicar em "Chutar". Foi gerado o 8.

8

Clicamos de novo, foi gerado novamente o número 8.

Mônica: O número 8 não está sendo gerado repetidamente, o que acontece é que chamamos a função de geração de número aleatório apenas uma vez. Essa primeira vez gerou o número 8 aleatoriamente. Nas vezes seguintes, estamos apenas imprimindo o mesmo número.

Guilherme: Se atualizamos a página e limpamos o console, podemos clicar em "Chutar" de novo. Ai, sim, teremos outro número gerado.

5

Conclusão  
Guilherme: Já criamos três tipos de funções: funções com retorno, funções com parâmetros e funções sem retorno e sem parâmetros.

Mônica: Além disso, exploramos algo novo. Antes, havíamos criado variáveis que recebiam valores do tipo string ou número. Agora, estamos atribuindo funções às variáveis.

### Aula 2 - Tipo booleano - Vídeo 3

Transcrição  
Guilherme: Agora é a hora da verdade. No HTML do nosso programa, temos uma propriedade chamada input após o parágrafo de "Escolha um número entre 1 e 10". O que ela faz?

index.html:

> `<input type="number" min="1" max="10" class="container__input">`

Se observamos o jogo no navegador, esse campo input é onde a pessoa jogadora irá inserir um número entre 1 e 10.

Nesse campo, podemos digitar o valor 5, por exemplo. Para chutar esse valor, clicamos no botão "Chutar". Mas, o número aleatório gerado foi 6, erramos.

Mônica: No momento, só imprimimos o número aleatório, não o nosso chute.

Guilherme: Então, o que queremos fazer? Ao clicar em "Chutar", queremos pegar o valor especificado no input que é a entrada da pessoa usuária, e compará-lo com o número aleatório. Inicialmente, vamos mostrar no console para conferir se acertamos ou erramos o chute.

Tipo booleano
Mônica: Como queremos um elemento que está dentro do HTML, usaremos um modo muito semelhante ao que fizemos para pegar o parágrafo e o título.

Guilherme: Porém, temos uma diferença. Diferentemente do h1 e p, o que queremos é obter a informação inserida, não exibi-la. Portanto, não usaremos a função de exibirTextoNaTela().

Na função verificarChute(), vamos criar um campo novo. Por exemplo, let chute vai ser igual à document.querySelector(). Entre os parênteses, vamos escrever o input entre aspas.

Como sabemos que é a campo input? Porque verificamos a linha 25 do código HTML, onde escrito input do tipo número de 1 a 10. Esse é o campo que queremos.

Pegamos essa informação, porém queremos apenas o valor inserido no campo. Não queremos o HTML completo. Por exemplo, queremos apenas o valor 5 que foi digitado.

Quando temos um input e queremos apenas o valor inserido, utilizamos .value após a seleção que fizemos. Precisa ser escrito desta maneira. Lembre-se de colocar o ponto e vírgula ao final.

app.js:

```JavaScript
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
}
```

Mônica: E por qual motivo fazemos isso? Quando usamos o h1 e p, guardamos o texto direto dentro da variável. Mas o input não é um texto, é um valor inserido por alguém, portanto, usamos .value.

Guilherme: Em seguida, vamos fazer a comparação dentro do console para verificar que tipo de resposta vai ser gerada.

No console.log(), vamos escrever chute == numeroSecreto.

```JavaScript
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}
```

Por que utilizamos == e não =? Sempre que usamos =, queremos atribuir um valor. Quando usamos ==, queremos comparar um valor.

No JavaScript, existem outras formas de comparação. Mas, esses dois já são suficientes para nós por enquanto.

O que faremos no navegador? Iremos clicar no botão de "Novo jogo" para dar um refresh na tela. Em seguida, vamos inserir um valor e clicar no botão "Chutar". O que esse botão fará? Vai verificar o nosso chute. Ou seja, vai pegar o valor que inserimos e mostrará no console se o chute é igual ao número secreto.

Antes de tudo, vamos limpar o nosso console mais uma vez com "Ctrl + L". Agora, insira um número 2 no campo de input e apertamos "Chutar".

false

Apareceu algo diferente. O que é um false no JavaScript? Vamos pesquisar?

No buscador, vamos colocar false JavaScript e entrar na documentação do JavaScript sobre booleanos. Olha que interessante.

O tipo booleano é um nome muito comum para outras linguagens de programação também. É um valor que pode ser verdadeiro ou falso.

Quando desenvolvemos o jogo pela primeira vez, o que ele esperava quando fazíamos as comparações? Se é verdadeiro ou se é falso.

Sempre que encontramos o nome booleano na programação, seja no JavaScript ou outras linguagens, esperamos que esse valor será verdadeiro ou falso.

Pode haver um valor ou outro diferente. Talvez o JavaScript trabalhe um pouco diferente, mas o que importante para nós é entender se esse valor é verdadeiro ou falso.

Mônica: Percebam como o conhecimento vai aumentando, porque já conhecemos vários tipos. Aprendemos sobre o tipo string (texto), o tipo number (número), e agora o tipo boolean (verdadeiro ou falso).

Guilherme: Podemos até manipular o jogo para dar verdadeiro. Vamos remover temporariamente a chamada da função gerarNumeroAleatorio() que guardamos na variável numeroSecreto. No lugar, vamos colocar um número qualquer, como o 5.

Exemplo

> let numeroSecreto = 5;

No navegador, vamos digitar o número 5 no campo de input para verificar qual tipo de retorno que será exibido no console.

> true

É retornado o valor true que, em inglês, significa verdadeiro. E false significa falso.

Vamos desfazer a última alteração no código para ser gerado, de fato, um número aleatório.

Conclusão  
Em resumo, sempre que fazemos uma comparação, esperamos um valor verdadeiro ou falso - mais conhecido como tipo booleano.

Na sequência, o que vamos fazer? Podemos usar uma alternativa ao console, para exibir na tela uma resposta que faça mais sentido.

#### Aula 2 - Anatomia de uma função

A anatomia de uma função em JavaScript é composta por diversas partes que definem seu comportamento. É importante compreender esses elementos para criar funções reutilizáveis e modularizar o código de forma eficiente.

Assim, conhecer a estrutura das funções em JavaScript é fundamental para dominar a linguagem e desenvolver aplicações complexas de forma organizada e funcional.

Com base no que vimos nesta aula, analise as afirmações abaixo e marque apenas as opções verdadeiras sobre funções.

Selecione 3 alternativas

- As funções em JavaScript podem ter um nome.

As funções em JavaScript podem ter um nome. Na verdade, é uma prática comum dar um nome descritivo às funções para facilitar a leitura e o entendimento do código. Esses nomes são usados para chamar a função posteriormente ou para se referir a ela dentro do próprio código, permitindo que você reutilize a função em diferentes partes do programa.

- Palavra-chave function: É usada para declarar uma função em JavaScript.

Isso! Toda função em JavaScript é declarada utilizando a palavra-chave function. Essa palavra-chave é utilizada para criar uma função.

- Parênteses (): Após o nome da função (se houver), os parênteses são usados para definir os parâmetros da função.

Os parênteses em uma função no JavaScript são usados para conter os argumentos que a função recebe, permitindo a passagem de informações para a função e influenciando seu comportamento e resultados.

#### Aula 2 - Função que verifica números

Você é uma pessoa desenvolvedora de software que trabalha com JavaScript e precisa criar uma função que verifique se um número é positivo, negativo ou zero. Sua tarefa é implementar uma função que recebe como parâmetro um número inteiro e exibe uma mensagem no console conforme as seguintes regras:

- Se o número for maior que zero, a mensagem deve ser: "O número é positivo."
- Se o número for menor que zero, a mensagem deve ser: "O número é negativo."
- Se o número for igual a zero, a mensagem deve ser: "O número é zero."

Você pode utilizar a estrutura de controle if-else para verificar as condições e exibir a mensagem correspondente no console. Sabendo disso, analise as alternativas abaixo e marque aquela que possui o código que atende todas as regras citadas acima.

```JavaScript
function verificarNumero(numero) {
  if (numero > 0) {
    console.log("O número é positivo.");
  } else if (numero < 0) {
    console.log("O número é negativo.");
  } else {
    console.log("O número é zero.");
  }
}
```

Neste código, usamos a estrutura de controle if-else para verificar as três possibilidades: se o número é maior que zero, se é menor que zero ou se é igual a zero. Dependendo da condição, a função imprime a mensagem correspondente no console.

### Aula 2 - Para saber mais: funções com JavaScript

As funções desempenham um papel central na programação e no desenvolvimento de software, permitindo encapsular blocos de código reutilizáveis e executáveis. Elas podem ser definidas para executar tarefas específicas, desde cálculos simples até manipulação complexa de dados. As funções em JavaScript podem ter ou não parâmetros, bem como retornar ou não valores.

|Tipo de Função | Exemplo de Código | Uso |
|:---:|:---:|:---:|
|Sem retorno e sem parâmetro|function saudacao() { ... }|Execução de bloco de código simples.|
|Sem retorno e com parâmetro|function cumprimentar(nome) { ... }|Execução de bloco de código com argumentos.|
|Com retorno e sem parâmetro|function gerarNumeroAleatorio() { ... }|Cálculo e retorno de um valor específico.|
|Com retorno e com parâmetro|function somar(a, b) { ... }|Cálculo e retorno baseado em argumentos.|
|Função anônima|let saudacao = function() { ... };|Definição de função sem nome localmente.|
|Arrow function|let quadrado = x => x * x;|Definição concisa de funções curtas.|

Seu uso é essencial para criar aplicações dinâmicas, interativas e eficientes em JavaScript. Porém, você não precisa criar todos os tipos de funções neste momento. Acompanhe as aulas e saiba que essas variações existem e conforme a necessidade, vamos mergulhando cada vez mais profundamente em lógica e JavaScript.

### Aula 2 - Desafio: hora da prática

Saber como usar funções é um dos conceitos fundamentais da programação e do desenvolvimento de software. As funções desempenham um papel crucial na organização, modularização e reutilização de código.

Pensando nisso, criamos uma lista de atividades (não obrigatórias) focada em prática para melhorar ainda mais sua experiência de aprendizagem. Bora praticar então?

**Desafios**  

1. Criar uma função que exibe "Olá, mundo!" no console.

2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião da pessoa instrutora”.

Opinião do instrutor

Para te ajudar a verificar seus códigos,está disponível uma possível resolução dos [desafios neste link](https://github.com/alura-cursos/js-curso-2/tree/desafio_2) para você construir ou validar suas soluções.

Boa sorte nos estudos!

### Aula 2 - O que aprendemos?

Explique com suas próprias palavras os principais conceitos que você aprendeu nesta aula.

Minha Resposta:  
Nesta aula eu aprendi sobre as funções e seus parametros, também sobre o retorne de uma função que pode ser do tipo boleano por exemplo.

Luri(I.A)  
Parabéns pela dedicação aos estudos! Você mencionou funções e seus parâmetros, o que é ótimo! Além disso, aprendemos que funções podem retornar valores, como números aleatórios gerados com `Math.random()`, e que esses valores podem ser utilizados em outras partes do código. Também vimos que funções podem retornar valores booleanos, como `true` ou `false`, que podem ser usados para controlar o fluxo do programa. Continue estudando e praticando!

## Aula 3 - Reiniciando o Jogo

### Aula 3 - Verificando o chute - Vídeo 1

Transcrição  
Guilherme: Môni, acredito que deveríamos mostrar no console um valor True ou False para mostrar a criação do jogo para os amigos.

Mônica: É bom reforçar que o console é uma ferramenta para a pessoa desenvolvedora e não para a usuária.

Guilherme: Então, considerando que nós já discutimos a questão dos valores booleanos, vamos fazer um if() e else().

Em function verificarChute(), abaixo de let chute, escrevemos if(). Se o chute for igual ao número secreto, isso significa que acertamos. Então, nos parênteses passamos chute == numeroSecreto e adicionamos chaves.

Para passar a informação indicando que a pessoa acertou, podemos exibir o texto na tela no lugar do h1, passando outro valor, por exemplo, "acertou".

Para isso, nas chaves e na linha abaixo, escrevemos exibirTextoNaTela(). Nos parênteses passamos 'h1', 'Acertou!' e salvamos.

```JavaScript
//Código omitido
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        }
}
//Código omitido
```

Será muito difícil acertar no chute, então, na primeira linha de código, em let numeroSecreto passamos o número 7.

> let numeroSecreto = 7;

Para testar, acessamos o jogo, digitamos o número "7" e clicamos em "Chutar". Feito isso, o texto exibido muda de "Jogo do número secreto" para "Acertou!".

Mônica: Deu certo!

Guilherme: Mas, repare que a mensagem "Escolha um número entre 1 e 10" continua sendo exibida. Podemos definir uma mensagem melhor quando a pessoa acerta o número.

Para isso, na linha 16, escrevemos exibirTextoNaTela() e dentro dos parênteses passamos 'p', 'Você descobriu o número secreto!'.

```JavaScript
//Código omitido
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
                exibirTextoNaTela('p', 'Você descobriu o número secreto!')
        }
}
```

Para testar novamente, abrimos o jogo e passamos o número "7". Feito isso, visualizamos a mensagem "Acertou! Você descobriu o número secreto!". Ficou muito bom!

Nos casos de erro, precisamos informar se o número que foi chutado é maior ou menor que o número da sorte. Para isso, na linha 17 escrevemos else e adicionamos chaves. Dentro delas, passamos if(chute > numeroSecreto) seguido de chaves.

Dentro das chaves e na linha abaixo escrevemos exibirTextoNaTela(). Nos parênteses, passamos 'p', 'O número secreto é menor'.

Na linha seguinte escrevemos else {}. Nas chaves passamos 'p', 'O número secreto é maior'.

```JavaScript
//Código omitido
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Você descobriu o número secreto!');
        } else {
                if (chute > numeroSecreto) {
                        exibirTextoNaTela('p', 'O número secreto é menor');
                } else {
                        exibirTextoNaTela('p', 'O número secreto é maior');
                }
        }
}
//Código omitido
```

Feito isso, na primeira linha de código, apagamos o número 7 e escrevemos gerarNumeroAleatorio().

> let numeroSecreto = gerarNumeroAleatorio();

Abrimos o jogo e testaremos novamente. Chute um número, Môni.

Mônica: Número 2.

Guilherme: Repare que a mensagem "O número secreto é maior" é exibida na tela.

Chutarei o número 8. A mensagem exibida é "O número secreto é menor".

Mônica: Número 4.

Guilherme: O número é maior. Vou tentar o número 6. Feito isso, a mensagem exibida é "Acertou! Você descobriu o número secreto!".

Deu certo! Para jogar de novo, atualizamos a página.

Mônica: Número 4.

Guilherme: O número é menor, 2 também.

Mônica: Então é o número 1.

Guilherme: Deu certo! Temos a ideia do jogo sem o alert e o prompt, entendendo como criar funções e usando retorno.

Repare que essa questão de termos uma função que exibe na tela, passando somente a tag, ficou muito interessante.

### Aula 3 - Contando tentativas - Vídeo 2

Transcrição
Mônica: Seguindo a lógica do jogo que estávamos desenvolvendo com o prompt e o alert, falta exibir o número de tentativas.

Guilherme: Exatamente, Môni! É interessante sabermos que foram necessárias, por exemplo, 5 tentativas para descobrir o número secreto. Faremos isso agora!

Implementando o número de tentativas
Na linha 16, alteramos o conteúdo do texto da tag p para Você descobriu o número secreto com 5 tentativas!.

> let mensagemTentativas = `Você descobriu o número secreto com 5 tentativas!`;

Para controlar o número de tentativas, na linha 2, criamos uma variável chamada tentativas e inicializamos com o valor 1. A lógica do nosso jogo é que, desde o início, caso o número seja acertado de primeira, já teremos ali uma tentativa.

> let tentativas = 1;

Se passarmos uma template string diretamente para exibir o texto na tela, talvez o HTML não entenda. Isso porque ele espera uma string e não uma template string, que é algo que somente o JavaScript entende.

Sendo assim, na linha 17, criamos uma variável chamada let mensagemTentativas = Você descobriu o número secreto com 5 tentativas. Para indicar que essa string é uma template string usamos as crases no início e no final.

Mônica: Feito isso, vamos ao invés de deixar definido o número de tentativas, apagamos o 5 e passamos ${tentativas}.

```JavaScript
//Código omitido
if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let mensagemTentativas = `Você descobriu o número secreto com  ${tentativas} tentativas!`;
        exibirTextoNaTela('p', 'Você descobriu o número secreto com 5 tentativas!');
        } else {
            if (chute > numeroSecreto) {
                            exibirTextoNaTela('p', 'O número secreto é menor');
            } else {
                            exibirTextoNaTela('p', 'O número secreto é maior');
            }
        }
```

Guilherme: No entanto, devemos nos lembrar que se o número for acertado de primeira, a frase será "Você descobriu o número secreto com 1 tentativas". Então, precisamos criar uma variável para tentativas.

Na linha 17 escrevemos let palavraTentativa igual à tentativas > 1 ? 'tentativas' : 'tentativa'. Em seguida, na linha 18, apagamos a palavra tentativas e passamos ${palavraTentativa}.

Mônica: Também precisamos trocar o parâmetro que enviava texto. Então, na linha 19 apagamos o texto e passamosmensagemTentativas.

```JavaScript
//Código omitido
if (chute == numeroSecreto)
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
//Código omitido
```

Mônica: O JavaScript é uma linguagem não-tipada, então quando informamos que vamos receber um parâmetro, não precisamos especificar qual o seu tipo. Isso nos permite trocar o tipo do parâmetro para uma variável.

Guilherme: Agora, precisamos atualizar a contagem de tentativas sempre que o chute for errado.

Para isso, no fim do else{} escrevemos tentativas++.

```JavaScript
//Código omitido
function verificarChute() {
        let chute = document.querySelector('input').value;
        if (chute == numeroSecreto) 
                exibirTextoNaTela('h1', 'Acertou!');
                let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
                let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
                exibirTextoNaTela('p', mensagemTentativas);
        } else {
                if (chute > numeroSecreto) { exibirTextoNaTela ('p', '0 número secreto é menor');
                } else {
                        exibirTextoNaTela('p', 'O número secreto é maior');
                }
                tentativas++;
        }
```

Guilherme: Agora, vamos testar o jogo para verificar se tudo está funcionando corretamente. No navegador, atualizamos a página do jogo.

Primeiro tentamos o número "5". A mensagem exibida é "O número secreto é menor". Tentamos "2" e o número secreto é menor. Em seguida, tentamos o número "3". A mensagem exibida é "Você descobriu o número secreto com 3 tentativas!".

Agora, vamos testar da outra forma. Para isso, na primeira linha do código, apagamos gerarNumeroAleatorio() e escrevemos 2.

> let numeroSecreto = 2;

Atualizamos o jogo e chutamos o número "2". Feito isso, aparece a mensagem "Você descobriu o número secreto com 1 tentativa!".

Mônica: Importante ressaltar que a contagem considera apenas a primeira tentativa de acerto. Em caso de acertos posteriores, não são consideradas uma tentativa. Somamos apenas os casos de erro.

Guilherme: Para finalizar, na primeira linha de código, apagamos o 2 e voltamos o gerarNumeroAleatório().

Agora, sim, temos as mensagens corretas no singular e plural, dependendo do número de tentativas realizadas para descobrir o número secreto.

### Aula 3 - Botão reiniciar - Vídeo 3

Transcrição  
Guilherme: Tem uma parte do jogo que me deixa um pouco confuso. Vou digitar o número "5" e depois clicar em "Chutar". Feito isso aparece a mensagem dizendo que o número secreto é menor.

Perceba que o número 5 continua aparecendo no campo. Seria interessante que a cada tentativa o campo fosse limpo. Faremos isso agora!

Implementando o campo vazio  
Analisando nosso código, percebemos que, quando acertamos o chute, deixamos o número exibindo na tela. Mas, quando erramos, é melhor deixarmos o campo de texto limpo.

Para isso, abaixo da linha tentativas++, escrevemos limparCampo. Como isso é algo que o Javascript não sabe o que é, podemos criar uma função.

Mônica: Inclusive, essa é uma prática que pode nos ajudar em outros casos futuros em que queiramos limpar o campo de texto.

Guilherme: Na linha 35, escrevemos function limparCampo(). Sua única responsabilidade será limpar o campo, dela não esperamos nenhum retorno.

Então, após os parênteses adicionamos chaves. Dentro, passamos a variável chute igual à document.querySelector('input').

Não colocamos .value porque não estamos querendo pegar o valor. Ao invés disso, na linha seguinte, passamos chute.value igual à '', ou seja, uma string vazia.

```JavaScript
//Código omitido
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
```

Mônica: Strings são sempre textos entre aspas. Como não definimos nenhum texto, o campo deve ficar vazio.

Guilherme: Vamos testar! Abrimos o jogo e atualizamos a página. Digitamos o número 5 e clicamos em "Chutar". Aparece a mensagem "O número secreto é menor" e o campo fica vazio.

Depois, chutamos o número "4" e a mensagem "Você descobriu o número secreto com 3 tentativas" aparece. Abaixo, o campo exibe o número4. Deu certo!

Se analisarmos o jogo, temos um botão chamado "Novo Jogo". Faremos com que quando o número for acertado ele seja habilitado. Depois podemos fazer a implementação.

index.html

Mônica: Podemos abrir o arquivo index.html para identificar como o botão está sendo desativado.

Na linha 28 temos o botão com clique vazio. No fim desse trecho de código, encontramos o disable. É isso o que está desativando o botão. Sendo assim precisamos editar esse atributo para ativá-lo.

Habilitando o Botão Novo Jogo
app.js

Guilherme: Não mexeremos no HTML. Então, voltamos para o arquivo app.js.

Mônica: O botão precisa ser ativado quando o número secreto for ativado e assim iniciar um novo jogo.

Guilherme: Exatamente! A primeira coisa que faremos é pegar esse botão do HTML.

Porém, temos um problema. Existem dois botões, então se definirmos document.querySelector("button"), como estávamos fazendo antes,o código provavelmente selecionará o primeiro botão ao buscar entre todos os elementos.

Repare que o segundo botão possui uma característica diferente, o id="reiniciar".

O id é um atributo que especifica o botão e deve ser único, não pode ser usado em outro lugar.

Então, na linha 20, escrevemos document.getElementById.

Lembrando que, por padrão, o "E", "B" e "I" precisam ser letras maiúsculas.

Mônica: Para especificar qual é o id que queremos, colocamos parênteses. Dentro adicionamos aspas seguido da palavra reiniciar, o nome do ID. Precisa ser igual ao HTML.

Guilherme: Se nessa mesma linha adicionarmos um ponto, que é como acessaremos esse elemento, a ferramenta sugere vários atributos.

Mônica: Segundo a lógica, queremos remover o atributo que faz com que o botão seja desativado. Nesse caso, irá funcionar se usarmos o removeAttribute. Existem várias funções, mas essa é a que queremos, remover o atributo e não o removeAttributeNS(Node).

Guilherme: Então, em após removeAttribute() adicionamos aspas simples e escrevemos disable.

```JavaScript
//Código omitido
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
//Código omitido
```

Guilherme: Agora, vamos testar. No jogo, chutamos o número "5" e a mensagem "Você descobriu o número secreto com 1 tentativa!" aparece. Logo em seguida, note que o botão "Novo jogo" é habilitado.

O próximo passo é fazermos com que esse botão funcione e comece um novo jogo.

### Aula 3 - Reiniciando o Jogo - Vídeo 4

Transcrição  
Guilherme: Agora definiremos uma funcionalidade para o botão "Novo Jogo". Ao clicá-lo, queremos que as tentativas sejam zeradas e um novo número seja sorteado.

Mônica: Como queremos que isso seja iniciado com um clique, então usaremos o onClick.

Definindo a funcionalidade do botão Novo Jogo
index.html

Guilherme: Se acessarmos o HTML, na linha 28 temos um onclick vazio. Após o sinal de igual, dentro de aspas duplas, criamos uma função chamada reiniciarJogo().

Lembrando que precisamos usar os parênteses para indicar que é uma função.

```HTML
//Código omitido
class="container_input">
<div class="chute container_botoes">
    <button onclick="verificarChute()"
    class="container botao">Chutar</button>
    <button onclick="reiniciarJogo()" id="reiniciar"
    class="container_botao" disabled>Novo jogo</
    button>
    </div>
</div>
```

app.js

Feito isso, voltamos no app.js. No fim do código, na linha 41, criamos a função reiniciarJogo(), que não receberá nenhum parâmetro.

Vamos executar essa função quando o botão for clicado, diferente de como geralmente usamos funções no JavaScript, aqui não invocamos a função.

Ao iniciar o jogo queremos que um novo número secreto seja sorteado. Então, adicionamos chaves e dentro passamos numeroSecreto igual à gerarNumeroAleatorio().

Mônica: Em seguida, precisamos que o campo fique vazio e que as tentativas sejam iniciadas como 1.

Guilherme: Isso mesmo! Então, passamos limparCampo() e na linha abaixo tentativas = 1.

```JavaScript
//Código omitido
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
}
```

Guilherme: Vamos testar. Primeiro precisamos acertar o número secreto, então digitamos "5".

Depois, clicamos no botão "Novo jogo". Um novo número é sorteado, mas temos um problema, a mensagem "Acertou" e "Você descobriu o número secreto em 1 tentativa" continuam aparecendo. Precisamos mudar isso.

Para facilitar, copiamos as linhas 9 e 10, referente as funções exibirTextoNaTela() e colamos na linha 45. Agora, faremos as alterações necessárias.

Vamos testar de novo. Ao acertar o número secreto clicamos em "Novo jogo" e a mensagem muda para "Jogo do número secreto. Escolha um número entre 1 e 10".

Mônica: Deu certo! Está funcionando, mas há código repetido e isso não é uma boa prática.

Guilherme: Verdade, Môni! Suponhamos que o jogo foi atualizado para a versão 2.0. Nesse caso, se na linha 9, mudarmos o texto para "Jogo do número secreto 2.0" quando rodarmos o jogo pela segunda vez, essa mensagem não será exibida.

Fazer essa alteração nos dois trechos de código não é uma boa prática. Sendo assim, precisamos isolar esse comportamento em uma função.

Na linha 9, criamos a função exibirMensagemInicial(). A única responsabilidade dessa função será exibir as mensagens iniciais.

Então, colamos as duas funções exbirNaTela() e colamos logo abaixo.

```JavaScript
function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); I
}
//Código omitido
```

Guilherme: Agora, precisamos colocar essa mensagem inicial na função reiniciarJogo(). Para isso, apagamos as linhas 48 e 49. No lugar, passamos a função exibirMensagemInicial().

```JavaScript
//Código omitido
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
}
```

Mônica: Em seguida, precisamos chamar a nova função fora de qualquer outra função para ser iniciada na primeira vez que o app.js for lido.

Guilherme: Exatamente! Então, na linha 14, escrevemos exibirMensagemInicial(). Lembrando que poderia ser em outra linha.

```JavaScript
function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); I
}

exibirMensagemInicial()
//Código omitido
```

Guilherme: Vamos testar. Chutamos até acertar. Depois, clicamos em "Novo Jogo" e ele é iniciado. Deu certo!

Porém, repare que ainda temos um problema. Sempre que clicamos em "Novo Jogo", ele traz um novo jogo. Seria interessante se pudéssemos restaurar o status da nossa aplicação o campo desabilitado. Faremos isso.

No fim do código, na função reiniciarJogo() passamos document.getElementById(). Nos parênteses adicionamos aspas simples e escrevemos reiniciar seguido do atributo .setAttribute().

Dentro dos parênteses, passamos o nome do atributo que queremos setar, então 'disabled'. Adicionamos vírgula e passamos o segundo parâmetro true.

```JavaScript
//Código omitido
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
```

Voltamos no jogo. Repare que começamos com o botão "Novo Jogo" desabilitado. Após acertar o número da sorte ele é habilitado. Ao clicá-lo ele desabilita novamente.

### Aula 3 - Calculadora de Média e Situação do Aluno

Você foi contratado (a) para desenvolver uma calculadora de média e verificar a situação de aprovação de um aluno com base em suas quatro notas. A média para aprovação é 5. Sua tarefa é implementar duas funções em JavaScript:

calcularMedia(nota1, nota2, nota3, nota4)=> Esta função recebe as quatro notas do aluno como parâmetros e retorna a média calculada com base nessas notas.
verificarAprovacao(media) => Esta função recebe a média do aluno como parâmetro e retorna "Aprovado" se a média for maior ou igual a 5, caso contrário, retorna "Reprovado".
Utilize esses valores para as notas:

> let nota1 = 7;  
let nota2 = 6;  
let nota3 = 3;  
let nota4 = 5;

Posto disso, analise cada afirmação abaixo e marque apenas aquelas que mostram partes de código que seguem as regras de negócio citadas acima.

> function verificarAprovacao(media) {  
    return media >= 5 ? "Aprovado" : "Reprovado";  
}

Isso aí! A função verifica se a média passada como parâmetro é maior ou igual a 5 e retorna um valor em formato de texto informando se foi aprovado ou reprovado.

> function calcularMedia(nota1, nota2, nota3, nota4) {  
  let media = (nota1 + nota2 + nota3 + nota4) / 4;  
  return media;  
}

Certo! Esta função calcula a média aritmética das quatro notas fornecidas. Primeiro, ela soma as quatro notas e depois divide essa soma por 4, que é o número total de notas. E por fim retorna o resultado dessa operação, que é a média do aluno.

### Aula 3 - Desafio: hora da prática

Saber como usar funções é um dos conceitos fundamentais da programação e do desenvolvimento de software. As funções desempenham um papel crucial na organização, modularização e reutilização de código.

Pensando nisso, criamos uma lista de atividades (não obrigatórias) focada em prática para melhorar ainda mais sua experiência de aprendizagem. Bora praticar então?

Desafios

1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião da pessoa instrutora”.

Para te ajudar a verificar seus códigos, deixo disponível uma possível resolução dos desafios [neste link](https://github.com/alura-cursos/js-curso-2/tree/desafio_3) para você construir ou validar suas soluções.

Boa sorte nos estudos!

### Aula 3 - O que aprendemos?

Nesta aula:

- Aprendemos como criar um programa para verificar se o “chute” inserido é igual ao número secreto definido. Utilizamos estruturas condicionais para tomar decisões com base no resultado dessa comparação;

- Criamos uma variável para armazenar a quantidade de tentativas realizadas pelo usuário;

- Vimos a importância de consultar a documentação da linguagem e das bibliotecas utilizadas no desenvolvimento do programa. A documentação é uma fonte valiosa de informações que nos auxilia na compreensão de conceitos e no uso correto das funcionalidades disponíveis.

Na próxima aula:  
Vamos aprender como funcionam as listas (ou arrays, em inglês) e como são fundamentais na carreira de desenvolvimento de software!

## Aula 4 - Listas

### Aula 4 -  - Vídeo 1
### Aula 4 -  - Vídeo 1
### Aula 4 -  - Vídeo 1
### Aula 4 -  - Vídeo 1
### Aula 4 -  - Vídeo 1
