// iteraçao
const frutas = ['pera', 'uva', 'maça']
 
/*
for (let i = 0; i <frutas.length; i++){
    console.log(frutas[i])
}
*/

// FOR IN -> le os indices ou chaves do objeto
//for(let index in frutas){
 //   console.log(frutas[index])
//}

const pessoa = {
        nome: 'gabi',
        sobrenome : 'sabrina',
        idade: 24,
}

//for(let i(index) in pessoa)
for(let chave in pessoa){
    //console.log(chave)
    console.log(chave,pessoa[chave])
    // console.log(pessoa[chaves])
    //console.log(pessoa.nome)
    //console.log(pessoa['sobrenome'])
}