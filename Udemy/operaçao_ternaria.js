// (condiçao) ? "valor para verdadeiro" : "valor para falso"
const pontuaçaoUsuario = 500;
const nivelUsuario = pontuaçaoUsuario >= 1000? 'usuario vip' : 'usuario normal';

const corUsuario = null
const corPadrao = corUsuario || `preta`;

console.log(nivelUsuario, corPadrao)
