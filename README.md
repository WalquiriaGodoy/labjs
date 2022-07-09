## 💻 Sobre o projeto

labjs - é um protótipo com a missão de alocar os alunos da escola de dança nas diferentes turmas oferecidas.

## Funcionalidade atual
- Recebe dados de um novo aluno
- Verifica se o nome é válido (Se tem nome e sobrenome)
- Verifica se o CPF é válido (usando código fonte do site da receita federal)
- Verifica se o e-mail é válido (usando regex)
- Adiciona aluno válido na turma
- Imprime lista de alunos da turma

### Classes:
**Turma** 
- Parâmetros: `curso`, `nível`, `dia` e `horário`
- Métodos: `addAluno` (adiciona o nome do aluno a lista de alunos)

**AlunoDoLab**
- Parâmetros: `nome`, `sobrenome`, `cpf` e `email`
- Métodos: `get primeiroNome`, `nomeEhValido`, `cpfEhValido`, `validaEmail`, `alunoEhValido`
