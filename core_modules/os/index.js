const os = require('os')


//Mostra informações da cpu
console.log(os.cpus())

//Mostra o espaço livre
console.log(os.freemem())

//Mostra o diretório principal
console.log(os.homedir())

//Mostra o sistema operacional(mac, linux ou windows)
console.log(os.type())
