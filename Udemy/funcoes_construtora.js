//funcao construtora retorna objetos
//POR CONVENSAO sempre inica o nome com letra maiuscula e deveser usado  o NEW
//new = cria um obje vazio,faz o this apontar pro obj vazio e retorna o obj para a variavel
// funcao fabrica retorna objeto
function Pessoa(nome,sobrenome){
    //atrbutos ou metodos privadas
    const ID = '2354'

    const metedoInterno  =  function(){

    }
    //atrbutos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome

    this.metodo = () => {
        console.log(this.nome + ' sou um metodo')
    }
}

const p1 = new Pessoa ('gabi', 'sabrina')
const p2 = new Pessoa ('victor', 'moota')

console.log(p1.nome, p2.nome)
p1.metodo()