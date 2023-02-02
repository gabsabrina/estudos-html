// if pode ser usado sozinho
//sempre q utiliza a palavra else precisa de um if antes
//eu posso ter varios else if na checagem
// so pode ter um else por checagem
const hora = 22
/*
if(hora >= 0 && hora <= 11){
    console.log(`bom dia`)
} else if (hora >= 12 && hora <= 17 ){
    console.log(`booa tarde`)
} else if (hora >=18 && hora <= 23){
    console.log(`boa noite`)
} else{
    console.log(`ola`)
}
*/
 const numero = 10
 if(numero <= 10){ //verdadeiro
    console.log(`menor que 10`) 
 }
 if (numero >= 0 && numero <= 5){
    console.log(`entre 0 e 5`)
 } else if(numero >= 6 && numero <= 8){
    console.log(`entre 6 e 8 `)
 } else if (numero >= 9 && numero <=11){ //verdadeiro
    console.log(`entre 9 e 11`)
 } else {
    console.log(`nao enta entre 0 e 11`)
 }
 console.log(`...resto`)
