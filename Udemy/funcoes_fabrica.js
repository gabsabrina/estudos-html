// factory functions
function criaPessoa (nome,sobrenome,altura,peso){
    return {
        nome,
        sobrenome,
        nomeCompleto(){
            return `${nome} ${sobrenome}`
        },

        fala(assunto){
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
console.log(p1.nomeCompleto())

