function criaHoraDosSegundos(segundos){
    const data = new Date(segundos *1000)

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'

    })
}
console.log(criaHoraDosSegundos(10))



const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos ++
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}
document.addEventListener('click', function(e){
   const elemento = e.target

   if (elemento.classList.contains('zerar')){
    relogio.classList.remove('pausado')
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0 // para o 'inicar' comecar do 0 quando o 'zerar' for usado)
   }

   if (elemento.classList.contains('iniciar')){
    relogio.classList.remove('pausado') //remove a classe para nao inicar vermelho
    clearInterval(timer)//garante que nao tera mais de um timer ao mesmo tempo
    iniciaRelogio()
   }
   
   if(elemento.classList.contains('pausar')){
    relogio.classList.add('pausado')
    clearInterval(timer)
   }
})
   