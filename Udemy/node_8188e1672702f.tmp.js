/*
const nome = 'sabrina'
let i = 0
while (i < nome.length){
    console.log(nome[i])
    i++ //att a var de controle pra nao criar um laço infinito
}
*/
function random (min,max){
    const r = Math.random() * (max - min) + min
    return r
}
const min = 1
const max = 50
let rand = random(min,max)

while (rand !== 10){
    rand = random(min,max)
    console.log(rand)
}