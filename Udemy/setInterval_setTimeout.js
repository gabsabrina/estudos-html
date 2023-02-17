function mostraHora(){
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}
const timer = setInterval( function(){ //setInterval = intervalo de tempo para executar a funçao
    console.log(mostraHora())
}, 1000)

setTimeout(function(){ //setTimeout = executa somente uma vez dependendo do intervalo
    clearInterval(timer)
}, 3000)

setTimeout(function(){
    console.log('ola,mundo')
}, 5000)