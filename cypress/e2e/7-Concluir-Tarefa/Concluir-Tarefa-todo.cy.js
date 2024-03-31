describe("Concluir Tarefa", () =>{


    it("O sistema deve concluir uma tarefa após o cliente clicar no checkbox da tarefa desejada.", () =>{
        
        cy.visit("http://127.0.0.1:5500/index.html")
        cy.get('#todo_title').click().type("Fazer atividade")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('.form-check-input').click()
        cy.get('.form-check-input').should("be.checked")
        

    })


})