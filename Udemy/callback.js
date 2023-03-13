//callback chamar e inicar uma funçao quando outra terminar 
function rand (min = 1000, max = 3000){ // cada vez que executa tras um numero aleatorio
    const num = Math.random() * (max-min)+min
    return Math.floor(num)
}

function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if (callback) callback()
    }, rand()) //tempo de intervalo (ms) para inicar a funçao
}

function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if (callback) callback()
    }, rand())
}
function f3(callback){
    setTimeout(function(){
        console.log('f3')
        if (callback) callback()
    }, rand())
}

//obrigar ser na ordem f1,f2,f3 apesar de intervalos diferentes
f1 (f1Callback)

function f1Callback(){
    f2(f2Callback)
}
function f2Callback(){
    f3(f3Callback)
}
function f3Callback(){
    console.log('ola mundo')
}