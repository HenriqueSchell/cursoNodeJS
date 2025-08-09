const inquirer = require('inquirer')
const chalk = require('chalk')

function media(nota1, nota2){
    const media = (nota1 + nota2) / 2
    
    if (media >= 6){
    return console.log(chalk.green(`Parabéns!!! Você foi aprovado! Sua média final foi de ${media}`))
    }else{
        return console.log(chalk.red(`Que pena! você terá de fazer a prova de recuperação. Sua média final foi de ${media}`))
    }
}

inquirer.prompt([{name: 'nota1', message: 'Qual a primeira nota?'}, {name: 'nota2', message:'Qual a segunda nota?'}]).then(answers => {
    const nota1 = Number(answers.nota1)
    const nota2 = Number(answers.nota2)
    media(nota1, nota2)
}).catch(err => console.log(err))


/*
A partir do modulo externo inquirer podemos ler inputs mais facilmente, por questão de erros de importação neste exemplo foi usado a versão de instalação 'npm install inquirer@8.1.2'.

O método prompt é o responsável por fazer as perguntas, para fazer mais de uma pergunta adicionamos dentro de um array '[]' os objetos, cada pergunta é um objeto diferente '{}', cada pergunta deve conter um name como uma forma de resgatar usando a função answers e uma message que é a pergunta em si, oque o usuário vai visualizar.

Na funçao media foi usado o módulo chalk para cores.
*/

