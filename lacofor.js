for(let contador = 1; contador <= 10; contador++){
    console.log("Número atual: " + contador)

}
// o let contadsor nó funciona dentro do for
// o ; contador <=5 é uma condição de parada, ou seja, o loop vai continuar executando enquanto contador for menor ou igual a 5

for(let numero = 0; numero <=15;numero++){
    if(numero % 2 == 0){
        console .log("Número par encontrado: " + numero)}

}

let palavra = "jacare"
for(let cont = 0; cont <=palavra.length; cont++){
    console.log(palavra[cont])
}



let jacare = 1
while(jacare <= 10){
    console.log("número atual: " + jacare)
    jacare++
}
// o while verefica e fepois executa, ou seja, ele verifica a condição antes de executar o bloco de código. No exemplo acima, se jacare fosse inicializado com um valor maior que 10, o while não executaria nada, enquanto o do while executaria o bloco de código uma vez.
//não pode esqueceer do jacare++ para evitar um loop infinito, ou seja, um loop que nunca termina porque a condição de parada nunca é atingida. No exemplo acima, se esquecermos de incrementar jacare, ele sempre será igual a 1 e a condição jacare <= 10 será sempre verdadeira, resultando em um loop infinito.

let pato = 0
do{
    console.log("Número atual: " + pato)
    pato++
} while(pato <=10)
// o do e o while executa e depois verificia
//da para fazer dessa duas formas, a diferença é que o do while executa o bloco de código pelo menos uma vez, mesmo que a condição seja falsa, enquanto o while verifica a condição antes de executar o bloco de código. No exemplo acima, se pato fosse inicializado com um valor maior que 10, o do while ainda executaria o bloco de código uma vez, enquanto o while não executaria nada.