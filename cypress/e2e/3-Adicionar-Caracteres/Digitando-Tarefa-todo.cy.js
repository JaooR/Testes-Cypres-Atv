describe("Inserção de Caracteres", () => {
    it("Deve ser possível adicionar caracteres no campo de preenchimento de tarefas", () => {
        const TituloDaTarefa = "13246ABCDEabcde";

        cy.visit("http://127.0.0.1:5500/index.html");
        cy.get('#todo_title').click().type(TituloDaTarefa);


        cy.get('#todo_title').should('have.value', TituloDaTarefa);
    });
});
