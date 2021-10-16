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