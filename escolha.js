const notadoAluno = 8

switch(notadoAluno){
    case 10:
    case 9:
        console.log("Excelente nota")
        break
    case 8:
    case 7:
        console.log("Boa nota")
        break
    case 6:
        console.log("Nota suficiente")
        break
    case 5:
    case 4:
    case 2:
    case 1:
    case 0:
        console.log("Reprovado")
        break
    default:
        console.log("Nota inválida")

}
// default é o caso padrão, ou seja, se nenhuma das condições anteriores for verdadeira, ele vai executar o código dentro do bloco default. No exemplo acima, se a nota do aluno for diferente de 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ou 0, ele vai imprimir "Nota inválida".
// o break serve para que  quando o condição for atinjida, ele para de verificar as outras condições
//pode traduzir switch com escolha.


const nota1 = 6
const nota2 = 7
const nota3 = 5
const nota4 = 9

const media = (nota1 + nota2 + nota3 + nota4) / 4

switch(media){
    case 10:
    case 9:
        console.log("Excelente nota")
        break
    case 8:
    case 7:
        console.log("Boa nota")
    case 6:
        console.log ("Nota suficiente")
        break
    case 5:
        console.log("Aluno realizará Exame")
        break
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Reprovado")
        break
    default:
        console.log("Nota inválida")
    
}

const camisa = 80*3
const short = 60 *2
const cueca = 40*6
const calca = 70

const mediacompra = (camisa + short + cueca + calca) /12
console.log(mediacompranode)

switch(mediacompra){
    case 150:
    case 120:
        console.log("Saiu caro.")
        break
    case 100:
    case 80:
        console.log("Saiu barato.")
    case 70:
    case 60:
    case 50:
    case 40:
        console.log("Dinheiro muito bem gasto.")
        break
    case 20:
    case 10:
        default:
        console.log("De graça.")
}



