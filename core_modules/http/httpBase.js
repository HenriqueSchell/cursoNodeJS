const http = require('http')

const server = http.createServer((request, response) => {
    response.write('Hello World!')
    response.end()
})

const port = 3000

server.listen(port, () => console.log(`Servidor rodando na porta: ${port}`))


/*
O módulo http tem a função de criar um servidor(API).
Para criar usamos o método createServer, nele recebemos request(requisição do usuário) e enviamos a response(resposta), 
podemos abreviar no código para request e response.
Usamos o response.write para escrever na tela da web e response.end para sinalizar que finalizamos as ações.

Para parar o servidor no terminal usamos Ctrl + C
*/