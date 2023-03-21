//CONTACATENANDO 
const a1 = [1,2,3]
const a2 = [4,5,6]
//CONCAT
//const a3 = a1.concat(a2,[7.8.9], 'gabi')

// ... rest -> ...spred
const a3 = [...a1,'luiz', ...a2, ...[7,8,9]]
console.log(a3)

//FILTRANDO
//filter -> retorna booleando, TRUE para ser imbutido no NOVO array e FALSE para nao ser
const numeros = [5,,50,80,1,2,3,5,8,7,11,15,22,27]
function callbackFilter(valor){ //(valor,indice,array)
    //para condicoes sempre sera avaliada com true ou false, logo nao precisa da checagem e po retornar a propria condicao
    return valor > 10
    //if (valor > 10){
   //     return true
   // } else{
    //    return false
   // }
}
const numerosFiltrados = numeros.filter(callbackFilter)
console.log(numerosFiltrados)
