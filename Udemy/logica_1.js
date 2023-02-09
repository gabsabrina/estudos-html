//uma funcao que recebe dois argumentos (altura e largura) de uma 
//imagem e retorne treu se a imagem estiver no modo paisagem
function ePaisagem ( largura,altura){
    return largura > altura ? true : false
}
console.log(ePaisagem(1920, 1080))

//  com arrow function anonima
const ePaisagem2 = (largura,altura) => largura > altura
console.log(ePaisagem2(1920, 1080))