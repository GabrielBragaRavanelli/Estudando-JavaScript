
// a partiir do momento que colocamos [] estamos criando um array, ou seja, uma lista de itens. No caso, estamos criando um array chamado frutas que contém os seguintes itens: "banana", "maçã", "laranja" e "uva". Cada item do array é separado por vírgula e está entre aspas, indicando que são strings. O array frutas pode ser usado para armazenar e manipular esses itens em nosso código.
const frutas = ["banana", "maçã", "laranja", "uva"]


console.log(frutas)

console.log("primeira fruta:", frutas[0])
console.log("todas as frutas:", frutas.length)
//.length é uma propriedade do array que retorna o número de itens presentes no array. No caso, frutas.length retorna o número de frutas presentes no array frutas, que é 4. Portanto, a mensagem "todas as frutas: 4" será exibida no console.
frutas.push("melancia")
//.push é um método do array que permite adicionar um novo item ao final do array. No caso, frutas.push("melancia") adiciona a string "melancia" ao final do array frutas. Depois de executar essa linha de código, o array frutas passará a conter os seguintes itens: "banana", "maçã", "laranja", "uva" e "melancia". O método push é útil para adicionar novos itens a um array sem precisar criar um novo array ou modificar o array original diretamente.
console.log("frutas depois de adicionar melancia:", frutas)
console.log("ultima frutas:", frutas[frutas.length - 1])
//vale lembrar, que começa do 0
// eu seleciono tudo com frutas.length e o -1 serve para pegar o ultimo item do array, ou seja, a melancia. Se eu colocasse frutas.length sem o -1, eu estaria tentando acessar um índice que não existe no array, o que resultaria em undefined. Portanto, para acessar o último item do array frutas, devemos usar frutas[frutas.length - 1].

frutas.splice(2,1)
//remove uma fruta do array, no caso a laranja, porque o primeiro número (2) indica o índice do item que queremos remover (lembrando que os índices começam em 0), e o segundo número (1) indica quantos itens queremos remover a partir desse índice. Portanto, frutas.splice(2,1) remove a laranja do array frutas. Depois de executar essa linha de código, o array frutas passará a conter os seguintes itens: "banana", "maçã", "uva" e "melancia". O método splice é útil para remover itens de um array sem precisar criar um novo array ou modificar o array original diretamente.
console.log("depois de remover", frutas)

for(let i = 0; i <frutas.length;i++){
    console.log("indice:", i)
    console.log(frutas[i])
}

frutas.forEach((valor, indice) =>{
    console.log("indice:", indice, valor)
})

for(const fruta of frutas){
    console.log("fruta da vez:",fruta)
}

const numeros = [1,2,3,4,5,6,7,8,9,10]
const numerosPares = numeros.filter((numero) =>{
    return numero % 2 === 0
})

console.log(numerosPares)
console.log(numeros)

const numerosDobrados = numeros.map((numero) =>{
    return numero * 2
})

console.log(numerosDobrados)
