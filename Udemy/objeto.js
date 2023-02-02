//criando um objeto(array) usando uma variavel
const pessoa1 = {
    nome:`gabi`,
    sobrenome:`sabrina`,
    idade: 24,
    fala(){
        console.log(`a minha idade atual é ${this.idade}.`); //this- referencia esse objeto e atributos dentro desse metodo (nesse contexto)
    },
    icrementaIdade(){ // add 1 a cada invocaçao
        this.idade ++
    }
}
pessoa1.fala();
pessoa1.icrementaIdade();
pessoa1.fala();
pessoa1.icrementaIdade();
pessoa1.fala();