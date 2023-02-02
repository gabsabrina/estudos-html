//atribuicao por desestruturaçao com array
/*
// indice        0  1  1  3  4  5  6  7  8
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]
const [primeiroNumero, segundoNumero, ,quartonumero, ,...resto] = numeros //variaveis que pegam o primeiro, segundo num e uma par o resto
console.log(primeiroNumero,segundoNumero, quartonumero)
console.log(resto)

// ... = rest(resto), ... = spread(distribuir)
// , , = espaço vazio para pular alguns
*/


//indice 1          0        1        2
//indice 2        0 1 2    0 1 2    0 1 2
//const numero = [ [1,2,3], [4,5,6], [7,8,9] ]
//const [lista1, lista2, lista3] = numero
//console.log(lista2[1])

//atribuicao com desestruturacao com objeto
const pessoa = {
    nome:'gabi',
    sobrenome: 'sabrina',
    idade: 30,
    endereco:{
        rua: 'padre ancheita',
        numero: 2224
    }
}
//const {nome = 'nao existe', sobrenome: teste,idade} = pessoa //nome = 'nao existe - padrao caso nao exista \ sobrenome:... -novo nome(teste) para a var
const {nome, sobrenome, ... resto} = pessoa
console.log(nome,resto)
//const { endereco:{rua, numero},endereco} = pessoa
//console.log(rua,numero, endereco )
