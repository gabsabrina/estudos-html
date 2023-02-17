//try - executa qunado nao há erros
//catch - executa quando há erros
//finally - sempre


function soma(x,y){
    if(
        typeof x !== 'number' || typeof y !== 'number'
    ) {
        throw new Error('x e y precisam ser numeros')
    }
    return x + y 
}
try{
    console.log(soma(1,2))
    console.log(soma('1', 2))
} catch (error){
    console.log(error)
    console.log('alguma coisa mais amigavel')
}