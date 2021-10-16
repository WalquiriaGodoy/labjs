#language: pt

Funcionalidade: Modulo de alunos
  
Cenário: Validação de dados 
  Dado que o usuário passou os dados, nome, cpf e email
  Quando os dados forem submetidos
  Então deverá verificar se o nome tem nome e sobrenome
  E se o cpf é válido
  E se o email é válido


Cenário: Cadastro de aluno
  Dado passou pela validação de dados
  Quando os dados válidos forem submetidos
  Então deverá salvar os dados do aluno
