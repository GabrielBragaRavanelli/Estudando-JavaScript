const { clear } = require("node:console")

let x = 1.89
console.log(x)

let aulturadoVini = 1.89
console.log(aulturadoVini)

let altura = 7
let largura = 10
let area = 70


//letras maiusculas e minusculas fazem diferença.
let preco = 10
let Preco = 20
console.log(preco)
console.log(Preco)

console.log("preço: " + preco)
console.log("Preço: " + Preco)



//EXECÍCIOS

let nome = "Vini"
console.log("Olá, " + nome + "! Bem-vindo ao JavaScript.")

let anoAtual = 2026
let anoNascimento = 2003
let idade = anoAtual - anoNascimento
console.log(" você tem " + idade + " anos.")

let cidade = "Marília"
let estado = "SP"
let pais= "Brasil"
console.log("Eu moro na cidade de " + cidade + ", no estado " + estado + ", no país " + pais + ".");

let temCarteira = true
console.log(typeof temCarteira)


let matematica = 9
let portugues = 6
let ciencias = 8
let media = (matematica + portugues + ciencias) / 3
console.log("A média das 3 matérias é: " + media + ".")

let salario = 3000
let aumento = salario * 1.10
console.log("O novo salário com aumento de 10% é: " + aumento + ".")


salario = 4000
matematica = 8
let ingles = 6
portugues = 8
ciencias = 7

const mediageral = (matematica + ciencias + portugues + ingles) / 4
if (mediageral >= 9 ){
    console.log("O seu salário terá um aumento de 1000 reais.")
} else if (mediageral >= 7){
    console.log("O seu salário terá um aumento de 700 reais.")
}else if (mediageral >= 6){
    console.log( "O seu salário terá um aumento de 500 reais.")
} else {
    console.log("Seu salário não terá auamento")
}


let restaurante = 120
let taxa = restaurante * 1.10

console.log ("O restaurante ficou " + taxa + " reais.")

const camisa1 = 40*3
const calca = 90*2
const tenis = 250

const mediaitens = (camisa1 + calca + tenis) /6
console.log("A média do preço dos itens é de " + mediaitens + " reais.")



