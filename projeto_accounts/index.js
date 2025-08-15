//Módulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

//Módulos internos
const fs = require('fs')
//const { create } = require('domain')

//*Funções

//Função de inicialização
function operation() {
    inquirer.prompt([{type: 'list',
        name: 'action',
        message: 'Oque você deseja fazer?', 
        choices: ['Criar conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair']
    }]).then((answer) => {
        const action = answer['action']

        //Chamar a função criar conta se a escolha for essa
        if(action === 'Criar conta'){
            createAccount()
        }

        //Validação se a conta existe

        //Chamar a função de depósito
        if(action === 'Depositar'){
            depositar()
        }

        //Chamar a função de saída
        if(action === 'Sair'){
            sair()
        }
    }).catch((error) => console.log(`Erro: ${error}`))
}

//Função de Criação de conta
function createAccount(){
    console.log(chalk.bgGreen.bold('Muito obrigado por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))

    inquirer.prompt([
        {name: 'nameAccount', message: 'Digite um nome para a sua conta: '}
    ]).then((answer) => {
        const nameAccount = answer['nameAccount']

        const arquivo = 'users.txt'
        let users = []

        //Ler contas existentes
        if(fs.existsSync(arquivo)){
            const conteudo = fs.readFileSync(arquivo)
            users = JSON.parse(conteudo)
            console.log(users)
        }
        
        users.push(nameAccount)
        fs.writeFileSync
        ('usuarios.json', JSON.stringify(nameAccount, null, 2), 'utf-8')

        console.log(chalk.bgGreen.white.bold(`Seja muito bem vindo ${nameAccount}!`))

        operation()
    }).catch((error) => console.log(`Error: ${error}`))
}

//Função de validação de conta


//Função de consulta de saldo

//Função de Depósito
function depositar(){
    inquirer.prompt([{name: 'depositar', message: 'Qual o valor você deseja depositar? '}
    ]).then((answer) => {
        const valor = answer['depositar']
        console.log(valor)

    }).catch((error) => console.log(`Erro: ${error}`))
}

//Função de Saque

//Função de saída
function sair(nameAccount){
    console.log(chalk.bgGreen(`Até a próxima ${users[0]}`))
    return
}


//Chamar a função para inicializar o código
operation()


