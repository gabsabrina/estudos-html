/*
OPERADORES LOGICOS
&& -> and (e) // retorna o valor falso se nao tiver false tras o ultimo true
|| -> or (ou) // retorna o primeiro valor true 
! -> Not(nao)

FALSY (retornam falsos false)
false(falso literal)
0
""``"" - string vazia
null\undefined
NaN
*/


//console.log(`luiz otavio` && 0 && `maria`)
//console.log(`luiz` && undefined && `maria`)

//AND
function falaOi(){
    return `oi`
}
const vaiexecutar = false
//console.log(vaiexecutar && falaOi())

//OR
console.log( 0 || false || null || `gabi`|| true)

const a = 0
const b = null
const c = `false` // string que avalia com verdadeiro
const d = false
const e = NaN
console.log(a || b || c || d || e)