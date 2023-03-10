//return 
// retorna um valor e termina a funçao
function soma ( a, b ){
    return a + b 
}

// retornando uma funçao
//usando uma funçao para criar objetos
function criaPessoa (nome,sobrenome){
    return {nome, sobrenome} // OU {nome: nome, sobrenome:sobrenome}(como tem o mesmo nome o javascrpt ja entende que sao as chaves) nome: sobrenome: sao as  chaves do objeto
}
const p1 = criaPessoa('luiz', 'otario')
console.log(p1)

//funcao retornando outra funçao
function criaMultiplicador(multiplicador){ // escopo do multiplicaodr
    return function(n){
        return n * multiplicador
    }
} 
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica (2))
console.log(triplica(3))
console.log(quadriplica(4))

