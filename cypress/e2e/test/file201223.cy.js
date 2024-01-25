describe("File", () => {
    // it('TC1-write file', () => {
    //     let data = 'Tran Tan Sang';
    //     cy.writeFile('cypress/fixtures/login.txt', data)
        
    // })

    // it('TC2-read file', () => {
    //     cy.readFile('cypress/fixtures/login.txt').then((content) => {
    //         expect(content).to.include('Sang');
    //     })
    // })

    // it('TC3-reafile', () => {
    //     cy.fixture('login.txt').then((fileContent) => {
    //         console.log(fileContent);
    //         cy.log(fileContent);
    //         cy.wrap(fileContent).should('contain', 'Sang')
    //     })
    // })

    // it('TC4-downloadFile', () => {
    //     cy.visit('https://the-internet.herokuapp.com/download');
    //     let elmDownload = cy.get("a[href='download/file.png']");

    //     let fileNamePath = 'cypress/fixtures/elmDownload.png';
    //     elmDownload
    //     .invoke('attr', 'href')
    //     .then((downLoadLink) => {
    //         cy.request({
    //             url: downLoadLink,
    //             encoding : 'binary',           
    //         }).then((respone) => {
    //             cy.writeFile(fileNamePath, respone.body, 'binary')
    //         })
        
    //     })

    it('TC5 - uploadFile', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').selectFile('D:/sayed.png');
        cy.get('#file-submit').click();
    })


    
})