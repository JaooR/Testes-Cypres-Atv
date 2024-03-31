describe("Carregando da aplicação", () => {


    it("Deve ser possivel carregar a aplicação sem nenhum dado previamente cadastratdo", () => {

        cy.visit("http://127.0.0.1:5500/index.html")
        cy.get('h1').should("have.text", "O que fazer hoje?")
        cy.get('#todo_title').should("have.text", "")
        cy.get('.mb-3').should("have.text", "Tarefas cadastradas: 0")

    
    })


})