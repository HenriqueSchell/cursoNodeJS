const fs = require('fs')

console.log('Início')

fs.writeFile('arquivo2.txt', 'Olá, essa é a função assíncrona!', function(err){
    setTimeout(function(){
        console.log('Arquivo Criado!')
    }, 1000)
})

console.log('Fim')

/*
As funções assíncronas permitem com que o código continue progredindo enquanto aguarda a resposta de algum ponto.
Neste exemplo criamos um arquivo e escrevemos nele, porém coloquei 1 segundo de atraso, no console percebemos que o log de início e fim aparecem antes do log de arquivo criado, pois essa é a ideia de uma função assíncrona, permitir que o usuário ou o sistema continue progredindo enquanto aguarda uma resposta. 
Essas funções são muito utilizadas em requisições, onde precisa passar para o beckend, banco de dados para então receber a resposta, e se o código depender da resposta e não a tiver na hora, gera um erro, então a função assíncrona é muito utilizada quando precisamos esperar uma resposta, mas queremos que o código continue.
*/