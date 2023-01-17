// callback function
// uma funçao sendo usada como parametro(invocar uma funçao e invocar outra de volta)
function sayMyName (name){
    console.log(`antes de executar a funçao callback`)

    name() //em algum momento essa funçao tem que ser executada

    console.log(`depois o callback`)
}
sayMyName(
    () => {
        console.log(`estou em uma callback`)
    }
)