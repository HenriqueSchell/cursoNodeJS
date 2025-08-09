const x = "10"

//Checar se x é um número

if(!Number.isInteger(x)){
    throw new Error('O valor de X não é um número Inteiro!')
}else{
    console.log('Continuando o código...')
}

/*
O throw é responsável por gerar um novo erro, encerando o programa.
No exemplo usamos que se o x não for um inteiro o programa gera o erro e é ecerrado.
*/