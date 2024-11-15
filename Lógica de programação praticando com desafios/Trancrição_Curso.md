# Curso Alura - Lógica de programação praticando com desafios

## Aula 1 - Projeto Sorteador de Numeros

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Jacqueline: Olá, boas-vindas a este curso! Eu sou Jacqueline Oliveira, engenheira de software e instrutora na Alura.

Audiodescrição: Jacqueline se descreve como uma mulher de pele branca, com cabelos longos e loiros lisos, olhos castanhos, vestindo uma camisa preta. Ela está sentada no estúdio da Alura, ao lado esquerdo de uma mesa preta com um notebook e um microfone pretos à sua frente, com uma parede clara ao fundo iluminada em gradiente de azul e lilás.

Porém, não estou sozinha. Estou bem acompanhada pelo Rodrigo.

Rodrigo: Te dou boas-vindas também! Sou Rodrigo Ferreira, um dos instrutores na escola de Programação da Alura.

Audiodescrição: Rodrigo se descreve como um homem de pele branca, com cabelo curto castanho, olhos castanhos, usando uma camisa azul. Ele também está sentado no estúdio da Alura, porém ao lado direito da mesa.

Lhe damos as boas-vindas a mais um curso para treinar e praticar lógica de programação!

O que vamos aprender?  
Jacqueline: O objetivo do curso é reforçar todos os conceitos vistos em lógica de programação, como o uso de variáveis, condicionais, e estruturas de repetição, para consolidar os conhecimentos adquiridos.

Rodrigo: Exato! Para quem está começando agora a dar os primeiros passos com programação, é uma área nova, com muitos conceitos, alguns até um pouco mais difíceis, mas a melhor forma de aprender e se familiarizar é com a prática.

Então, nos cursos de lógica de programação, você aprenderá a desenvolver um projeto, e neste curso, proporemos alguns projetos distintos. Em cada aula, apresentaremos um projeto, explicaremos a ideia e você terá que tentar criar esse projeto por conta própria.

Caso tenha dificuldade ou dúvidas, também mostraremos uma solução implementando o passo a passo para que você tenha uma ideia de como seria o processo de cada um desses projetos.

Jacqueline: Trabalharemos com quatro novos projetos, todos com a parte de front-end já desenvolvida que disponibilizaremos para você. Não se preocupe, pois o objetivo não é mergulhar profundamente em front-end. O principal alvo é praticar a lógica, como resolver uma situação envolvida no projeto, isto é, o desafio do projeto.

Rodrigo: Cada projeto terá funcionalidades específicas e focaremos na parte de algoritmos, de lógica de programação com o uso de variáveis, condicionais, loops, arrays e funções, tudo o que foi visto em outros cursos e será reforçado aqui com diferentes projetos.

Assim, você poderá criar um portfólio com vários projetos, praticar bastante, e se familiarizar cada vez mais com a programação, para posteriormente prosseguir com outros cursos e formações da Alura.

Jacqueline: Estou ansiosa para começar! Vamos iniciar, Rodrigo?

Rodrigo: Vamos conhecer esses projetos e colocar a mão na massa para praticar bastante a lógica de programação.

### Aula 1 - Projetos do curso

Neste curso, praticaremos lógica de programação em alguns projetos distintos, no formato de desafios, sendo que em cada aula será apresentado um novo contexto. Você pode baixar os projetos iniciais de cada aula no seguinte link:

