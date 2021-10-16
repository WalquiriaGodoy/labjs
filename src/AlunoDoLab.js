export class AlunoDoLab {
    constructor(nome, sobrenome, cpf, email){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._cpf = cpf;
        this._email = email;
    }

    nomeEhValido(){
        // TODO: if: entrar nele se NÃO nome ou NÃO sobrenome
        if (!this._nome || !this._sobrenome){
            return false;
        }
        return true;
    }

    cpfEhValido(){
        let Soma;
        let Resto;
        Soma = 0;

        if (this._cpf == "00000000000") return false;

        for (let i = 1; i <=9; i++){
            Soma = Soma + parseInt(this._cpf.substring(i-1, i)) * (11 - i);
        }

        Resto = (Soma * 10) % 11;// % ou mod, retorna o resto da divisão

        if ((Resto == 10) || (Resto == 11)){ 
            Resto = 0;
        } 

        if (Resto != parseInt(this._cpf.substring(9, 10)) ){
            return false;
        }

        Soma = 0;
        
        for (let i = 1; i <= 10; i++){
            Soma = Soma + parseInt(this._cpf.substring(i-1, i)) * (12 - i);
        }

        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)){
            Resto = 0;
        } 

        if (Resto != parseInt(this._cpf.substring(10, 11) ) ) {
            return false;
        }

        return true;
    }

    validaEmail() {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this._email).toLowerCase());
    }
}