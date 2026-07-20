const idade = 15
const maiordeIdade = idade >= 18
const possuiCNH = false

// && operador lógico "E" (AND) retorna true se ambos os operandos forem verdadeiros, caso contrário, retorna false. 
const podeDirigir = maiordeIdade && possuiCNH
console.log("Posso dirigir?" + podeDirigir)


// || operador lógico "OU" (OR) retorna true se pelo menos um dos operandos for verdadeiro, caso contrário, retorna false.
const podeviajarSozinha = maiordeIdade || possuiCNH
console.log("Posso viajar sozinha?" + podeviajarSozinha)

// ! operador lógico "NÃO" (NOT) inverte o valor lógico de um operando, ou seja, retorna true se o operando for false e retorna false se o operando for true.
const precisadeAcompanhamento = !maiordeIdade
console.log("Preciso de acompanhamento?" + precisadeAcompanhamento)


const idade2 = 14
const filmeTerror = idade2 >= 16
const pais = true

const assistirFilme = pais && filmeTerror
console.log("Eu posso assistir o filme?" + assistirFilme)

const possoAssistir = pais || filmeTerror
console.log("Posso assistir a este filme?" + possoAssistir)