[Projeto inicial](https://github.com/alura-cursos/3411-praticando-logica/archive/refs/heads/projeto_inicial.zip)

Após baixar o arquivo zip, descompacte-o em algum diretório do seu computador e na sequência importe o projeto em sua IDE. No curso, utilizaremos o VSCode, sendo recomendado que você também utilize essa mesma IDE para facilitar o seu aprendizado.

Tudo pronto?

Bons estudos!

### Aula 1 - Apresentação do projeto Sorteador - Vídeo 2

Transcrição  
Rodrigo: Antes de começarmos o curso, tivemos uma mudança. Você deve ter percebido, estamos com um cenário diferente. Estamos nas nossas respectivas casas, pois decidimos fazer uma alteração nesse curso.

Como algumas pessoas estavam com dificuldades para aplicar os conhecimentos e resolver os desafios sozinhas, decidimos gravar uma aula extra. No entanto, essa aula será a primeira. A antiga primeira foi adiada, tornou-se a segunda, e assim por diante.

Nessa aula, teremos um projeto, mas ele não será um desafio para você tentar implementar sozinho. Vamos desenvolver um projeto para reforçar os conhecimentos de HTML, CSS, JavaScript, para que você consiga ter uma base mais sólida e, a partir da aula 2, consiga desenvolver os desafios por conta.

Mesmo que na formação tenhamos os dois primeiros cursos, cujo foco foi dar uma base inicial, percebemos que ainda era necessário reforçar esses conhecimentos. O nosso objetivo é esse, certo, Jacque?

Jacqueline: Exatamente, Rodrigo.

Conhecendo o projeto
Vamos começar. Trabalharemos com o projeto de um sorteador de números. Quando você fizer o download do projeto, receberá a seguinte estrutura de arquivos: uma pasta "img", dentro da qual há algumas imagens, um arquivo app.js vazio, o index.html com o HTML e o style.css. É possível consultar essa estrutura pelo explorador lateral de arquivos do VS Code, com o projeto aberto.

Vamos conhecer o projeto e falar um pouco desses arquivos.

Estamos seguindo a linha dos cursos anteriores, então estamos usando a extensão Live Server do VS Code. Vamos clicar com o botão direito no index.html e clicar em "Open With Live Server". Isso abrirá o nosso projeto no navegador.

Na tela do nosso sorteador de números, vamos digitar no campo "Quantidade de números" um número que representará a quantidade de números que serão sorteados. Vamos digitar, por exemplo, um 3. Nos campos "Do número" e "Até o número", devemos escolher o número inicial e o número final do sorteio. Vamos sortear números de 1 a 10, por exemplo.

Quando clicarmos no botão "Sortear", abaixo dos três campos, ele vai mostrar o resultado — neste caso, ele sorteou 8, 7 e 4.

Você receberá esse front-end e nós vamos programar essa lógica em conjunto. Certo, Rodrigo?

Rodrigo É um projeto bem simples e seguindo a mesma ideia. Temos um HTML, já temos o CSS, que está com um layout bonito, com essas cores e imagens, mas o que interessa para nós é a funcionalidade.

Perceba que é um projeto bem simples. Temos um formulário com três campos. A pessoa que for usar, vai digitar os três valores e clicar no botão de sortear. Temos que ter um código JavaScript com a lógica de ler os valores digitados, o algoritmo de gerar os números aleatórios seguindo esses valores e a exibição na tela.

À direita do botão "Sortear", há um botão de reiniciar, que limpa os campos para começar um novo sorteio. Esse é o objetivo desse projeto.

Nessa primeira aula, nós vamos fazer juntos. A Jacque vai programar no computador dela, eu vou estar apoiando e você vai nos acompanhar.

Jacqueline: Exatamente. No VS Code, com o projeto sorteador de números abertos, vamos voltar ao explorador lateral. Se nós observarmos o interior da pasta "img", temos as imagens usadas no layout do front-end, do nosso site.

Temos utilizado projetos unindo front-end e back-end para te proporcionar um portfólio bacana e te manter mais próximo do que vemos no mercado, onde você sempre terá múltiplos projetos abertos, no front e no back. Reforçamos que você sempre trabalhará um pouco com cada um.

Na pasta "img", nós temos as imagens. Já no index.html, é onde temos a estrutura do site.

O HTML, relembrando, é uma linguagem de marcação. Ele vai marcar através de tags o que deve acontecer e como a página deve estar estruturada. No interior do arquivo HTML temos, por exemplo, uma tag head (cabeçalho, em inglês), e entre a abertura e o fechamento dessa tag, temos referências, links e o título "Sorteador de números".

```HTML
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Sorteador de números</title>
</head>
```

No "corpo" (body) desse HTML, temos um campo label (rótulo) dentro de uma divisão, o qual possui o texto "Quantidade de números", e logo abaixo, o input que ele vai ter, cujo valor mínimo é 1.

```HTML
<body>
    <div class="container">
        <!-- Código omitido -->
                    <div class="container__campo">
                        <label class="texto__paragrafo">Quantidade de números</label>
                        <input class="container__input" id="quantidade" type="number" min="1">
                    </div>
            <!-- Código omitido -->
</body>
```

Isso corresponde exatamente ao que estamos vendo na página do navegador: um label chamado "Quantidade de números". Se pressionarmos a seta para baixo que existe no canto direito do campo "Quantidade de números", o valor diminui, mas nunca fica menor que 1.

O HTML está estruturando a página. Por isso, vamos acessá-lo muitas vezes para fazer referências e buscar esses elementos para interagir no JavaScript.

Voltando ao VS Code, se acessarmos o arquivo style.css que contém a parte de CSS, veremos que ele tem algumas classes, como .container__campo, .container_input e .container_botao. Esse arquivo corresponde à parte de estilização, ou seja, doa as características e a forma como os elementos serão vistos na tela — por exemplo, qual o tamanho do ponteiro, se vai ter ponteiro, se vai estar bloqueado e que cor ele terá.

Se renomearmos esse arquivo, por exemplo, para styleteste.css, quando voltarmos ao nosso sorteador no navegador, a estilização terá sumido. Ele vai continuar funcionando porque nosso JavaScript ainda estará fazendo esse trabalho, porém o estilo não estará mais aplicado.

Você precisa entender essa divisão nitidamente: o HTML diz o que está na página, o CSS estiliza e deixa essa página bonita e o JavaScript interage dinamicamente, fazendo a lógica do negócio.

Vamos retornar o nome do arquivo alterado para style.css.

Rodrigo: Temos essa separação entre HTML, CSS, JavaScript, onde cada linguagem cuida de uma parte do nosso projeto. Nosso foco principal não é no HTML e no CSS, portanto, em todos os desafios, já teremos o HTML e o CSS pronto.

Nosso foco é na lógica de programação, no código JavaScript, que se relaciona com os eventos. Ou seja, quando clicarmos em determinado botão, queremos fazer alguma coisa. Vamos escrever o algoritmo, pegar uma variável, fazer um cálculo e alterar a página.

Jacqueline: Exatamente. No projeto atual, podemos observar que está tudo funcionando porque no nosso arquivo app.js, isso já está programado. Contudo, neste momento, apagaremos todo o conteúdo desse arquivo para fazermos tudo juntos, do zero. Vamos lá?

Iniciando a construção do código  
Após esvaziar o arquivo app.js, nada mais funcionará no nosso sorteador. Se preenchermos os campos no navegador e clicarmos em "Sortear", ele não vai fazer nada e nada acontecerá.

Como decidiremos por onde começar, Rodrigo? Se queremos capturar aqueles inputs que a pessoa digitou para fazer alguma coisa com eles, qual será a nossa primeira estratégia?

Rodrigo: Teremos que escrever o código JavaScript. Contudo, devemos lembrar de uma coisa importante: temos que olhar sempre a página HTML, porque nela está a estrutura da página, os elementos. No JavaScript, o que vamos fazer é manipular esses elementos, recuperar os campos, os seus valores e outros elementos.

Portanto, todo o código JavaScript se baseia no HTML. Um bom ponto de partida seria pensar no que vai disparar a nossa lógica, que é o clique do botão "Sortear". Na nossa página HTML tem um botão "Sortear".

Quando ele for clicado, temos que chamar um código no JavaScript. Então, acho que esse é o primeiro ponto a ser considerado. Precisamos olhar no HTML onde está aquele botão de sortear e ver se ele tem uma função. Caso não tenha, devemos colocar uma função onClick (no clique) para disparar o nosso código JavaScript e começar a escrever o nosso algoritmo.

Jacqueline: Perfeito, Rodrigo. Enquanto você estava falando, eu estava abrindo o local do código a ser estudado, no index.html. Repare que temos uma div, que é o chute container__botoes. Nela, temos dois botões, o sortear e o reiniciar. Eles têm respectivamente os IDs, btn-sortear e btn-reiniciar.

```HTML
<div class="chute container__botoes">
     <button onclick="sortear()" id="btn-sortear" class="container__botao">Sortear</button>
     <button onclick="reiniciar()" id="btn-reiniciar" class="container__botao-desabilitado" >Reiniciar</button>
</div>
```

Quando clicamos no botão de sortear, ele dispara uma função chamada sortear(). Isso significa que, no nosso app.js, precisaremos criar essa função. Esse é o primeiro passo. Vamos acessar o arquivo app.js pelo explorador lateral e faremos uma function em seu interior chamada sortear.

> function sortear(){  
}

O que queremos fazer quando sortearmos? Precisaremos recuperar aqueles campos. Como o Rodrigo falou, onde estão aqueles campos? Quais são os campos que queremos recuperar?

Queremos recuperar a quantidade que foi digitada dentro de três campos input do arquivo HTML, cujos IDs são quantidade, de e ate, que representam os três campos do formulário.

```HTML
<div class="container__campo">
    <label class="texto__paragrafo">Quantidade de números</label>
    <input class="container__input" id="quantidade" type="number" min="1">
</div>

<div class="container__campo">
    <label class="texto__paragrafo">Do número</label>
    <input class="container__input" id="de" type="number" min="1">
</div>

<div class="container__campo">
    <label class="texto__paragrafo">Até o número</label>
    <input class="container__input" id="ate" type="number" min="1">
</div>
```

Recuperaremos esses três campos inicialmente para começar a fazer alguma coisa. Como faremos isso, Rodrigo?

Dentro da nossa function sortear(), podemos criar umas variáveis e buscar o conteúdo que tiver informado lá. Vamos fazer isso?

Rodrigo: Certo. Como a Jacque estava mostrando, sempre temos que olhar para o HTML. Temos que saber qual elemento queremos buscar e como vamos buscá-lo.

As tags do HTML têm propriedades, como id, class e várias outras. Aquela que nos ajuda a encontrar um elemento é o id, que é um identificador único. A Jacque mostrou que cada campo tem um id.

Podemos recuperar um elemento pelo seu id e guardar o conteúdo dele numa variável. Vamos relembrar como declarar uma variável , Jacque?

Jacqueline: Sim. Entre as chaves da função, vamos usar o let para criar uma variável. Podemos usar um nome bem intuitivo e parecido com o que queremos. Então, se queremos recuperar a quantidade, vamos criar uma variável chamada quantidade e adicionar um sinal de igual à sua frente.

```JavaScript
function sortear(){
    let quantidade = 
}
```

O que fazemos para buscar essa variável? Como recuperamos o elemento do HTML, Rodrigo?

Rodrigo: Reforçando, no JavaScript já existe uma variável global — ou seja, a qual não precisamos declarar. Ela se chama document, e representa o documento. Vamos adicioná-la após o sinal de igual.

```JavaScript
function sortear(){
    let quantidade = document
}
```

O documento é como se fosse a página HTML. Nessa variável, podemos adicionar um ponto e chamar alguma função para ela fazer alguma coisa.

```JavaScript
function sortear(){
    let quantidade = document.
}
```

Existem diferentes formas de recuperar um elemento na página. Uma delas é com a função getElementById() que, como o nome diz, vai buscar um elemento pelo seu ID. Se sabemos o ID do elemento na página e queremos recuperá-lo, escreveremos document.getElementById() e passamos entre os parênteses dessa função, o ID do elemento que queremos recuperar como retorno, entre aspas simples (por se tratar de uma string).

```JavaScript
function sortear(){
    let quantidade = document.getElementById('quantidade')
}
```

Jacqueline: Exatamente. Como nós vimos, os IDs dos elementos que queremos são quantidade, de e ate. Primeiro, vamos pegar o quantidade e dizer que queremos pegar o valor que está contido naquele input. Para isso, vamos adicionar um .value após os parênteses e finalizar a linha com ponto e vírgula.

```JavaScript
function sortear(){
    let quantidade = document.getElementById('quantidade').value;
}
```

Rodrigo: Jacque, isso é importante. Quando vamos recuperar um elemento no HTML, chamamos o document.getElementById() e passamos o ID. Isso devolve a tag HTML.

Se não adicionássemos o .value, estaríamos guardando na variável quantidade o elemento HTML, ou seja, a tag input. Contudo, não queremos o input inteiro, somente o valor que a pessoa digitou. O .value serve para indicar que queremos guardar o valor, e não o input.

Jacque: Exatamente.

Para aplicar a mesma lógica nos outros dois campos, podemos copiar e colar a primeira linha duas vezes abaixo de si, substituindo respectivamente a string entre os parênteses de getElementById() para de e ate.

Além disso, vamos substituir o nome das duas variáveis para de e ate.

```JavaScript
function sortear(){
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;
}
```

Jacqueline: Depois disso, vamos conferir se estamos recuperando corretamente, utilizando aquele recurso que já vimos algumas vezes, o alert.

Abaixo das variáveis, vamos pular uma linha e só dar um alert() na página para não se preocupar em exibir o resultado naquele campo de resultado por enquanto, e ver se a nossa variável vai ser exibida corretamente.

Entre os parênteses do alert, vamos adicionar a quantidade e a quantidade recuperada. Para isso, vamos usar aquele recurso para concatenar uma palavra e uma variável: um par de crases, entre as quais adicionaremos a string Quantidade: e ${quantidade}, entre cifrão e chaves, que servirá para referenciar a variável que queremos.

Com isso, queremos que ele concatene e mostre para nós o texto "Quantidade:" e a quantidade recolhida.

```JavaScript
function sortear(){
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;
    
    alert(`Quantidade: ${quantidade}`);
}
```

Faremos a mesma coisa para os outros campos, copiando essa linha com "Ctrl+C", e colando duas vezes abaixo de si com "Ctrl+V", substituindo respectivamente o conteúdo entre crases, de Quantidade: ${quantidade} para Do número: ${de} e Até o número: ${ate}.

```JavaScript
function sortear(){
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;
    
    alert(`Quantidade: ${quantidade}`);
    alert(`Do número: ${de}`);
    alert(`Até o número: ${ate}`);
}
```

Jacqueline: Já podemos ir no nosso site aberto no Live Server e ver se isso vai funcionar. A partir do momento que adicionarmos as quantidades e clicar em sortear, ele deve exibir o resultado para nós em formato de alert.

Voltando ao sorteador aberto no navegador, vamos preencher os campos dizendo que queremos cinco números, que vão do 2 ao 98. Quando clicarmos em "Sortear", ele vai mostrar o texto "Quantidade: 5" em formato de caixa de alerta, no topo da página. Ao clicar em "OK" nessa caixa, veremos outra com o texto "Do número: 2" e, ao clicar em "OK" novamente, veremos a terceira caixa com o texto "Até o número: 98". Podemos clicar em "OK" para fechá-la.

Conseguimos realizar a primeira parte. Recuperamos os valores para poder programar o resto da lógica, que consiste em fazer o sorteio e exibir os cinco números dentro do intervalo informado.

#### Aula 1 - Para saber mais: Relembrando as diferenças entre HTML, CSS E JS

Para praticar lógica de programação de forma interessante e visual, optamos por trazer projetos completos, que irão compor seu portfólio e fazer com que a sua experiência em desenvolvimento de aplicativos seja mais próxima ao que é feito no mercado de trabalho.

Sendo assim, os projetos apresentados sempre têm três arquivos distintos em sua composição: um com extensão HTML, outro com extensão CSS e outro com extensão JS.

Vamos relembrar, por meio de uma atividade de um dos cursos que é pré-requisito a esse, a diferença entre esses três tipos de tecnologias:

Para saber mais: [Diferenças entre HTML, CSS e JS](https://cursos.alura.com.br/course/logica-programacao-funcoes-listas/task/137213)

#### Aula 1 - Para saber mais: Entendendo o DOM

Quando uma página da web é carregada em um navegador, esse navegador cria uma representação do DOM dessa página. Mas o que é esse DOM, afinal?

O DOM (Document Object Model) é uma representação da estrutura de um documento HTML, onde os elementos são organizados em uma árvore hierárquica e cada nó possui propriedades e métodos. Isso permite que desenvolvedores acessem, modifiquem, removam ou adicionem elementos e conteúdo HTML dinamicamente através de scripts.

É por isso que, em nosso código JavaScript, frequentemente acessamos o valor de um elemento na página por meio do objeto document, referenciando-o pelo identificador ou por outra propriedade. Um exemplo disso é o uso de document.getElementById().

No artigo [O que é o DOM?](https://www.alura.com.br/artigos/o-que-e-o-dom), da Ellen Pimentel, você poderá aprofundar seu conhecimento sobre DOM e a forma de manipulá-lo.

### Aula 1 - Criando a função para sortear - Vídeo 3

Transcrição  
Rodrigo: Já conseguimos dar o primeiro passo na nossa função de sorteio. Recuperamos os elementos da página HTML e fizemos um teste com um alerta para verificar se o valor estava chegando corretamente no código.

Também reforçamos a ideia de recuperar elementos na página. Para isso, precisamos conhecer a página HTML e saber qual é o elemento que queremos recuperar, seja um parágrafo, um botão, ou outro — no nosso caso, foi um input. Para recuperá-lo, precisamos ser capazes de referenciar esse elemento de alguma forma. Utilizamos o id, que geralmente é uma boa opção para recuperar um elemento.

As tags já tinham ids, caso contrário, poderíamos adicionar ids na tag input dos três inputs. Como não precisamos da tag no nosso código JavaScript, mas sim o valor que foi digitado, utilizamos a propriedade .value, que obtém o valor digitado na caixa de texto da página.

Convertendo o texto em número
Tudo funcionou bem, mas antes de continuar nosso código, acreditamos que podemos fazer uma melhoria para ter uma garantia.

Quando recuperamos um elemento com document.getElementById(), e o .value, ele vai recuperar o valor que foi digitado dentro da caixa de texto. No entanto, a caixa de texto do navegador, a tag input, geralmente aceita letras também. Nesse caso, ela não vai aceitar, mas poderiam ter letras ali.

Portanto, esse .value retorna uma string (texto). Mas no nosso algoritmo, sabemos que são números. Então, podemos usar uma função no JavaScript para forçar que essa variável seja do tipo numérico.

Jacqueline: Exatamente. Acessando as linhas em que declaramos as variáveis, vamos utilizar, a função parseInt(), de modo que seus parênteses envolvam o document.getElementById().value.

Temos também a parseFloat, que poderíamos usar para declarar que é um tipo float, mas vamos usar parseInt para indicar que vai chegar um número do tipo inteiro.

```JavaScript
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    alert(`Quantidade: ${quantidade}`);
    alert(`Do número: ${de}`);
    alert(`Até o número: ${ate}`);
}
```

Se posicionarmos o cursor em cima de uma das variáveis antes de adicionar o parseInt(), a IDE exibirá uma caixa de mensagem informando que a variável é do tipo any (qualquer), ou seja, pode vir qualquer coisa. Após o parseInt(), a IDE exibirá o tipo number, sendo, portanto, capaz de entender que virá um número.

Rodrigo: Temos, então, mais uma função, o parseInt(). Ela recebe como parâmetro o texto ou o elemento no qual faremos parse (conversão) para inteiro. Vamos fazer isso para as três variáveis ali, a quantidade, o de e o até.

Com isso, nosso código recupera o elemento e adiciona dentro do parseInt(), garantindo que o retorno será do tipo inteiro e não mais string no código JavaScript.

Implementando o sorteio
Jacqueline: Mas agora queremos ver o sorteio. Colocamos lá do número 2 ao 98, e queremos saber como vamos sortear esse número. Não precisamos reinventar a roda e ficar pensando como fazer esse sorteio, pois certamente temos funções prontas para essa tarefa.

Rodrigo: Esse é o próximo passo do nosso algoritmo. Já temos os valores, agora temos que fazer a parte mais difícil, que é escolher um número aleatório entre o de e o até. Podemos começar a fazer uma nova função para ter essa lógica, mas não precisamos implementá-la do zero, conseguimos pesquisar uma solução pronta.

Jacqueline: Exatamente. Abaixo das chaves da função sortear(), vamos criar uma nova função com o function, e podemos chamá-la de obterNumeroAleatorio, porque é isso que ela fará.

```JavaScript
function sortear(){
    // Codigo omitido
}
function obterNumeroAleatorio() {
}
```

Vamos ter que passar para essa função aquele intervalo entre o valor mínimo e o máximo como parâmetro, para ele nos dar um número dentro daquele intervalo. Para isso, vamos colocar um min e um max entre parênteses.

```JavaScript
function sortear(){
    // Codigo omitido
}
function obterNumeroAleatorio(min, max) {

}
```

Rodrigo: Criamos uma função separada, cujo objetivo é apenas gerar um número aleatório entre o mínimo e o máximo.

Na nossa função principal, a sortear(), podemos criar uma variável e guardar o retorno dessa função nessa variável. Onde temos os três alertas seguidos, vamos apagar os três e criar em seu lugar uma variável numero que vai receber o retorno da nova função. Portanto, vamos adicionar o igual na variável numero e vamos chamar o obterNumeroAleatorio(), passando entre parênteses o que foi capturado no de e no ate.

Na linha de baixo, para conferir, vamos fazer um alert, mostrando esse numero que foi sorteado.

```JavaScript
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let numero = obterNumeroAleatorio(de, ate);
    alert(numero);
}

function obterNumeroAleatorio(min, max) {

}
```

Jacqueline: Construímos a estrutura da função nova e fizemos sua chamada na função principal. Agora vamos construir a parte da inteligência, ou seja, a forma com a qual obtemos esse número aleatório.

Rodrigo: Para isso, vamos pesquisar. Em vez de implementar um algoritmo do zero, no qual temos dois números e uma lógica que gera um número aleatório entre eles, podemos pesquisar na internet, pois esse é um cálculo muito comum.

Vamos pesquisar no Google se tem algum site, blog ou fórum com essa informação, porque, com certeza, pessoas já precisaram fazer isso.

> números aleatórios em javascript

Ao digitar a busca acima, encontramos duas páginas que indicam a função Math.random(). Uma delas é da Alura, a qual referenciaremos abaixo para que você acesse e conheça.

Acesse o artigo da Alura A função Math.random() no JavaScript na criação de números pseudoaleatórios.
No momento, vamos utilizar a página que explica a função Math.random(), do site Developer Mozilla.

Acessando essa página, vemos a indicação da função mencionada, que serve para pegar um número aleatório. A página mostra para nós como poderíamos escrever essa função, com um exemplo na seção "Gerando um número aleatório entre dois valores".

```JavaScript
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

Vamos começar a "brincar" com isso e ver como vai ficar. No código acima, selecionaremos e copiaremos a linha return Math.random() * (max - min) + min.

Voltando ao código, vamos colar entre as chaves de obterNumeroAleatorio(), e ver se vai funcionar.

```JavaScript
function obterNumeroAleatorio(min, max) {
    return Math.random() * (max - min) + min;
}
```

Voltando ao nosso sorteador aberto no navegador, colocaremos que queremos um número entre 2 e 40, 10, por exemplo. Quando clicarmos em "Sortear", ele exibirá a primeira caixa de diálogo da resposta com números quebrados, com várias casas decimais.

6.916911577052566

O número não veio como inteiro, e não é exatamente assim que queremos. Nesse caso, queremos que seja exibido o número 7.

Nesse caso, temos que voltar à página da documentação para analisar. Em seu interior, na seção "Gerando um número aleatório entre dois valores", da qual copiamos o código, encontramos a seção "Gerando um número inteiro aleatório entre dois valores", que tem um Math.floor() para fazer um ajuste e não mostrar o número quebrado.

Ele vai retornar um número maior do que o min, mas nunca igual ao max, ou seja, ele nunca será igual ao número final. Contudo, esse ainda não é o código que queremos.

Desceremos mais a página até encontrar a seção "Gerando um número inteiro aleatório entre dois valores, inclusive". Vamos utilizar essa função porque queremos um valor entre dois números, incluindo o último possível. Se colocarmos de 2 a 10, por exemplo, queremos permitir que ele também retorne o 10.

```JavaScript
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

Vamos copiar a linha return Math.floor(Math.random() * (max - min + 1)) + min no código de exemplo dessa função. Podemos usá-la direto, sem o ceil() e o floor() anteriores.

return Math.floor(Math.random() * (max - min + 1)) + min;
Copiar código
Vamos colar essa linha no lugar da outra, entre as chaves da nossa função de sorteador. O novo código possui um pequeno ajuste em relação ao anterior.

```JavaScript
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

Rodrigo: Essa é a versão otimizada para o nosso cenário. Queremos que ele sorteie um número inteiro, não um número decimal, e que ele leve em consideração o mínimo e o máximo de maneira inclusiva.

Como foi mostrado, o site que acessamos possui uma documentação explicando a função Math.floor(). Perceba que já tem uma função que faz o que queremos, utilizando o Math.random() para escolher um número aleatório.

Portanto, não precisaríamos tentar fazer do zero essa lógica de gerar número aleatório, pois já temos isso pronto no JavaScript. Só precisamos recolher alguns exemplos no tutorial e usar o mais próximo do que precisamos para o nosso projeto.

Jacqueline: Vamos testar para ver se com essa alteração veremos o retorno sem aquele número quebrado. Voltando ao nosso sorteador aberto no navegador, colocaremos o valor 1 em "Quantidade de números", e os valores de 2 a 10 novamente. Quando sortearmos, a janela de diálogo retornará o número 8, um valor inteiro, conforme desejado.

Contudo, se alterarmos o valor de "Quantidade de números" para 5, ele continuará retornando um único valor. Vamos precisar fazer essa chamada ao método obterNumeroAleatorios() dentro de alguma repetição.

Rodrigo: Sim. Vamos sortear uma vez e usar aquela variável quantidade que, até então, não estava sendo usada para nada. Vamos ter que fazer uma repetição, ou seja, um loop (laço) para sortear um número de acordo com a quantidade que a pessoa digitar no campo "Quantidade de números".

Jacqueline: Exatamente. Para isso, podemos apagar as linhas let numero = obterNumeroAleatorio(de, ate) e alert(numero), entre as chaves da função sortear(), para recomeçar a estrutura.

```JavaScript
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
}
```

Vamos sortear com uma estrutura de repetição e depois vamos guardar isso em algum lugar para exibir. Para isso, vamos um array (arranjo). Não vamos ter um número só, mas sim um array onde haverá vários números — quantos a pessoa desejar.

No lugar do código removido, vamos criar uma variável sorteados que vai representar esse array. Vamos fazer um let sorteados e adicionar um sinal de igual. Para declarar o nosso array, vamos abrir e fechar os colchetes.

```JavaScript
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
}
```

Qual é a estrutura de repetição que você nos recomenda, Rodrigo?

Rodrigo: Podemos utilizar um laço for, que vai percorrer do primeiro ao segundo número que a pessoa digitou. Se ela digitou 5, é de 1 a 5, se ela digitou 20, de 1 a 20. O laço for é um exemplo que pode ser usado para fazer a lógica de percorrer determinados elementos e fazer alguma coisa nesse intervalo percorrido.

Jacqueline: Vamos fazer isso aqui. Abaixo de let sorteados = [], vamos pular uma linha e fazer o for(). Entre seus parênteses, vamos colocar um let e a variável de iteração que, por padrão, chamamos de i. Nós a iniciamos com o valor 0, adicionamos um ponto e vírgula e o comando i < quantidade para dizer "enquanto i for menor do que a quantidade que a pessoa digitou.

Por fim, adicionamos outro ponto e vírgula e o comando i++ para incrementar a variável i de 1 em 1.

```JavaScript
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    
    for (let i = 0; i < quantidade; i++) {
    
    }
}
```

Entre as chaves desse for, aí sim, precisamos fazer atribuir obterNumeroAleatorio() a uma variável e colocar o valor dessa variável no array.

Rodrigo: Criamos um laço que vai de zero até a quantidade que a pessoa digitou. A estrutura do laço for tem o formato visto acima. Criamos uma variável i que vai de 0 até quantidade para ser o controlador do laço e evitar que ele execute infinitamente.

É dentro do laço que precisamos chamar o obterNumeroAleatorio(), e o número de vezes que vamos chamar essa função vai depender da quantidade que a pessoa digitou e que vamos usar no controle do for.

Jacqueline: Acima do laço, vamos criar a variável numero com let numero.

```JavaScript
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++) {
    
    }
}
```

Dentro das chaves do laço, por sua vez, vamos colocar o numero, que receberá obterNumeroAleatorio(de, ate). Ou seja, ele vai fazer isso quantas vezes forem necessárias.

Desceremos uma linha, na qual precisamos fazer mais alguma coisa. Uma vez que obtivemos o número, precisamos adicioná-lo ao nosso array. Para isso, vamos adicionar um sorteados.push() para colocar o valor. Então, vamos colocar numero entre parênteses.

```JavaScript
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }
}
```

Teoricamente, se a pessoa escolher cinco números, ele vai rodar cinco vezes, chamando o número aleatório e guardando-o no array. E depois, para conferir, podemos imprimir esse array. Abaixo das chaves do for, vamos pular uma linha e fazer um alert() desse array sorteados.

```JavaScript
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }
    alert(sorteados);
}
```

Vamos para o nosso sorteador aberto no navegador. Vamos pedir para escolher 5 números, de 1 a 20, e clicaremos em "Sortear". O resultado será exibido na caixa de alerta no topo da página.

1, 2, 14, 4, 8.

Os números do resultado estão dentro da faixa, sempre antes de 20. Isso significa que o código funciona corretamente.

Até o momento, cumprimos nossa missão. Recuperamos os valores, fizemos uma função para obter um número aleatório e fizemos um loop para devolver os números aleatórios selecionados no campo "Quantidade de números".

A seguir, vamos melhorar nossa aplicação, exibindo no label os números sorteados e fazendo alguns outros tratamentos para torná-la mais coesa.

Rodrigo: Perfeito. Conseguimos fazer o segundo passo, que era gerar os números aleatórios. Conforme o alert que criamos para exibir o resultado, a nossa aplicação está funcionando bem.

Devemos reforçar que copiar funções de sites de documentações é bem comum no nosso dia a dia. Futuramente, você vai precisar fazer alguma lógica ou algoritmo que outras pessoas já precisaram. Nesses casos, você pode pesquisar na internet por sites e fóruns ou usar ferramentas de inteligência artificial, como o ChatGPT.

Se você conhece o ChatGPT, você pode pedir a ele que gere uma função de sortear números aleatórios. Obviamente, nem sempre a ferramenta acerta, então, é bom sempre testar para ver se o código gerado por ela vai funcionar.

A seguir, continuaremos o nosso projeto.

#### Aula 1 - Para saber mais: A função Math.random()

A função Math.random() em JavaScript é uma função integrada que gera um número pseudoaleatório decimal entre 0 (inclusivo) e 1 (exclusivo). Isso significa que o número gerado estará em um intervalo de [0, 1), onde 0 é incluído, mas 1 não é.

Quando você chama Math.random(), obtém um número aleatório como resultado. Exemplo de código:

> let numeroAleatorio = Math.random();  
console.log(numeroAleatorio); // Isso imprimirá um número aleatório entre 0 (inclusivo) e 1 (exclusivo)

Esse recurso é frequentemente utilizado em diversas aplicações para gerar números aleatórios que podem ser usados em jogos, simulações, sorteios, geração de senhas aleatórias, entre outras funcionalidades onde a aleatoriedade é necessária.

Para criar números aleatórios em um intervalo diferente de [0, 1), você pode manipular o resultado de Math.random() multiplicando-o e adicionando valores conforme necessário, exatamente como fizemos em vídeo no nosso projeto Sorteador de números.

Para saber mais sobre essa função, não deixe de ler o [artigo A função Math.random() no JavaScript](https://www.alura.com.br/artigos/funcao-math-random-javascript-numeros-pseudoaleatorios) na criação de números pseudoaleatórios, que contém exemplos de utilização e manipulação do valor.

### Aula 1 - Exibindo os números sorteados - Vídeo 4

Transcrição  
Rodrigo: Conseguimos completar mais uma etapa. Agora nosso algoritmo é capaz de gerar números aleatórios. Adicionamos um alerta para exibir na tela e verificamos que tudo funcionou corretamente. Até pesquisamos uma função para gerar números aleatórios e a implementamos no site. Inclusive, poderíamos ter usado inteligência artificial nessa parte.

Nosso próximo passo é não exibir os números na página, ao invés de um alerta. Embaixo dos botões, há um texto onde pretendemos exibir esses valores.

Exibindo os valores em forma de texto
Jacqueline: Exatamente. Portanto, precisaremos conferir novamente o HTML para descobrirmos o elemento que precisamos buscar. No site, temos o texto "números sorteados", que é precisamente onde queremos colocar esses cinco números que estão aparecendo em forma de alerta.

Vamos novamente ao index.html, onde verificaremos onde está este texto. Ele está na linha 43, dentro da `<label class="texto__paragrafo">`: "Números sorteados: nenhum até agora". Portanto, temos o elemento com o id resultado, e nele temos uma label com esse texto. Teremos que recuperar esse o resultado e colocar exatamente a tag da label nesse elemento. Inclusive, copiaremos a linha da label, para adicioná-la, e voltaremos para o arquivo app.js.

> `<label class="texto__paragrafo">`Números sorteados: nenhum até agora`</label>`

O primeiro passo é declarar o resultado para conseguirmos obter esse elemento. Então, no final da function sortear(), abaixo do for() criaremos a variável resultado codando: let resultado = document.getElementById('resultado').

Rodrigo: Nessa situação, queremos fazer o contrário da anterior. Anteriormente estávamos recuperando os elementos e recuperando o que a pessoa digitou na tela. Agora, não queremos ler uma informação da tela, queremos colocar uma informação na tela.

Temos a nossa variável resultado, no código JavaScript, e precisamos passar essa informação para página, concatenar dentro da página. Então, é o caminho inverso. Sendo assim, não vamos usar o .value, porque esse elemento que recuperamos não é uma tag input. Usamos o document.getElementById(), porque queremos o elemento HTML. Aquela tag era uma div, e nela vamos passar a tag label.

Jacqueline: Então, obtemos o elemento resultado do HTML e passamos para a variável resultado no JavaScript. Para colocar esse elemento na página HTML, na linha abaixo escrevemos resultado.innerHTML. Com o .innerHTML, conseguimos passar o elemento na página, que será justamente a linha que copiamos.

Porém, ao invés do texto "Números sorteados: nenhum até agora", mudaremos para Números sorteados: ${sorteados}, passando a array dos números sorteados. Contudo, como estamos concatenando com outra variável, precisamos deixar toda a tag <label> </label> entre crases.

Arquivo app.js

```Javascript
function sortear(){
    //código omitido

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
} 

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

