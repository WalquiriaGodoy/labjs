import { AlunoDoLab } from "./AlunoDoLab.js";

const aluno1 = new AlunoDoLab("Marcos", "Vieira da Silva", "34085185802", "marcosrava@gmail.com");

console.log(aluno1.nomeEhValido());
console.log(aluno1.cpfEhValido());
console.log(aluno1.validaEmail());