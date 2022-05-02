/* 
Rodson 
Adrien
 */
// création d'une nouvelle Vue
const app = new Vue({

    // pour l'el monapp
    el: '#monApp',
    data: {
        result: 0,
        tmp_value: 0,
        reset: false,
        operator: undefined
    },
    methods: {
        // All clear
        clear() {
            this.result = 0;
            this.tmp_value = 0;
            this.operator = undefined
        },
        
        // inversion du signe 
        inversion() {
            this.result *= -1;
        },
        pourcentage() {
            this.result /= 100;
        },
        
        // ecriture du nombre
        writeNumber(number) {
            if (this.result == 0 || this.reset === true)  {
                this.result ='';
                this.reset = false
            }
                
            this.result += number.toString();
        },

        // gestion de la virgule
        writeDot() {
            if(!this.result.includes('.'))
                this.result += '.';
        },

        // verification de l'operateur
        setOperator(operator) {
            if(this.tmp_value != 0)
                this.calculate();

            this.tmp_value = this.result;
            this.operator = operator;
            this.reset = true;
        },

        // gestion du egal
        equal() {
            this.calculate();
            this.tmp_value = 0;
            this.operator = undefined;
        },

        // le calcul qui prend en charge tous les opérateurs
        calculate() {
            let value = 0;
            let firstNum = parseFloat(this.tmp_value);
            let secondNum =parseFloat(this.result);

            switch(this.operator) {
                case '+':
                    value = firstNum + secondNum;
                    break;
                case '-':
                    value = firstNum - secondNum;
                    break;
                case '*':
                    value = firstNum * secondNum;
                    break;
                case '/':
                    value = firstNum / secondNum;
            }

            this.result = value.toString();

        }
    }
})