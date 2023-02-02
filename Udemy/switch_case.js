//no lugar de muitos if else checando a mesma variavel
//switch dentro de uma funçao

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda'
            return diaSemanaTexto;
        case 2: 
            diaSemanaTexto = 'Terça'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta'
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado'
            return diaSemanaTexto;
        default: 
                diaSemanaTexto = '';
                return diaSemanaTexto;
    }
}

const data = new Date ('1987-04-17 00:00:00')
let diaSemana = data.getDay() //var obtendo o numero da semana
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)//var sendo usada como argumento para funcao

//let diaSemanaTexto //sera configurada no bloco case 

/*
witch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo'
        break;
    case 1:
        diaSemanaTexto = 'Segunda'
        break;
    case 2: 
        diaSemanaTexto = 'Terça'
        break;
    case 3:
        diaSemanaTexto = 'Quarta'
        break;
    case 4:
        diaSemanaTexto = 'Quinta'
        break;
    case 5:
        diaSemanaTexto = 'Sexta'
        break;
    case 6:
        diaSemanaTexto = 'Sabado'
        break;
    default: 
            diaSemanaTexto = ''
        break//nao tem necessidade
}
*/
console.log(diaSemana,diaSemanaTexto)