Teoricamente, esse código é o suficiente para exibirmos na tela. Já tiramos o alert(). Então, vamos testar lá se vai funcionar. Abrindo a página do sorteador, preencheremos os campos, indicando que queremos 5 números entre 1 e 10. Ao clicarmos no botão "Sortear", o resultado aparece na tela: "Números sorteados: 3, 5, 8, 3, 2". Deu certo.

Quantidade de números: 5

Do número: 1

Até o número: 10

Números sorteados: 3, 5, 8, 3, 2

Conhecendo o .textContent  
Rodrigo: Percebemos que para lermos um elemento da página, chamamos o .value, se for um campo de texto. Para colocarmos uma informação na página, temos o .innerHTML. Isso é algo que vamos fazer bastante nos desafios das próximas aulas, então você precisará fazer essa lógica.

Tem uma outra propriedade também, que é o .textContent, que é quando queremos colocar um texto dentro de um elemento na página. Seria equivalente ao que fizemos, ou seja, podemos usar o .textContent ou o .innerHTML.

Geralmente, usamos o .textContent quando temos um texto simples: uma frase, uma palavra, uma string, um número. No caso que fizemos, não temos um texto simples, e sim uma tag HTML inteira. Então, tem a tag, label, ID e outras coisas, então usamos o .innerHTML, porque queremos colocar um trecho de código HTML internamente nesse elemento.

