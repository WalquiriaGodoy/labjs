export class Turma{
    constructor (curso, nivel, dia, horario){  
    this._curso = curso;
    this._nivel = nivel;
    this._dia = dia;
    this._horario = horario;

    this.listaDeAlunos = [];
    }

addAluno (nomeDoAluno){
    this.listaDeAlunos.push(nomeDoAluno);
    }
}
