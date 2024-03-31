describe("Selecionando Campo Texto", () => {


    it("O sistema deve clicar no campo “Digite sua tarefa...”", () => {

        cy.visit("http://127.0.0.1:5500/index.html")
        cy.get('#todo_title').click()


    
    })


})