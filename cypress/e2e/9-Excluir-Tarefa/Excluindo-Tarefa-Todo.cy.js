describe("Excluindo Tarefa", () =>{

    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/index.html");
        cy.get('#todo_title').click().type("Trabalhar")
        cy.get('.bg-white > .col-auto > .btn').click()
        
    })

    it("O sistema deve excluir uma tarefa apois o click no botão 'Exluir' em seguida clicar no botão azul “OK” no popup com a mensagem 'Tem certeza que deseja remover?'", () =>{
        cy.wait(4000)
        cy.get('.text-end > .btn').click()

    })


})