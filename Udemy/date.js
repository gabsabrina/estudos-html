 // 01\01\1970 epocas unix (marco zero)
 // os meses comecam em 0 no javascript (jan = 0, feb = 1 ...,dez = 11 )
 // GETDATE = tras o numero do dia
const data = new Date(2019,3,20,15,14,27,1000); //2019\abril\2020 15:14:27
console.log(data.toString())

const data2 = new Date('2019-04-20 20:20:59')
console.log(data2.toString())

const data3 = new Date('2019-04-20 20:20:59')
console.log('dia', data3.getDate())
console.log('mes', data3.getMonth())
console.log('ano', data3.getFullYear())
console.log('hora', data3.getHours())
console.log('min', data3.getMinutes())
console.log('seg', data3.getSeconds())
console.log('ms', data3.getMilliseconds())
console.log('dia semana', data3.getDay())


function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}` //add o zero a esquerda

}
function fomataData(data) {
    const dia = zeroAEsquerda(data3.getDate())
    const mes = zeroAEsquerda(data3.getMonth() + 1 )
    const ano = zeroAEsquerda(data3.getFullYear())
    const hora = zeroAEsquerda(data3.getHours())
    const min = zeroAEsquerda(data3.getMinutes())
    const seg = zeroAEsquerda(data3.getSeconds())

return`${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data4 = new Date()
const dataBrasil = fomataData(data)
console.log(dataBrasil)