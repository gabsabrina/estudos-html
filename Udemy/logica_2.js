/*
uma funcao que receb um numero e retorne:
num divisivel por 3 = fizz
num divisivel por 5 = buzz
num divisivel por 3 e 5 = FizzBuzz
num NAO é divisivel por 3 e 5 = retorna o proprio numero
- checar se é numero
- funcao de 0 a 100
*/
function fizzBuzz (numero){
    if (typeof numero !== 'number') return numero
    if (numero % 3 === 0 && 5 === 0) return 'FizzBuzz'
    if (numero % 3 === 0 ) return 'Fizz'
    if (numero % 5 === 0 ) return 'Buzz'
    
    return numero
}
for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}