Dica: Para exibir textos simples na tela, podemos usar o .textContent, porém, quando precisamos manipular o conteúdo HTML de um elemento interno, usamos o .innerHTML.

Corrigindo o sorteio de números repetidos
Rodrigo: Deu certo, mas temos um problema nos números que foram sorteados.

Jacqueline: Reparei também, Rodrigo. Quando diminuí o range de 1 para 10, ele gerou números repetidos: ele sorteou o 3 duas vezes e não queremos sorteio repetido. Imagina, duas pessoas ganhando o mesmo presente? Isso é problema de família, não dá. Então, precisamos encontrar uma maneira de proteger quando o número tiver sido sorteado, para ele não ser sorteado novamente. Então, vamos fazer um ajuste no nosso método.

Acessando novamente o arquivo app.js, dentro da função sortear(), temos o for(). Nesse for(), temos a variável numero, que recebe o obterNumeroAleatorio().

```Javascript
for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);
    sorteados.push(numero);
}
```

Antes de efetivamente passar os números aleatórios para a array, podemos consultar se o número já existe na array. Se já estiver, mandamos chamar outro número aleatório, até que ele consiga gerar um número que ainda não está lá.

Rodrigo: Nessa função, obterNumeroAleatorio(), que até copiamos daquele site, passamos o de e o ate para ele gerar, porém, ele não sabe se aquele número já foi gerado antes. A única coisa que ele faz é gerar os números. Se há números repetidos que não queremos, precisamos reescrever o código para fazer esse controle.

