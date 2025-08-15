const fs = require('fs')

if(!fs.existsSync('./minhaPasta')){
    fs.mkdir('minhaPasta', () => {
        console.log('Pasta criada com sucesso!')
    })
}else{
    console.log('Pasta encontrada')
}

/*
*Com o método existsSync podemos verificar se algo existe ou não.
*Com o método mkdir podemos criar um diretório.
*/