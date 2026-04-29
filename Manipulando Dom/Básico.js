// Para manipuar o DOM, precisamos primeiro selecionar os elementos que queremos modificar. Para isso, podemos usar métodos como `document.getElementById`, `document.querySelector`, ou `document.querySelectorAll`.

//Utilizar  const (nome da const) = document.querySelector("") - para selecionar o elemento desejado.

// Exemplo: Selecionar um elemento pelo ID
const meuElemento = document.getElementById("meu-id");

//Caso que queira um evento de click
//Coloco o nome da conts - ex: curtobt.addEventlisterner("click",() =>{Aqui fica a função que quero executar quando clicar no botão})
const curtobt = document.getElementById("curtobtn");
curtobt.addEventListener("click", () => {
    // Função que quero executar quando clicar no botão
});

// O setinterval é uma função que executa uma função a cada intervalo de tempo especificado. Por exemplo, se quisermos atualizar o conteúdo de um elemento a cada segundo, podemos usar o setInterval da seguinte maneira:
setInterval(() => {
    // Código para atualizar o conteúdo do elemento
}, 1000);

//clearInterval é usado para parar a execução de uma função que foi iniciada com setInterval. Por exemplo, se quisermos parar a atualização do conteúdo do elemento após 10 segundos, podemos usar clearInterval da seguinte maneira:
const intervalo = setInterval(() => {
    // Código para atualizar o conteúdo do elemento
}, 1000);

//new date() - para pegar a data atual
const dataAtual = new Date();
console.log(dataAtual);

// Para modificar o texto de um elemento, podemos usar a propriedade `textContent` ou `innerText`. Por exemplo:
meuElemento.textContent = "Novo texto para o elemento";

// O innerHTML é usado para modificar o conteúdo HTML de um elemento. Por exemplo:
meuElemento.innerHTML = "<strong>Texto em negrito</strong>";

// O setattribute é usado para definir um atributo em um elemento. Por exemplo, para definir o atributo "src" de uma imagem:
const minhaImagem = document.getElementById("minha-imagem");
minhaImagem.setAttribute("src", "caminho/para/nova-imagem.jpg");

//musica.loop = true - para deixar a musica em loop
const musica = document.getElementById("minha-musica");
musica.loop = true;

