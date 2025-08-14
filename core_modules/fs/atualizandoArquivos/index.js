const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) =>{
    
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('index.html', (error, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }else{
        const nameNewLine = name + ',\r\n'

        fs.appendFile('arquivo.txt', nameNewLine, (error, data) => {
            res.writeHead(302, {Location: '/'})

            return res.end()
        })
    }
})

const port = 3000

server.listen(port, () => console.log(`Servidor rodando na porta: ${port}`))

/*
* O método appendFile diferente do writeFile ele adiciona ao invés de reescrever, a utilização é igual ao writeFile.
* Ao invés de apenas passar o name e ele ir adicionando sem espaço algum, na variável nameNewLine é concatenado a cada name uma virgula e quebra de linha.
* O motivo para por o \r\n é que ele é responsável pela quebra de linha.
*/