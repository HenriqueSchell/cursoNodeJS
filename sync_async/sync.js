const fs = require('fs')

console.log('Início')

fs.writeFileSync('arquivo.txt', 'Olá! seja bem vindo ao node.js')

console.log('Fim')

/*
Em códigos síncronos o código espera ser totalmente executado para prosseguir, então o log Fim só vai aparecer quando o fs criar e escrever no arquivo, ou seja, o código precisa finalizar cada passo para prosseguir para a próxima linha.
*/