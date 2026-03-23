const readline = require("readline")    
//read=line é um módulo do node que permite ler dados do terminal, ou seja, do console. Ele é muito utilizado para criar interfaces de linha de comando (CLI) e para ler entradas do usuário.
//require é uma função do node que permite importar módulos, ou seja, bibliotecas de código que já foram criadas por outras pessoas ou por você mesmo. No caso, estamos importando o módulo readline para poder ler dados do terminal.
// A gente carregou uma biblitoeca chamada readline, que é uma biblioteca do Node.js que permite ler dados do terminal, ou seja, do console. Ela é muito utilizada para criar interfaces de linha de comando (CLI) e para ler entradas do usuário. Com o readline, podemos criar uma interface de leitura que nos permite ler dados do terminal e escrever respostas para o usuário.


const leitor = readline.createInterface({
    input: process.stdin,
//process.stdin é um objeto do Node.js que representa a entrada padrão do processo, ou seja, o terminal. Ele é utilizado para ler dados do terminal, ou seja, do console. Com o readline, podemos criar uma interface de leitura que nos permite ler dados do terminal e escrever respostas para o usuário. E para isso, precisamos passar o objeto process.stdin como parâmetro para a função createInterface do readline, para que ela saiba de onde ler os dados.
    output: process.stdout
//process.stdout é um objeto do Node.js que representa a saída padrão do processo, ou seja, o terminal. Ele é utilizado para escrever dados no terminal, ou seja, para mostrar respostas para o usuário. Com o readline, podemos criar uma interface de leitura que nos permite ler dados do terminal e escrever respostas para o usuário. E para isso, precisamos passar o objeto process.stdout como parâmetro para a função createInterface do readline, para que ela saiba onde escrever os dados.
});

leitor.question("Qual é o seu nome? ", (nome) => {
    console.log("Olá, " + nome + "!");

//leitor.question é uma função do readline que permite fazer uma pergunta para o usuário e esperar a resposta. Ela recebe dois parâmetros: a pergunta que queremos fazer (no caso, "Qual é o seu nome? ") e uma função de callback que será executada quando o usuário responder. A função de callback recebe um parâmetro (no caso, nome) que contém a resposta do usuário. Dentro da função de callback, podemos usar a resposta do usuário para fazer algo, como mostrar uma mensagem de boas-vindas. E depois de mostrar a mensagem, precisamos fechar a interface de leitura com leitor.close() para liberar os recursos do sistema.

    leitor.question("Qual é a sua idade?", (idade) => {
        if(idade > 18){
            console.log("Você pode tirar a sua CNH")
        } else{
            console.log("Você ainda não pode tirar a sua CNH")
        }
        leitor.close()
//leitor.close() é uma função do readline que fecha a interface de leitura, ou seja, libera os recursos do sistema que estavam sendo utilizados para ler dados do terminal. É importante fechar a interface de leitura quando não precisamos mais dela, para evitar vazamentos de memória e outros problemas. No caso, estamos fechando a interface de leitura depois de mostrar a mensagem sobre a CNH, para que o programa possa terminar corretamente.
    })
})