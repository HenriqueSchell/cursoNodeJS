const fs = require('fs')

const arquivoAntigo = 'arquivo.txt'
const arquivoNovo = 'novoArquivo.txt'

fs.rename(arquivoAntigo, arquivoNovo, (error) => {
    if(error){
        console.log(error)
    }else{
        console.log('Arquivo renomeado com sucesso!')
    }
})

/*
*O método rename renomeia o arquivo, sua estrutura é o arquivo que será renomeado e o nome que vai ser trocado.
*No exemplo usamos variáveis para o código ficar mais dinâmico, mas pode ser colocado diretamente dentro de '' os valores.
*/