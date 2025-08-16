//Módulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

//Módulos internos
const fs = require('fs')

//Variáveis gerais
let users = []
let nameAccount
const arquivo = 'users.json'

//*Funções

//Função de inicialização
function operation() {
    inquirer.prompt([{type: 'list',
        name: 'action',
        message: 'Oque você deseja fazer?', 
        choices: ['Criar conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair']
    }]).then((answer) => {
        const action = answer['action']

        if(action === 'Criar conta'){
            createAccount()
            buildAccount()
        }else if(action === 'Consultar Saldo'){

        }else if(action === 'Depositar'){
            deposit()
        }else if(action === 'Sacar'){

        }else if(action === 'Sair'){
            exit()
        }

        
        
    }).catch((error) => console.log(`Erro: ${error}`))
}

//Função de Criação de conta
function createAccount(){
    console.log(chalk.bgGreen.black('Obrigado por escolher nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
}

function buildAccount(){
    inquirer.prompt([{name: 'accountName', message: 'Digite um nome para sua conta: '}
    ]).then((answer) => {
        const accountName = answer['accountName']
        console.info(accountName)

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('Erro! Esta conta já existe, escolha outro nome.'))
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}')

        console.log(chalk.green(`Parabens ${accountName}! Sua conta foi criada com sucesso.`))
        operation()
    }).catch((error) => console.log(`Erro: ${error}`))
}

//Função de validação de conta



//Função de consulta de saldo
function viewBalance(){
    getAccount()
}

//Função de Depósito
function deposit(){
    inquirer.prompt([{name: 'accountName', message: 'Qual o nome da sua conta? '}
    ]).then((answer) => {

        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return deposit()
        }

        inquirer.prompt([{name: 'amount', message: 'Quanto você deseja depositar? '}]).then((answer) => {
            const amount = answer['amount']

            addAmount(accountName, amount)
            operation()


        }).catch((error) => console.log(`Erro: ${error}`))

        

    }).catch((error) => console.log(`Erro: ${error}`))
}

//Função de Saque

//Função de saída
function exit(){
    console.log(chalk.bgBlue(`Até a próxima, obrigado por utilizar o accounts.`))
    process.exit()
}

//Função para verificar se a conta existe
function checkAccount(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Erro! esta conta não existe, escolha uma conta existente.'))
        return false
    }
    return true
}

//Função para adicionar o saldo
function addAmount(accountName, amount){
    const accountData = getAccount(accountName)
    
    if(!amount){
        console.log(chalk.bgRed('Erro! tente novamente mais tarde.'))
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    console.log(chalk.green(`Foi depositado ${amount} na sua conta!`))

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData))

    return operation()
}

//Função para resgatar a conta
function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {encoding: 'utf-8', flag: 'r'})
    return JSON.parse(accountJSON)
}

//Chamar a função para inicializar o código
operation()


