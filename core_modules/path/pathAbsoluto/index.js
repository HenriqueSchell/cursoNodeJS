const path = require('path')

console.log(path.resolve('teste.txt'))

const pasta = 'relatorios'
const nomeDoArquivo = 'henrique.txt'

const finalPath = path.join('/', pasta, nomeDoArquivo)

console.log(finalPath)

/*
*O método resolve do path mosrta o caminho completo desde o C: até o arquivo ou pasta encaminhada.
*O método path permite criar caminhos.
*/