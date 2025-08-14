const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    fs.readFile('mensagem.html', (error, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end(

        )
    })
})

const port = 3000

server.listen(port, () => console.log(`Servidor rodando na porta: ${port}`))

/*
Podemos unir o http com o fs para renderizar uma página html.
com o método writeHead do fs podemos unir então o status code e content type.
O atributo data é quem nos retorna os dados e com o write os renderizamos na tela.
O return res.end é necessário para o código parar.
*/