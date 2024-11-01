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

### Aula 2 - Funções com parâmetros - Vídeo 5
