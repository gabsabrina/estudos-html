const elementos = [
    {tag: 'p', texto: 'qualquer frase'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'section', texto:'frase 3'},
    {rag: 'footer', texto:'frase 4'}
]
const container = document.querySelector('.container')
const div = document.createElement('div')  

for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i]; //desestruturaçao de objeto
    let tagCriada = document.createElement(tag);// nao é ('p') pq se nao todos seriam iguais
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada) // a cada interaçao do lado ele add um elemento da div
}
container.appendChild(div)