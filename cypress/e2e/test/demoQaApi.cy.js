import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

Given('Create new account with username {string} and pass {string}', () => {
    cy.request( {
        method: 'POST',
        url: 'https://demoqa.com/Account/v1/User',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: {
            userName: username,
            password : password,
        } 
    }   
    ).then((respone) => {
        expect(respone.status).to.eq(201);
        cy.wrap(respone.body).should('deep.include', {
            username : username,

        });
        let data = {
            "username" : username,
            "password" : password,
            "userID" : respone.body.userID
        }
        cy.writeFile('cypress/fixtures/dataLogin.json', data)
    })
})