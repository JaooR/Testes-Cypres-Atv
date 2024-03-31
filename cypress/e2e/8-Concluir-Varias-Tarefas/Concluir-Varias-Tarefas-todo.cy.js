describe("Concluir varias Tarefa", () =>{

    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/index.html");
    })

    it("O sistema deve concluir várias tarefas após o cliente clicar nos checkbox’s das tarefas desejadas.", () =>{
        
       
        cy.get('#todo_title').click().type("Fazer atividade")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('#todo_title').click().type("Estudar")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('#todo_title').click().type("Fazer trabalho")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('#todo_title').click().type("Trabalhar")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get(':nth-child(2) > :nth-child(1) > .form-check-input').click()
        cy.get(':nth-child(3) > :nth-child(1) > .form-check-input').click()
        cy.get(':nth-child(4) > :nth-child(1) > .form-check-input').click()
        cy.get(':nth-child(5) > :nth-child(1) > .form-check-input').click()
        cy.get('.form-check-input').should("be.checked")
       
       
        

    })


})