// hof -  higer order function - função de alta ordem - é uma função que recebe outra função como parametro


function calcular(numero1, numero2, operacao) {
    return operacao(numero1, numero2)
}

function somar(numero1, numero2){
    return numero1 + numero2
}


function divisao(num1, num2){
    return num1 / num2
}

function subtracao (num1,num2){
    return num1 - num2
}

function multiplicacao (num1, num2){
    return num1 * num2
}

function potencia (num1, num2){
    return num1 ** num2
}

const CalcularSoma = calcular(5,3, somar)
// deve estar na ordem, ou seja, o primeiro numero é 5, o segundo numero é 3 e a operação é somar. E a função calcular vai executar a função somar com os argumentos 5 e 3, e retornar o resultado da soma, que é 8. E esse resultado vai ser armazenado na variável CalcularSoma.
    console.log("a soma é " + CalcularSoma)

const CalcularDivisão = calcular(10,2, divisao)
    console.log("a divisão é " + CalcularDivisão)
const CalcularSubtracao = calcular(10,5, subtracao)
    console.log("a subtração é " + CalcularSubtracao)
const CalcularMultiplicacao = calcular(4,6, multiplicacao)
    console.log("a multiplicação é " + CalcularMultiplicacao)
const CalcularPotencia = calcular(2,3, potencia)
    console.log("a potência é " + CalcularPotencia)