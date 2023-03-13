//closures: habilidade da funçao em acessar o seu escopo lexico

function retornaFuncao(){
    const nome = 'luiz'
    return function(){
        return nome
    }
}
const funcao = retornaFuncao()
console.dir(funcao) //console.dir é o mesmo q console.log no node