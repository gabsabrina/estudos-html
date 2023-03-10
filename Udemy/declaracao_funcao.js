//declaraçao de funçao (funcyion hoisting)
falaoi()
function falaoi(){
    console.log('oi')
}
//first- class objetcs (objetos de primeira classe)
//FUNCTION EXPRESSION a funçao pode ser tratada  como um dado
const souUmDado = function(){
    console.log('sou um dado')
}
souUmDado()

function executaFunçao (funcao){
    console.log('vou executar afunçao abaixo')
    funcao()
}
executaFunçao(souUmDado)

//arrow function
// atençao qunado for usar THIS
const funçaoArrow = () => {
    console.log('sou uma arrow function')
}
funçaoArrow()

setInterval(function(){ // funçao anonima sendo usada como paramentro(tratada como dado)

},1)

// dentro de um objeto
const obj = {
    falar(){ // OU   falar: function(){
        console.log('estou falando')
    }
}
obj.falar()