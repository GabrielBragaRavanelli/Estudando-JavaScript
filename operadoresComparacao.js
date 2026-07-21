const gabrielIdade = 22
const minhaIdade = 23

// == comparação de valor
const saoIguais = gabrielIdade == minhaIdade
console.log("são iguais?" + saoIguais)
//=== comparação de valor e tipo

const comparacao = gabrielIdade > minhaIdade
console.log("Gabriel é mais velho que eu?" + comparacao)

const comparacao2 = gabrielIdade < minhaIdade
console.log("Gabriel é mais novo que eu?" + comparacao2)

//maior ou igual
const comparacao3 = gabrielIdade >= minhaIdade
console.log("Gabriel é mais velho ou tem a mesma idade que eu?" + comparacao3)

// menor ou igual
const comparacao4 = gabrielIdade <= minhaIdade
console.log("Gabriel é mais novo ou tem a mesma idade que eu?" + comparacao4)

const idade = 23
const idadeIrmao =16

// !== estritamnete diferente, ou seja, verifica se os valores e os tipos são diferentes, retornando true se forem diferentes e false se forem iguais.
// != significa diferente, ou seja, verifica se os valores são diferentes, retornando true se forem diferentes e false se forem iguais. 
const souMaiordeidade = idade >= 18
const idadeIrmaoMaiorDeIdade = idadeIrmao >= 18
const idadeDiferente = idade != idadeIrmao
console.log("Eu sou maior de idade?" +souMaiordeidade)
console.log("Meu irmão é maior de idade?" + idadeIrmaoMaiorDeIdade)
console.log("Minha idade é diferente da do meu irmão?" + idadeDiferente)


const idadegabriel = 23
const idadeluca = 27
const idadeana = 22
const idadeluis = 23

const compara1 = idadegabriel >= idadeluis
console.log("Eu tenho a idade maior ou igual a do meu amigo? " + compara1 )

const compara2 = idadegabriel > idadeluis
console.log("Eu tenho a idade maior que meu amigo? " + compara2 )

const compara3 = idadeana < idadeluis
console.log("A idade da Ana é menor que a idade do Luis? " + compara3)

const compara4 = idadegabriel == idadeluca
console.log("A minha idade é igual a do meu irmão? " + compara4)

const compara5 = idadegabriel == idadeluis
console.log("A minha idade é igual a do meu amigo? " + compara5)

const compara6 = idadeana < idadeluca 
console.log("A idade da Ana é menor do que a do meu irmão? " + compara6)


