const sum = function(n1,n2){
    var total = n1 + n2 // colocar o var\const\let para a variavel nao sair desse escopo
    return total 
}
let n11 = 34
let n22 = 25
console.log(`o numero 1 é ${n11}`)
console.log(`o numero 2 é ${n22}`)
console.log(`a soma é ${sum(n11,n22)}`) // add os valores no argumento sum(n11,n22) = sum(34,25)

