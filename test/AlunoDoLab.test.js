import {AlunoDoLab} from "../src/AlunoDoLab";

describe('AlunoDoLab', () => {
    describe('Validação de dados', () => {
        it('Deverá verificar se o nome tem nome e sobrenome', () => {
            //Dado 
            const nome = "Marcos Vieira da Silva"
            const cpf = "34085185802"
            const email = "marcosrava@gmail.com"
            const aluno = new AlunoDoLab(nome, cpf, email)
            //Quando
            const result = aluno.nomeEhValido()
            //Então
            expect(result).toEqual(true)
        })
    })
})