Precisamos fazer um outro loop, porque já temos um loop for() que está fazendo essa lógica de 0 até a quantidade que a pessoa digitou. Nesse outro loop, enquanto o número que pedimos para ele gerar já tiver sido sorteado, ele precisa sortear outro, até gerar um número que não foi sorteado no momento. É isso que faremos.

Jacqueline: Exatamente. Como conhecemos vários métodos de repetição, podemos usar o while(), que é justamente essa palavra-chave enquanto. Enquanto o número sorteado já estiver na array, temos que sortear outro.

```Javascript
for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        
        while (sorteados.includes(numero))
        
        sorteados.push(numero);
}
```

Então, no while(), para verificarmos se o número já está na array, usamos o sorteados.includes(), passando o numero entre os parênteses.

Rodrigo: Então, sorteados é a nossa variável array, e todo array no JavaScript tem essa função chamada includes(), que devolve um booleano: true (verdadeiro) ou false (falso). O que esse while() está dizendo é: "enquanto a variável sorteados tem incluído esse numero". Enquanto for true, vamos entrar no nosso loop e pedir para ele fazer um novo sorteio. Porque, se isso der verdadeiro, é porque aquele número que sorteado já está dentro do nosso array, o que não queremos.

Jacqueline: Então vamos fazer outro sorteio. Para isso, dentro do while(), chamamos novamente o numero recebendo o obterNumeroAleatorio(de, ate);. E ele ficará fazendo esse loop até que todos os números sejam exclusivos.

