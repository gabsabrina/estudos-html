// normalmente usado quando nao se sabe quantas repeticoes teram que ocorrer
// while - checa a condiçao e depois executa o codigo
// do while - executa o codigo e depois chega a condiçao
/*
let i = 0
while (i <=10){
    console.log(i)
    i++
}

const nome = 'sabrina'
while (i < nome.length){
    console.log(nome[i])
    i++ //att a var de controle para nao criar um laço infinito
}
*/
function random (min,max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
const min = 1
const max = 50
let rand = random(min,max)

while (rand !== 10){
  rand = random(min,max) //att a funçao
    console.log(rand)
}

do{
    rand = random(min,max)
    console.log(rand)
} while (rand !== 10)