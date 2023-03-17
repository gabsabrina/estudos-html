//funcoes recursivas -> funçao que chama ela mesmo navamente

function rescursiva(max){
    console.log(max)
    if(max >= 10 ) return;//lembrar de por um max 
    max ++,
    //console.log(max) console.log mais encima faz comecar do zero aa contag em
    rescursiva(max)
}
rescursiva(1) 