```Javascript
for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        
        sorteados.push(numero);
}
```

Vamos testar para ver se agora ele não vai mais repetir? Voltamos ao sorteador e pedimos, mais uma vez, 5 números de 1 a 10. Ao clicarmos no botão "Sortear", temos: 8, 9, 3, 10, 2. Se clicarmos em "Sortear" novamente, aparece: 7, 1, 8, 9, 3. Fazendo isso mais algumas vezes, notamos que já parou de repetir números, ou seja, conseguimos corretamente proteger para não termos número repetido, fazendo esse loop dentro do for().

Parece uma coisa complexa, por termos um loop dentro de outro, mas não, faz todo sentido. Exatamente o que você falou: não podemos ficar alimentando um array enquanto esse já existir aquele número ali dentro.

Conclusão  
Rodrigo: E perceba, então, que o array, que é um objeto do JavaScript, nos ajuda. Ele tem várias funções, e usamos duas delas: o includes e o push. Com o includes(), passamos um elemento e ele indica se aquele elemento já existe dentro do array, devolvendo um booleano: true ou false. E o push "empurra", ou seja, coloca o elemento dentro do array.

Há outros métodos também no array, que você pode pesquisar na documentação, para quando tiver alguma situação em que deseja fazer algo com um array. Por exemplo, colocar ou remover um elemento, verificar se um elemento já existe ou descobrir quantos elementos tem no array. Para todas essas situações, tem funções no array que podemos utilizar.

Então, conseguimos concluir mais uma etapa. Nosso sorteador está sorteando os números e está exibindo na tela, evitando repetição. A princípio, terminamos o nosso projeto, mas está faltando o botão "Reiniciar", que no momento não faz nada.

Jacqueline: Pois é. Ele está com uma propriedade que nem nos permite clicar em "Reiniciar". É algo que deveríamos poder fazer, já que tivemos um sorteio. Após acabar o sorteio e exibir o resultado, deveríamos poder reiniciar esse sorteio.

Rodrigo: Então, no próximo vídeo, vamos implementar o último botão, e a última lógica, para fechar o nosso projeto de sorteador de número secreto.

### Aula 1 - Botão de reiniciar - Vídeo 5

Transcrição  
Rodrigo: O sorteador já está funcionando e gerando números, mas ainda precisamos implementar a última lógica do botão de reiniciar.

Basicamente, essa lógica vai limpar os três inputs, substituindo o texto existente por um texto vazio, e retornar os números sorteados que ficam abaixo dos botões para o texto original, "nenhum até agora".

Esse botão serve para resetar tudo para que o site volte ao estado original, como quando uma pessoa acessa pela primeira vez.

Lógica do botão de reiniciar
Jacqueline: Atualmente, o botão "Reiniciar" está cinza e não permite clique - ao contrário do botão "Sortear" que está azul e com ponteiro de mão que indica o clique.

Para entender a diferença entre ambos, vamos conferir os botões no arquivo index.html:

index.html:

```HTML
<div class="chute container__botoes">
        <button onclick="sortear()" id="btn-sortear" class="container__botao">Sortear</button>
        <button onclick="reiniciar()" id="btn-reiniciar" class="container__botao-desabilitado" >Reiniciar</button>
</div>
```

Cada um tem seu id, que é único, mas também possuem classes diferentes. Um chama a classe container__botao e o outro tem a classe container__botao-desabilitado. Isso indica que algo diferente está acontecendo, pois se tivesse apenas container__botao, provavelmente eles estariam com a mesma configuração.

Mas, onde conseguimos entender o que é container__botao e container__botao-desabilitado?

Rodrigo: A propriedade class, que as tags HTML possuem, referencia trechos de código do CSS, que cuida da parte visual. Essas duas classes são nomes que colocamos para referenciar dois elementos que estão no arquivo CSS do projeto.

Jacqueline: No arquivo CSS do nosso projeto, após container__botoes, podemos encontrar container__botao e container__botao-desabilitado:

style.css:

```CSS
.container__botao {
    border-radius: 16px;
    background: #1875E8;
    padding: 16px 24px;
    font-size: 24px;
    width: 100%;
    font-weight: 700;
    border: none;
    cursor: pointer;
}
.container__botao-desabilitado {
    border-radius: 16px;
    background: #6f6f70;
    padding: 16px 24px;
    font-size: 24px;
    width: 100%;
    font-weight: 700;
    border: none;
    cursor: not-allowed;
}
```

São duas classes com suas propriedades. O container__botao define um tamanho, um fundo azul, o tipo de cursor, que é um ponteiro, enquanto o container__botao-desabilitado define que ele tem um fundo cinza e que o cursor é aquele que não permite clicar.

Antes de limpar os campos, precisamos alterar esse status do botão, deixá-lo como o botão que não está desabilitado, para que a pessoa possa clicar nele.

Mudando a classe do botão
Rodrigo: Essas duas classes referem-se a elementos visuais, por isso estão no código CSS. Mas não vamos mexer no CSS, pois ele já está configurado. O que vamos fazer é trocar a classe CSS no JavaScript.

É possível manipular a classe de um elemento no JavaScript, removendo ou adicionando classes.

E, ao fazer essa troca das classes, o próprio navegador já entende que vai ter que trocar o visual, porque trocou a classe - e no arquivo CSS, essa outra classe tem esse outro comportamento.

Isso deve ser feito na função de sortear(). Após fazer o sorteio e colocar o elemento na página, precisamos trocar a classe CSS do botão de reiniciar para ele ficar com a mesma classe que tem no botão de sortear.

Jacqueline: Portanto, depois de exibir o resultado, no resultado.innerHTML, vamos chamar alguém para trocar a classe do botão. Pode ser um método, por exemplo, alterarStatusBotao().

Rodrigo: Vamos deixá-lo separado em uma função, para não deixar o código da função sortear() muito extenso.

app.js:

```JavaScript
function sortear() {
        // código omitido…

        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
        alterarStatusBotao();
}
```

Jacqueline: Então, ele vai exibir o resultado dos números sorteados e também alterar o status do botão para que a pessoa possa clicar e reiniciar, limpando os campos.

Agora que declaramos alterarStatusBotao(), precisamos criar essa função. No final do nosso código, vamos criar uma nova função chamada alterarStatusBotao().

Essa função não precisa de parâmetros, pois simplesmente vamos verificar o status e trocar.

Para alterar o status do botão, precisamos primeiramente pegar o elemento. Qual o elemento que queremos trocar ou verificar? No HTML, vamos conferir qual é o id desse botão. Nesse caso, é btn-reiniciar.

Devemos fazer um getElementById para recuperar esse botão, e verificar qual a classe que ele tem, se ele está com a classe container__botao-desabilitado ou container__botao.

Basta fazer um let botao igual à document.getElementById() para pegar o btn-reiniciar.

```JavaScript
function alterarStatusBotao() {
        let botao = document.getElementById('btn-reiniciar');
}
```

Rodrigo: Até agora, criamos uma nova função e recuperamos o elemento. Porém, o elemento que queremos agora não é mais o input, nem o texto. É o botão reiniciar.

Jacqueline: Em seguida, precisamos fazer uma verificação. Se ele estiver desabilitado, precisamos deixá-lo habilitado. Isso indica que vamos ter que usar um condicional, ou seja, um if/else. Se algo estiver acontecendo, faz isso aqui. Se não, vamos ter outra tratativa para esse botão.

