//NodeList(comportamento parecidso com array)
const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p') //seleciona varios elementos

const estilosBody = getComputedStyle(document.body) //tras todos os etilos carregados no body
const backGroundColorBody = estilosBody.backgroundColor //tras apenas o background color

for (let p of ps ){
    p.style.backgroundColor = backGroundColorBody
    p.style.color = 'white'
    p.style.borderRadius = '5px'
}
