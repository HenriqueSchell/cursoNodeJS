const path = require('path')

const caminho = '/relatorios/henrique/relatorio1.pdf'

console.log(path.dirname(caminho))
console.log(path.extname(caminho))
console.log(path.basename(caminho))

/*
*O método dirname do path mostra o caminho de pastas.
*O método extname do path mostra a extensão do arquivo.
*O método basename do path mostra o arquivo com extensão.
*/