console.log("bem vindo ao calculadora de trocoas")

let valorPago =20
let valorProduto = 15
let troco = valorPago - valorProduto
console.log("O troco a ser devolvido é: " + troco + " reais.")

let numeroPares=0
let numeroImpares=0

for(let numero =0; numero <= 100; numero++) {
    if(numero % 2 == 0){
        numeroPares++
    } else {
        numeroImpares++
    }
}

console.log("Quantidade de números pares encontrados: " + numeroPares)
console.log("Quantidade de números ímpares encontrados: " + numeroImpares)

const num1= 2
const num2= 4
const operacao = "multiplicacao"

// IF/ELSE
// definir um fluxo para somar ou multiplicar dois números usando if/else

if(operacao === "soma") {
    console.log(num1 + num2)
} else if (operacao === "multiplicacao"){
    console.log(num1 * num2)

} else{
    console.log("Operação não identificada")
}

// localizar o nivel de bônus de acordo com a faixa salarial 
// ex: $11000 e acima: 3% de bônus 
// $10999 a $7000: 5% de bônus 
// $ 6999 a $4008: 7% de bônus 
// $3999 p baixo: 9% de bônus 

const salarіо = 2000;

if(salario >= 11000){
    console.log("3% de bônus" )
} else if(salario < 11000 && salrio >= 7000){
    console.log("5% de bônus")
} else if(salario < 7000 && salrio >= 4000){
    console.log("7% de bônus")
} else{
    console.log("9% de bônus")
}