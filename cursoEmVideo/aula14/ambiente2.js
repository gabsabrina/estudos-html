let num = [5,8,2,9,3]
num.push(1) //acrescenta o valor
num.sort() //poe em ordem crescente
console.log(`${num}`)
console.log(`o vetores tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
console.log(`o ultimo valor do vetor é ${num[4]}`) 
// let pos = num.indexOf(8)
let pos = num.indexOf(4)
if (pos == -1){
console.log(`o valor nao foi encontrado`)
} else{
    console.log(`o valor 8 esta na posiçao ${pos}`)
}

