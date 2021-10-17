import { AlunoDoLab } from "./AlunoDoLab.js";
import { Turma } from "./Turma.js";

const aluno1 = new AlunoDoLab("Marcos", "Vieira da Silva", "34085185802", "marcosrava@gmail.com");
console.log(aluno1.primeiroNome);
console.log("Nome é válido:", aluno1.nomeEhValido());
console.log("CPF é válido:", aluno1.cpfEhValido());
console.log("Email é válido:", aluno1.validaEmail());
const aluno2 = new AlunoDoLab("Walquiria", "Godoy", "40851823823", "walquiriagodoy@gmail.com");

const turma1 = new Turma("Forro", "Básico", "Sabado", "18h")
turma1.addAluno(aluno1.primeiroNome);
turma1.addAluno(aluno2.primeiroNome);
console.log (turma1);

// Imprime apenas o nome do aluno:
// const nomeDosAlunos = turma1.listaDeAlunos;
// console.log(nomeDosAlunos);