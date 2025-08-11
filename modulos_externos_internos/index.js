//Módulo externo
const minimist = require('minimist')

//módulo interno
const soma = require('./moduloSoma')

const args = minimist(process.argv.slice(2))

console.log(args)

const n1 = args['n1']
const n2 = args['n2']

console.log(n1, n2)

console.log(soma(n1, n2))