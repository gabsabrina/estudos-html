//utilizando  o CONSTRUTOR do array -> nao usado
// const nomes = new array ('gabi', 'sabrina', 'oliveira)

// array literal
const n1 = ['eduardo', 'maria', 'gabi']
n1[2] = 'sabrina'
delete n1[2]
console.log(n1)

//POP\ SHIFT
const n2 = ['victor', 'gustavo', 'luiz']
const removido = n2.pop() // POP remove um ultimo elemento, SHIFT remove o primeiro r desloca os indices    
console.log(n2, removido)

// valor por referencia
// tudo que rolar em novo acontece em n3
// spred = rest (...) só muda o contexto

const n3 = ['jhon', 'katy','maria']
const novo =  [...n3]//n3 //com o Spred ele copia e espalha o array e nao reflete no N3
novo.pop()
console.log(novo)


// PUSH add elementos no final
const n4 = ['robert', 'pedro', 'maria']
n4.push('joao')
n4.push('wallace')
console.log(n4)

// UNSHIFT add elementos no inicio e desloca o array
const n5 = ['sonia', 'arnold', 'hugo']
n5.unshift('roni')
n5.unshift('alex')
console.log(n5)

// SLICE fatia o array
//             0       1       2         3         4
const n6 = ['rosy', 'vania', 'edu', 'anderson', 'leo']
const novo1 = n6.slice(1,3)
const novo2 = n6.slice(2 ,-1)
console.log(novo1)
console.log(novo2)

//SPLIT separa uma string
const n7 = 'gabrielle sabrina de oliveira'
const novo3 = n7.split(' ') // (' ') (,) (.) 
console.log(novo3)

// JOIN justa os elementos da string
const n8 = ['victor', 'cardoso', 'mota']
const novo4 = n8.join('-')
console.log(novo4)

//SPLICE > faz os mesmo q pop,push
//nomes.splice(indie,delete,elem1,elemento2,elemento3)
const n9 = ['maria', 'joao', 'eduardo', 'gabriel', 'julia']
const removidos = n9.splice(3,2)
console.log(n9,removidos)

