describe("Botão OK no aviso popup", () => {
    it("Deve ser possivel retornar a pagina inicial apois o usuario clicar no botão 'OK' no popup com seguinte mensagem 'Digite um título para a tarefa!'", () => {
        
        cy.visit("http://127.0.0.1:5500/index.html");

            
            cy.window().then((win) => {
                cy.stub(win, 'confirm').returns(true); 
            });

            cy.get('.bg-white > .col-auto > .btn').click();
            cy.get('.modal-dialog').should('not.exist');
    

    });
});
