const chalk = require('chalk')

const nota = 5

if(nota >= 6){
    console.log(chalk.green('Parabéns! Você foi aprovado!'))
}else{
    console.log(chalk.red('Reprovado! Você terá de fazer a prova de recuperação!'))
}

