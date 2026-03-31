var nome = "Gabriel Braga Ravanelli"
console.log( `olá ${nome}, seja bem-vindo ao curso de JavaScript`)

console.log("olá " + nome + ", seja bem-vindo ao curso de JavaScript")  

var anoAtual = 2026
var anoNascimento = 2003
var minhaIdade = anoAtual - anoNascimento
console.log(  `Olá meu nome é ${nome} e eu tenho ${minhaIdade} anos. `)

var cidade = "Marília"
var estado = "SP"
var pais= "Brasil"
console.log ( `eu moro na cidade de ${cidade}, no estado ${estado}, localizado no país ${pais} `)

var temCarteira = true
console.log(typeof temCarteira)

var matematica = 8
var portugues = 6
var ciencias = 5
var media = (matematica + portugues + ciencias) / 3
console.log(`A sua média foi de ${media}`)

var salario = 3000
var salarioAumento = salario * 0.1
var total = salario + salarioAumento
console.log(` com o aumento do seu salário, você passará a receber ${total}`)

// Exercicio: concatenacao e verificacao de tipo
var mensagem = "Total de itens: "
var numero = 7
var resultadoFinal = mensagem + numero
console.log(resultadoFinal)
console.log(typeof resultadoFinal)

// Exercicio: simulacao de contador de cliques
var cliques = 0
cliques += 1
cliques += 1
cliques += 1
console.log(`Total de cliques apos 3 simulacoes: ${cliques}`)

const pi= 3.14
console.log(" O valor da const pi não pode ser alterado, pois const só pode armazenar um único valor e não pode ser reatribuida, diferente do var que pode ser reatribuida")
