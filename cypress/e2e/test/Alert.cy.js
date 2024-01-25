describe('Alert', () => {
//     it('TC1-ALERT', () => {
//         cy.visit('https://demoqa.com/alerts');
//         cy.get('#alertButton').click();
//         cy.on('window:alert', (text) => {
//             expect(text).to.equal('You clicked a button');

//         })
        
        
//     })

//     it('TC2 -Alert confirm Cancel', () => {
//         cy.visit('https://demoqa.com/alerts');
//         cy.on('window:confirm' , () => false); // gia lap chon cancel
//         cy.get('#confirmButton').click();
//         cy.wait(5000);
//         cy.on('window:alert', (text) => {
//             expect(text).to.equal('Do you confirm action?');
//         })
//    })

//    it('TC3 -Alert confirm OK', () => {
//     cy.visit('https://demoqa.com/alerts');
//     cy.on('window:confirm' , () => true); // gia lap chon OK
//     cy.get('#confirmButton').click();
//     cy.wait(5000);
//     cy.on('window:alert', (text) => {
//         expect(text).to.equal('Do you confirm action?');
//         })
//     })

    it('TC4, Alert is promt', () => {
        cy.visit('https://demoqa.com/alerts');
        cy.window().then((win) => {
            cy.stub(win, "prompt").returns('SangTT');
        })
        cy.get('#promtButton').click();
        cy.on('window:alert', (text) => {
            expect(text).tp.equal("SangTT");
        })
    })
})