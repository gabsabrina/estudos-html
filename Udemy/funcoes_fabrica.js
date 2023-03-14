// factory functions
function criaPessoa (nome,sobrenome,altura,peso){
    return {
        nome,
        sobrenome,

        //getter
        get nomeCompleto(){ // metodo q tras o nome completo
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ') // divide a nos espacos e cria arrays\vetor
            this.nome = valor.shift()// remove e retorna o valor do primeiro array
            this.sobrenome = valor.join (' ') // Pega o resto, junta em uma string e separa por algo
           
        }, 

        fala(assunto = 'falando algo'){
            return `${this.nome} esta ${assunto}`
        },

        altura: altura,
        peso: peso,
        // get = GETTER, finge ser um atributo
        get imc () { // this= quem chamar o objeto
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }

    }
}
const p1 = criaPessoa ('gabi', 'sabrina', 1.60, 53)
p1.nomeCompleto =  'victor cardoso mota'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.nomeCompleto)
console.log(p1.fala())

//funçao construtora
