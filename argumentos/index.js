const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args._[0].split('=')[1]

console.log(nome)
