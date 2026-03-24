const pessoa = {
    nome: "Ana",
    idade: 30,
    temCNH: true
}

pessoa.sobrenome = "Paula"

console.log(pessoa.nome) // Acessando a propriedade nome do objeto pessoa
console.log(pessoa.sobrenome) // Acessando a propriedade sobrenome do objeto pessoa

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    paginas: 1178
}

livro.publicadoEm = true
livro.idiomas = ["ingles", "português", "espanhol"]
livro.idiomas.push("francês")

console.log(livro)

delete livro.paginas
console.log(livro)

console.log("Autor do livro é:", livro["autor"])

const autor = {
    nome: "J.R.R. Tolkien",
    nacionalidade: "Britânico",
    idade: 81
}

const pessoa2 = {
    nome: "Ana Paula",
    idade: 30,
    pets: ["gaspar"],
    nacionalidade: "Brasileira",
}       

for(const chave in pessoa2){
    console.log("chave:", chave);
    console.log("valor:", pessoa2[chave]);
}

const chaves = Object.keys(pessoa2);
const valores = Object.values(pessoa2);
const entradas = Object.entries(pessoa2);
console.log("chaves:", chaves);
console.log("valores:", valores);
console.log("entradas:", entradas);
