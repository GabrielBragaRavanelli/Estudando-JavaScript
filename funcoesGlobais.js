function saudacao(){
    console.log(" e ae, beleza?")
}

//setTimeout é uma função do JavaScript que permite agendar a execução de uma função depois de um determinado tempo, em milissegundos. No caso, estamos passando a função saudacao como primeiro argumento e o tempo de 2000 milissegundos (2 segundos) como segundo argumento. Depois de 2 segundos, a função saudacao será executada e a mensagem será mostrada no console.
//1s - 1000ms 2-2000ms
setTimeout(saudacao, 2000)
//le vair esperar 2seg para executar a função saudacao, ou seja, para mostrar a mensagem "e ae, beleza?" no console. O setTimeout é uma função do JavaScript que permite agendar a execução de uma função depois de um determinado tempo, em milissegundos. No caso, estamos passando a função saudacao como primeiro argumento e o tempo de 2000 milissegundos (2 segundos) como segundo argumento. Depois de 2 segundos, a função saudacao será executada e a mensagem será mostrada no console.


let contador = 0
//set interval é uma função do JavaScript que permite agendar a execução de uma função repetidamente, a cada determinado tempo, em milissegundos. No caso, estamos passando uma função anônima como primeiro argumento e o tempo de 1000 milissegundos (1 segundo) como segundo argumento. A função anônima vai incrementar o contador e mostrar a mensagem "tempo decorridor (em segundos):" seguida do valor do contador no console a cada 1 segundo. E quando o contador chegar a 10, a função clearInterval será chamada para parar a execução repetida da função anônima.
const id = setInterval(() => {
    contador++
    console.log("tempo decorridor (em segundos):" + contador)
    if(contador == 10){
    clearInterval(id)
    }
//clearInterval é uma função do JavaScript que permite parar a execução repetida de uma função agendada com setInterval. No caso, estamos passando o id retornado pelo setInterval como argumento para clearInterval, para que ele saiba qual função parar. Quando o contador chegar a 10, a função clearInterval será chamada para parar a execução repetida da função anônima, ou seja, para parar de mostrar a mensagem "tempo decorridor (em segundos):" seguida do valor do contador no console a cada 1 segundo.
}, 1000);