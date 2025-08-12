const url = require('url')

const endereco = 'https://www.meusite.com/catalogo?produtos=cadeira'

const parsedUrl = new url.URL(endereco)

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produtos'))

/*
A partir de uma url podemos retirar informações com o método url.
O método host resgata o domínio.
O método pathname resgata a página.
o método search mostra os parâmetros enviados pela url formatado igual a url.
O método search params mostra od parâmetros enviados pela url em formato de dicionário e com o método
get junto, definindo o parâmetro principal ele mostra apenas a resposta dada a este parâmetro.
*/