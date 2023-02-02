// LET tem escopo de bloco {...bloco...}
/*
const verdadeira = true

let nome = 'gabi' //criando
var nome2 = 'victor' // criando

var nome2 = 'luiz' //redeclarada
//console.log(nome,nome2)

if (verdadeira) {
    let nome = 'sabrina'
    var nome2 = 'gustavo' //redeclarada
    //console.log(nome,nome2) //criando

    if(verdadeira){
        let nome = 'outra coisa'
        var nome2 = 'bruna' //redeclarada
        //console.log(nome,nome2)
    }
}
console.log(nome, nome2)
// tres let diferentes
*/

// VAR so tem escopo de funçao
//var sobrenome = 'miranda'
/*
const verdadeira = true
function falaOi(){
    if(verdadeira){
    let nome = 'gabi'
    var sobrenome = 'miranda'
    }
    connsole.log(sobrenome)
}
*/
//connsole.log(sobrenome) //undefined por estar fora do escopo da funçao
//falaOi()

//HOISTING com VAR e function
//com LET o programa nao roda
var sobrenome = 'miranda'
sobrenome = 'oliveria'
console.log(sobrenome)
//var sobrenome = 'miranda'
//var criada depois de ser chamada