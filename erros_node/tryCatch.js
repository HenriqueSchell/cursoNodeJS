const x = '10'

try{
    x = 2
} catch(err){
    console.log(`Erro: ${err}`)
}

/**
O try catch é um erro diferente, o try é onde o código vai tentar fazer algo, no exemplo é atribuir um novo valor a uma constante, caso não de ele vai para o catch que mostra o erro.
 */