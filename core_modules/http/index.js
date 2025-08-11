const http = require('http')

const server = http.createServer((req, res) => {
    res.write('Hello Node!')
    res.end()
})

const port = 3000

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`))