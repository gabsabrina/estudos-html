//calculadora  com funcao construtora
//sempre que referenciar uma chave do obj DENTRO DO obj usar THIS
function Calculadora(){
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.capturaClices()
        this.capturaEnter()
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.key !== 'Enter') return;
            this.realizaConta()
        })
    };
    
    this.capturaClices = () => {
        document.addEventListener('click', event => {
            const elemento = event.target //joga o target dentro da var
            if (elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
            if (elemento.classList.contains('btn-clear')) this.clear();
            if (elemento.classList.contains('btn-del')) this.del();
            if (elemento.classList.contains('btn-eq')) this.realizaConta();

        })
    };

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value)
            if (!conta){
                alert('conta invalida')
                return
            }
            this.display.value = conta
        } catch(e){
            alert ('conta invalida')
            return
        }
    };

    this.addNumDisplay = elemento => this.display.value += elemento.innerText;
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0,-1);

    /*this.clear = () => {
        this.display.value = ''
    }
    
    this.del = function() {
        this.display.value = this.display.value.slice('0, -1')
    }
    */


}

const calculadora = new Calculadora()
calculadora.inicia()
