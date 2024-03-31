describe("Filtrando todas as tarefas", () =>{


    it("O sistema deve filtrar todas as tarefas e exibi-las na tabela de tarefas quando estiver na opção 'Concluídos'", () =>{
        
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
        cy.get('.d-flex > .btn').select('complete');  
        cy.get('.d-flex > .btn').select('all');
        cy.get('.pt-3 > .col-auto > .btn').should("have.value", "all")    

    })

    it("O sistema deve filtrar todas as tarefas e exibi-las na tabela de tarefas quando estiver na opção 'Em aberto'", () =>{
        
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
        cy.get('.d-flex > .btn').select('incomplete');  
        cy.get('.d-flex > .btn').select('all');
        cy.get('.pt-3 > .col-auto > .btn').should("have.value", "all")   

    })


})