Como verificamos se o botao está com essa classe container__botao-desabilitado ou container__botao?

Rodrigo: Um elemento HTML pode ter múltiplas classes - diferentemente do ID, que só pode ter um. Isto é, pode ter zero, uma ou cinquenta classes.

Então, quando recuperamos o elemento com JavaScript e o guardamos numa variável, podemos acessar uma propriedade chamada classList dessa variável. O nome é bem intuitivo. Ele fornece a lista de classes desse elemento.

E, a partir da classList, podemos chamar uma função para verificar se ela contém uma determinada classe.

Jacqueline: Dentro dos parênteses do if, vamos colocar botao.classList.contains(). Se ele contiver aquela característica do botão desabilitado, precisamos fazer algo. Vamos copiar o nome dessa classe, container__botao-desabilitado e colar dentro do contains(), entre aspas simples.

Se botao.classList contém o desabilitado, o que precisamos fazer? Remover essa classe e incluir aquela outra, que é a do botão comum.

Para isso, no corpo do if, vamos chamar botao.classList novamente. No classList, podemos usar a função remove() para remover uma classe.

Assim, informamos que se tiver a classe container__botao-desabilitado, devemos removê-la. Por isso, vamos copiar novamente o nome da classe container__botao-desabilitado para colocá-la dentro do remove().

Após remover, devemos adicionar a classe do botão comum, pois senão informar um estilo, fica um botão padrão sem estilização. Em outras palavras, precisamos adicionar a classe container__botao para ele ficar igual ao botão do sortear.

Na próxima linha, vamos escrever botao.classList.add(), passando o container__botao para ser adicionado.

```JavaScript
function alterarStatusBotao() {
        let botao = document.getElementById('btn-reiniciar');
        if (botao.classList.contains('container__botao-desabilitado')) {
                botao.classList.remove('container__botao-desabilitado');
                botao.classList.add('container__botao');
        } else {
        }
}
```

Se tem botão desabilitado, tira o desabilitado e coloca o comum. E no else é justamente o oposto. Se não tem o desabilitado, significa que tem o habilitado.

Então, devemos fazer um remove() no container__botao e o add() no container__botao-desabilitado. Será o processo inverso.

```JavaScript
function alterarStatusBotao() {
        let botao = document.getElementById('btn-reiniciar');
        if (botao.classList.contains('container__botao-desabilitado')) {
                botao.classList.remove('container__botao-desabilitado');
                botao.classList.add('container__botao');
        } else {
                botao.classList.remove('container__botao');
                botao.classList.add('container__botao-desabilitado');
        }
}
```

Vamos testar se a programação vai funcionar? Vamos acessar o sorteador no navegador.

Vamos definir a quantidade de números como 5, indo de 1 a 20 . Após clicar em "Sortear", ele nos dá a resposta e libera o botão "Reiniciar" para ser clicado.

Porém, não acontece nada ao clicar no "Reiniciar", pois ainda não programamos seu comportamento. É preciso programar o que o reiniciar vai fazer. Mas a parte de alterar status, já foi bem-sucedida.

Adicionando comportamento no botão de reiniciar
Rodrigo: Então, fizemos esse algoritmo, que é chamado, na verdade, no botão de sortear. Depois que faz o sorteio, chama essa função que troca o status e libera o botão de reiniciar.

Agora, vamos precisar de uma nova função, que é a função que está sendo chamada pelo botão de reiniciar.

Jacqueline: O botão reiniciar, cujo id é btn-reiniciar, chama uma função chamada reiniciar(). Também devemos programá-la no JavaScript.

No final do código, vou criar uma nova function chamada reiniciar(). E qual é o objetivo dela? Limpar todos os campos. Basta pegar o value de todos os campos e colocar esse valor como vazio.

Portanto, podemos copiar todas as referências que fizemos aos campos de quantidade, de e ate. Por exemplo, vamos copiar o document.getElementById('ate').value, colá-lo três vezes dentro das chaves da nova função e substituir o nome do campo.

Esses três campos devem receber vazio, isto é, sinal de igual e aspas simples vazias.

```JavaScript
function reiniciar() {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
}
```

Rodrigo: Para limpar o valor que foi digitado dentro de um input no HTML, é só atribuir uma string vazia ao value dele.

Ele tinha um valor que tinha sido digitado pela pessoa. Quando cair nessa função, ele vai pegar o valor e substituir por uma string vazia. Desse modo, a página vai ficar limpa.

Jacqueline: Além disso, também precisamos redefinir o resultado. Para isso, faremos documento.getElementById('resultado'), passando innerHTML em vez de value.

Ele vai receber aquele texto original que tinha no HTML, que é o "Números sorteados: nenhum até agora". Devemos copiar esse trecho da tag `<label>` do texto__paragrago e colá-lo após o sinal de igual.

Por fim, precisamos chamar nosso método para alterar o status do botão. Uma vez que reiniciamos, o botão vai ficar inativo de novo, porque já vai estar tudo limpo.

Dentro do reiniciar(), também vamos chamar o alteraStatusBotao().

```JavaScript
function reiniciar() {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
        alterarStatusBotao();
}
```

Rodrigo: Até por isso que foi interessante colocar numa função essa lógica de alterar o status. Senão, teríamos que duplicar aquele código, tanto na função de sortear, quanto na de reiniciar.

Jacqueline: Exatamente. Vamos agora fazer o sorteio. Novamente, queremos sortear 5 números, de 1 a 20. Após clicar em "Sortear", o botão de reiniciar ficou ativo.

Ao reiniciar, os três campos ficaram limpos, o label ficou como "nenhum até agora" e o botão de reiniciar tornou a ficar inativo, porque não faz sentido reiniciar se ele está todo limpo.

Rodrigo: Conseguimos finalizar o nosso projeto e implementar todas as funcionalidades!

Próximos passos  
Rodrigo: O objetivo dessa aula extra que gravamos posteriormente é reforçar conhecimentos de algoritmo, lógica, recuperação de elementos na página, adição de novas informações na página e a lógica de reiniciar a partir do projeto do sorteio de números.

Após concluir os dois cursos da formação e mais essa aula extra, as pessoas vão ter uma base mais sólida. E a partir da aula 2, será mais fácil implementar individualmente os desafios que vamos propor.

Nessa aula, fizemos a resolução juntos, mas, nas próximas, vamos apresentar um desafio e a ideia é que você tente fazê-lo sozinho(a), usando esses conhecimentos. Se tiver alguma dificuldade, você pode voltar para essa aula para reforçar os conhecimentos dos cursos anteriores.

Jacqueline: Agora vamos partir para os desafios!

#### Aula 1 - Faça como eu fiz: alterando o status do botão

Agora é com você! Faça o mesmo procedimento que foi demonstrado no vídeo anterior, escrevendo o código para alterar o status do botão Reiniciar.

Já implementou o código necessário para alterar o status do botão “Reiniciar”? Se tiver alguma dúvida, basta clicar em Opinião do instrutor.

Ver opinião do instrutor
Opinião do instrutor

Primeiramente, você precisará criar uma função com o nome alterarStatusBotao, que será chamada ao final da função sortear():

```JavaScript
function alterarStatusBotao() {

}
```

Agora, dentro do bloco, será necessário declarar uma variável que irá corresponder ao botão “reiniciar”.

> let botao = document.getElementById('btn-reiniciar');

Feito isso, precisaremos criar um bloco if/else, que irá verificar qual a classe que está presente no elemento. Se estiver desabilitado, precisaremos remover e incluir a classe comum do botão. Caso contrário, removeremos a classe de botão comum e incluiremos a de desabilitado:

Dentro do bloco if, teremos o seguinte código:

```JavaScript
 if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  } 
```

Por fim, dentro do bloco else, você precisa desfazer o que foi feito no bloco if:

```JavaScript
else {
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }   
```

Pronto! Abra a página do projeto no navegador e verifique se tudo está funcionando conforme o esperado.

Confira o código final do desafio:

```JavaScript
function alteraStatusBotao() {
  let botao = document.getElementById('btn-reiniciar');
  if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  } else {
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }   
}
```

#### Aula 1 - Programando a função reiniciar()

Suponha que você esteja trabalhando em um sistema de vendas, no qual o usuário informa o total de itens e o valor unitário. Com base em algumas regras, o sistema aplica um desconto de 5% sobre o valor total.

As regras são as seguintes:

Inclusão de 10 ou mais itens; e
Valor unitário igual ou superior a R$ 100,00.
O valor deverá ser exibido num alert e depois a função reiniciar() deverá ser chamada.

