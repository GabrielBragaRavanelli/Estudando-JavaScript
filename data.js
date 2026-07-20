const agora = new Date()
// o javscript controi um objeto Date com a data e hora atuais, ou seja, a data e hora do momento em que o código é executado


console.log(agora) // exibe a data e hora atuais no console

console.log("ano " + agora.getFullYear   ()) //exibe o ano atual usando o método getFullYear() do objeto Date
console.log("mês " + agora.getMonth()) //exibe o mês atual usando o método getMonth() do objeto Date. Lembre-se de que os meses são indexados a partir de 0, ou seja, janeiro é 0, fevereiro é 1, e assim por diante.
console.log("dia " + agora.getDate()) //exibe o dia do mês atual usando o método getDate() do objeto Date
console.log("hora " + agora.getHours()) //exibe a hora atual usando o método getHours() do objeto Date
console.log("minutos " + agora.getMinutes()) //exibe os minutos atuais usando o método getMinutes() do objeto Date
console.log("segundos " + agora.getSeconds()) //exibe os segundos atuais usando o método getSeconds() do objeto Date


//para colocar data especifica
const nascimento = new Date(2003, 3, 4)
// vale resslatar, que o mês começã no 0 e vai te 11, ou seja, janeiro é 0, fevereiro é 1, março é 2, abril é 3, maio é 4, e assim por diante. Portanto, para criar uma data de nascimento em 3 de maio de 2003, devemos usar o número 4 para o mês. 
console.log(nascimento) // exibe a data de nascimento especificada no console
console.log("data formatada (BR) " + nascimento.toLocaleDateString  ("pt-BR")) // exibe a data de nascimento formatada no estilo brasileiro (dia/mês/ano) usando o método toLocaleDateString() do objeto Date, passando o parâmetro "pt-BR" para indicar o formato brasileiro.


console.log("Ano" + agora.getFullYear())
console.log("Dia" + agora.getDate())
console.log("Mês" + agora.getMonth()) 
console.log("Agora são " + agora.getHours() + " horas e " + agora.getMinutes() + " minutos e " + agora.getSeconds() + " segundos.")

console.log("Em que ano nós estamos?")
console.log("Você é um Viajante do tempo? Estamos no ano de " + agora.getFullYear() + " , no mês de número " + agora.getMonth() + " , do dia " + agora.getDay())

const tempo = new Date(1939, 5, 21)
console.log("Sim, sou um viajante do tempo do ano de " + tempo + ".")


const exato = new Date()
console.log(exato)
