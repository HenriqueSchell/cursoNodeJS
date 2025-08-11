const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Olá este é o meu primeiro servidor com HTML</h1>')
})

const port = 3000

server.listen(port, () => console.log(`Servidor rodando na porta: ${port}`))

/*
Agora estamos retornando um html. 
O status code é para sabermos se deu certo ou errado, no caso o 200 significa de deu tudo certo.
O setHeader é onde definimos o tipo de conteúdo.
E no end é onde enviamos o HTML.
Está muito cru ainda, o utf-8 não esta funcionando, então os acentos não pegam, mas vamos melhorando.
*/