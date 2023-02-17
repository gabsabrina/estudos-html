function retornaHora (data){
    if (data && !(data instanceof Date)){
        throw new TypeError ('esperando instancia de data')
    }
    if (! data){
        data = new Date()
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try{
    const data = new Date('01-01-2020 16:46:12')
    const hora = retornaHora()
    console.log(hora)
} catch(error){
    //tratar error
} finally{
    console.log('tenha um bom dia')
}
