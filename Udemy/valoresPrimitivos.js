/*
PRIMITIVOS (imutaveis) - string,number,boolean,undefined,
null(bigint, symbol)- valores copiados
*/

let a = `A`
let b = a // por ser copiado o valor de `b` ele é independente e nao att junto
console.log(a,b) 

a = `outra coisa`
console.log(a,b)

// REFERENCIA (mutavel) - array, object, function - passados por referencia
let c = [1,2,3]
let d = c
console.log(c,d)

c.push(4)
console.log(c,d) //apontam para o mesmo espaço na memoria

//copiar valor em um array[]/objeto{}
let e = [1,2,3]
let f = [...e] //valor copiado 
e.push(4)
console.log(e,f)