Os seguintes códigos foram escritos para implementar essa funcionalidade e a funcionalidade de reiniciar os valores:

```Javascript
function calcular() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let valor = parseFloat(document.getElementById('valor').value);
  let total = quantidade * valor;
  if (quantidade >= 10 || valor >= 100) {
    total = total - (total / 100 * 5);
  }
  alert(`Valor total: ${total} `);
}
function reiniciar() {
  quantidade.value = '';
  valor.value = '';
}
```

Entretanto, os campos não estão sendo limpos após o cálculo do valor total.

Escolha TODAS as alternativas que indicam os problemas de lógica do código anterior:

Alternativa correta  
Necessário ajustar a função reiniciar(), pois as variáveis quantidade e valor foram declaradas dentro da função calcular().

Como a função reiniciar() é uma função distinta, só poderíamos aproveitar a variável caso ela tivesse sido declarada globalmente, sem o uso do parseInt e parseFloat. Sendo assim, é necessário modificar a função reiniciar() para o seguinte código:

```Javascript
function reiniciar() {
  document.getElementById('quantidade').value = '';
  document.getElementById('valor').value = '';
}
```

Uma outra alternativa seria declarar as variáveis globalmente, onde o código completo ficaria da seguinte forma:

```Javascript
let quantidade = document.getElementById('quantidade');
let valor = document.getElementById('valor');

function calcular() {
  let total = parseInt(quantidade.value) * parseFloat(valor.value);
  if (quantidade.value >= 10 || valor.value >= 100) {
    total = total - (total / 100 * 5);
  }
  alert(`Valor total: ${total} `);
  reiniciar();
}
function reiniciar() {
  quantidade.value = '';
  valor.value = '';
}
```

Alternativa correta
A função reiniciar() não está sendo chamada após a exibição do alert.

Para que o campos campos sejam limpos imediatamente após a exibição do valor total, é necessário chamar a função reiniciar:

> alert(`Valor total: ${total} `);  
reiniciar();

#### Aula 1 - Mão na massa: proteção na entrada de valores

Ao efetuar mais testes em nossa aplicação Sorteador de Números, você observará que está sendo permitido colocar um valor no campo “Do número” maior que o valor informado no campo “Até o número”, o que não é recomendável. O ideal é emitir um alerta para que o usuário reveja se inseriu os dados corretamente.

Agora é a sua vez de colocar a mão na massa! Implemente uma proteção dentro da função sortear para que esse alerta seja exibido.

Se tiver alguma dúvida, basta clicar em Opinião do instrutor.

Opinião do instrutor

Para realizar essa verificação, podemos incluir o código imediatamente após recuperar os valores dos campos, nessa posição demonstrada abaixo, por exemplo:

```JavaScript
function sortear(){
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);
  //insira sua proteção AQUI
  //código omitido 
}
```

Para fazer a verificação, vamos precisar fazer um condicional, que deverá exibir um alerta e parar a aplicação caso o número informado no campo “Do número” seja superior ou igual ao campo “Até o número”. Para isso, podemos escrever o seguinte código e incluir a partir da linha citada acima:

```JavaScript
  if (de >= ate) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;
  }
```

Veja que utilizamos dentro do bloco if o comando return. Esse comando, usado dentro desse bloco e sem de fato retornar nada, serve para que a função sortear() seja interrompida nesse ponto, sem seguir para as linhas de baixo. Isso é muito útil quando você não quer que o código adicional seja executado dada alguma circunstância específica. Nesse caso, por exemplo, se o usuário informou erroneamente os valores, não faz sentido continuar com o sorteio.

#### Aula 1 - Mão na massa: proteção no total de números sorteados

Fizemos uma proteção em nosso loop for para que nunca sejam sorteados números repetidos dentro de um intervalo. Porém, o que acontece se o usuário escolher uma quantidade de números para sortear superior aos números de um determinado intervalo? Por exemplo, caso escolha para sortear 5 números de 10 a 13, conforme a imagem abaixo:

alt text: Tela do projeto “Sorteador de Números”, exibindo na lateral esquerda as seguintes opções: “Quantidade de números”, com o input do número 5 no campo de texto; “Do número”, com o input do número 10 no campo de texto; e “Até o número”, com o input do número 13 no campo de texto. A tela também apresenta botões com a funcionalidade “Sortear” e “Reiniciar”, e logo abaixo, no canto inferior esquerdo, exibe o retorno das informações a serem obtidas no sorteio, onde se lê a mensagem “Números sorteados: nenhum até agora”. A composição de cores do layout segue uma identidade visual em diversos tons de azul, trazendo como ilustração de destaque o desenho de uma jovem negra, de cabelos cacheados, em vestimenta de astronauta, iluminada em tons de roxo.

Isso vai gerar um loop infinito, pois a execução ficará presa o tempo inteiro na repetição while e o sorteio não será realizado. Para conferir essa informação, feche a página do navegador. Faça essa alteração no código, incluindo um alert dentro do bloco while; logo em seguida, abra novamente a página com o Live Server e veja os alerts acontecendo ao repetir o teste com os mesmos valores descritos na imagem acima:

```JavaScript
for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
      alert('Tentando obter número inédito');
    }
    sorteados.push(numero);
  }
```

Veja que você vai ter uma sequência de alerts que não vão parar de ser exibidos, caracterizando ali o loop infinito. Feche novamente o navegador para interromper a execução.

Como podemos proteger essa situação? Podemos verificar se a quantidade de números escolhidos no campo “Quantidade de números” é igual ou inferior ao intervalo de números entre os campos “Do número” e “Até o número”. Isso irá prevenir que esse erro aconteça.

Agora, então, é a sua vez de colocar a mão na massa! Vamos implementar essa proteção?

Se tiver alguma dúvida, basta clicar em Opinião do instrutor.

Opinião do instrutor

Para realizar essa proteção, podemos inserir o nosso código exatamente embaixo da proteção incluída na atividade anterior, pois precisamos já ter recuperado os valores informados nos três campos do HTML. Observe:

```JavaScript
function sortear(){
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);
  if (de >= ate) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;
  }
  //insira seu código AQUI
  //código omitido
```

Aqui vamos incluir um novo condicional para verificar a situação que desejamos evitar. Se positivo, iremos também interromper a função sortear(). Uma sugestão de implementação é a seguinte:

```JavaScript
if (quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
  }
```

Aqui, em nosso exemplo, para escolhermos 5 números exclusivos, precisaríamos escolher o intervalo de 10 a 14, pois as possibilidades de sorteio seriam 10, 11, 12, 13 e 14. É por esse motivo que fazemos a verificação se a quantidade é maior que o cálculo (até - de + 1), pois se fosse igual ou inferior não apresentaria o erro de loop infinito.

### Aula 1 - O que aprendemos?

Nessa aula, você aprendeu como:

- Analisar o código de uma página HTML para entender sua estrutura e planejar o código de sua funcionalidade;

- Declarar variáveis no JavaScript para armazenar elementos recuperados da página;

- Recuperar elementos da página com JavaScript, com o uso da função document.getElementById();

- Recuperar valores digitados em campos de um formulário na página, via propriedade value;

- Utilizar o recurso de Template String, do JavaScript, para concatenar valores de variáveis em String.

- Utilizar a função parseInt, no JavaScript, para converter um valor do tipo String para um número inteiro;

- Fazer uma estrutura de repetição utilizando for para gerar números aleatórios no sorteador;

- Declarar uma variável do tipo array para representar uma lista;

- Adicionar um elemento a um array com a função push;

- Utilizar um código já desenvolvido por terceiros para realizar o sorteio de um número aleatório dentro de um intervalo.

- Declarar um bloco condicional if/else para implementar a funcionalidade de alterar o status do botão Reiniciar.

- Acessar a lista de classes que um elemento da página possui, via propriedade classList;

- Verificar se um elemento da página possui uma determinada classe CSS, via função classList.contains();

- Remover uma classe CSS de um elemento da página, via função classList.remove();

- Adicionar uma classe CSS a um elemento da página, via função classList.add();

- Modificar o código HTML de um elemento na página, via propriedade innerHTML.

## Aula 2 - Projeto AluGames

### Aula 2 -  - Vídeo 1
### Aula 2 -  - Vídeo 2
### Aula 2 -  - Vídeo 3
### Aula 2 -  - Vídeo 4
### Aula 2 -  - Vídeo 5
### Aula 2 -  - Vídeo 6
### Aula 2 -  - Vídeo 7
