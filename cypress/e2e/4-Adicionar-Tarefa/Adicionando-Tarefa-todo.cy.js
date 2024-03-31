describe("Adicionando Tarefa", () =>{


    it("Deve ser possivel adicionar uma tarefa e ser exibida na tabela de tarefas", () =>{
        
        cy.visit("http://127.0.0.1:5500/index.html")
        cy.get('#todo_title').click().type("Fazer atividade")
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('.mb-3').should("have.text", "Tarefas cadastradas: 1")
        cy.get('[x-text="todo.task"]').should("have.text", "Fazer atividade")




    })


})