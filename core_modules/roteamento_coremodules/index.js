const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true)
    const filename = query.pathname.substring(1)

    if(filename.includes('html')){
        if(fs.existsSync(filename)) {
            fs.readFile(filename, (error, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(data)
                res.end()
            })
        }else{
            fs.readFile('404.html', (error, data) => {
                res.writeHead(404, {'Content-Type': 'text/html'})
                res.write(data)
                res.end()
            })  
        }

    }
})

const port = 3000

server.listen(port, () => console.log(`Servidor rodando na porta: ${port}`))