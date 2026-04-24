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
