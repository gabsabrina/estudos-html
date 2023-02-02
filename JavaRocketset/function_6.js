//criando objeto dentro da funçao

function criaPessoa(nome,sobrenome,idade){
    return{nome,sobrenome,idade};
}
const pessoa1 = criaPessoa(`gabi`, `sabrina`, 24)
const pessoa2 = criaPessoa(`victor`, `cardoso`, 28)
const pessoa3 = criaPessoa(`luiz`, `dalgalo`, 25)

console.log(pessoa1.nome,pessoa2.sobrenome, pessoa3.idade)