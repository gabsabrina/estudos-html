//escopo lexico ; se a var nao estiver no escopo de funcao sera buscada no escopo do pai, no pai do pai et
// a funcao continua lenbrando o escopo que foi declarada e os escopo de seus vizinhos

const nome = 'luiz'

function falaNome (){
    //const nome = 'sabrina'
    console.log(nome)
}

function usaFalaNome(){
    const nome = 'sabrina'
    falaNome();
}
usaFalaNome()