//sempre que referenciar uma chave do obj DENTRO DO obj usar THIS
function criaCalculadora(){
return {
    display: document.querySelector('.display'),

    inicia(){
        this.cliqueBotoes()
        this.pressionaEnter()
    },

    pressionaEnter(){
        this.display.addEventListener('keyup', (e) => {
            if(e.keyCode === 13){
                this.realizaConta()
            }
        })
    },

    clearDisplay(){
        this.display.value = ''
    },

    apagaUm(){
        this.display.value = this.display.value.slice(0, -1)
    },

    realizaConta(){
        let conta = this.display.value;

        try{
            conta = eval(conta)

            if(!conta){
                alert('conta invalida')
                return
            }
            this.display.value = String(conta)
        } catch(e){
            alert('conta invalida')
            return
        }
    },

    cliqueBotoes(){
        //this -> calculadora
        document.addEventListener('click', (e) => { //function(e){
            const el = e.target;
            //com arrow function o THIS continua sendo 'calculadora'
            // this -> document (depois de criada a funçao ele muda)
            if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText)
            }
            
            if (el.classList.contains('btn-clear')){
                this.clearDisplay()
            }

            if(el.classList.contains('btn-del')){
                this.apagaUm()
            }

            if(el.classList.contains('btn-eq')){
                this.realizaConta()
            }

            this.display.focus() // por comportamento padra qunado clica em algo p 'focus fica na ultima cposac licaca. para mudar use FOCUS
        }) //.bind(this)) // fazendo a funcao usar o outro THIS (calculadora)
    },
    
    btnParaDisplay(valor){
        this.display.value += valor; 
    }
};

}
const calculadora = criaCalculadora()
calculadora.inicia()