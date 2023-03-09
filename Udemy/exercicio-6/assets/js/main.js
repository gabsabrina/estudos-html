const inputTarefa = document.querySelector('.input-tarefa')
const botaoTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLista(){
const lista = document.createElement('li')
return lista
}

inputTarefa.addEventListener('keypress', function(e){ //quando o botao de enter for precionado cria uma tarefa
    if (e.keyCode === 13){ //13 codigo do ENTER
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
})

function limpaInput (){
    inputTarefa.value = '' ;
    inputTarefa.focus() //limpa o input e faz o cursor voltar pro input
}
function criaBotaoApagar(lista){ //cria o botao apagar depois de add algo na lista
    lista.innerText += ' ';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class','apagar')//atribui uma classe chamada 'apagar'
    lista.appendChild(botaoApagar)
}

function criaTarefa(textoInput){
const lista = criaLista()
lista.innerText = textoInput
tarefas.appendChild(lista)
limpaInput() //depois que cria a tarefa ele ja limpa
criaBotaoApagar(lista) //depois que cria a tarefa add o botao
salvarTarefas()
}

botaoTarefa.addEventListener('click', function(){ // quando clicar no botao cria uma tarefa
if(!inputTarefa.value) return;
criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e){
    const el = e.target // seleciona o botao que esta sendo clicado
    if(el.classList.contains('apagar')){
        el.parentElement.remove() // apaga o 'pai' desse botao, ou seja, o 'li' que foi criado com a tarefa
    }
    salvarTarefas() // apaga as tarefas do local salvo tbm 
})

function salvarTarefas (){
    const listaTarefas = tarefas.querySelectorAll('li') // tras todos o 'li' criados
    const listaDeTarefas = []
    for (let tarefa of listaTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()//faz com que o botao 'apagar' que estava junto com com o 'li' seja subistituido por nad
        //.trim() remove os espacos em branco nas pontas
        listaDeTarefas.push(tarefaTexto) // poe os textos dentro da listA
    }
    const tarefasJSON =JSON.stringify (listaDeTarefas) // transofrma o array em uma string\json
    localStorage.setItem('tarefas', tarefasJSON)//local no navegador com o nome 'tarefas' que salva a lista
}

function addTarefasSalvas(){ //tras tarefas salvas do local storege
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas) // converte novamente para array/objeto  
    console.log(listaDeTarefas)

}
addTarefasSalvas()