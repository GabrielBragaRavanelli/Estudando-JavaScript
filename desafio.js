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