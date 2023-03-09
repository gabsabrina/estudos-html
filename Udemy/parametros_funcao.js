//argumentos que sustenta todos os argumentos enviados
function funçao(a,b,c,d,e,f){
console.log(a,b,c,d,e,f)
}
funçao(1,2,3,4)


function funcao2(a,b = 0){ // caso o 'b' nao seja enviado considera o 0 como padrao
    console.log(a+b)
}
funcao2(2)

function funcao3 (a,b = 2,c = 4){
    console.log(a+b+c)
}
funcao3 (2,undefined,20) // por mais que tenha enviado um paramentro'undefined' para 'b' sera considerado o valor padrao (2)

//objeto como argumento da funçao(objeto{} e array[])

function funcao4({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade);
}
funcao4({nome: 'gabi', sobrenome: 'sabrina', idade: 24})


function conta(operador,acumulador,...numeros){// ... operador de resto,tras todos os que restarem,DEVE ser o ultimo
    for(let numero of numeros){
    if (operador === '+') acumulador += numero
    }
    console.log(acumulador)
    console.log(operador,acumulador,numeros)// 0 '...' operador de resto tras como se fosse um array
}
conta('+',1,20,30,40) 