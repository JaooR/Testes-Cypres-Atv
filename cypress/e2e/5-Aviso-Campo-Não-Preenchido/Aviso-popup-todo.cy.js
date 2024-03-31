import 'cypress-if'

describe("Aviso popup campo de texto vazio", () => {
    
    it("Deve aparecer um popup com a seguinte frase 'Digite um título para a tarefa!'", () => {
        
        

        cy.visit("http://127.0.0.1:5500/index.html");
        cy.get('.bg-white > .col-auto > .btn').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal("Digite um título para a tarefa!");

        });
 
    });
});
