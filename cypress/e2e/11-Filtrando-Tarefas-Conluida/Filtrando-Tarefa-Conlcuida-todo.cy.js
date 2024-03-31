describe("Filtrando tarefas Concluidas", () =>{

    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/index.html");
        cy.get('#todo_title').click().type("Fazer atividade")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('#todo_title').click().type("Estudar")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('#todo_title').click().type("Fazer trabalho")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('#todo_title').click().type("Trabalhar")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get(':nth-child(2) > :nth-child(1) > .form-check-input').click()
        cy.get(':nth-child(5) > :nth-child(1) > .form-check-input').click()
    })

    it("O sistema deve filtrar as tarefas concluídas e exibi-las na tabela de tarefas", () =>{
        
       
        cy.get('.d-flex > .btn').select('complete');
        cy.get('.pt-3 > .col-auto > .btn').should("have.value", "complete")    

    })


})