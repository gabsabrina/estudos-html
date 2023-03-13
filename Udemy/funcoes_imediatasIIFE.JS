// IIFE immediately invoked function expressio
// funçao precisa estar dentro de ()
(function(idade,peso,altura){

    const sobrenome = 'sabrina'
    function criaNome(nome){
        return nome + ' ' + sobrenome
    }
    function falaNome(){
        console.log(criaNome('gabrielle'))
    }
    falaNome()
    console.log(idade,peso,altura)
}) (24, 52, 1.60)