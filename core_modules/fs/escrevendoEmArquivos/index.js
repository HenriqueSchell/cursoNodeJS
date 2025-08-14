const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true)
    
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('index.html', (error, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }else{
        fs.writeFile('arquivo.txt', name, function (error, data) {
            res.writeHead(302, {Location: '/'})
            return res.end()
        })
        
    }
})

const port = 3000

server.listen(port, () => console.log(`Servidor rodando na porta: ${port}`))

/* 
*Com a biblioteca url resgatamos o name, pelo query.
*A lógica é que se o name não for enviado, o html será enviado, se for enviado o código vai gerar um arquivo txt, realocando para '/'
?O método writeFile reescreve o conteúdo todo, então se eu fizer um laço tentando adicionar todos os nomes digitados, vai dar errado,
?pois o método reescreve tudo.
*/