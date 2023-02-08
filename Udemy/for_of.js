// for classico - geralmente com iteraveis (array pu strings)
// for in - retorna o indice ou chave (string,array,object)
// FOR OF -> retorna os  valores (iteraveis = array ou string)

const nome = ['gabi', 'sabrina', 'oliveira']
for(let valor of nome){
    console.log(valor)
}

const nome2 = 'sabrina'
for(let valor2 of nome2){
    console.log(valor2)
}

nome.forEach(function(valor, indice){
    console.log(valor,indice)
})

// com objetos
const pessoa = {
    nome:'gabi',
    sobrenome:'sabrina'
}
for (let chave in pessoa){
    console.log(chave,pessoa[chave])
}