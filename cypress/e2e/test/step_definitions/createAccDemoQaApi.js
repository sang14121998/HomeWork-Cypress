import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'


// create new account 
Given('Tạo 1 tài khoản với username {string} và password {string}', function(username, password) {
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
    ).as('createAcc');
    let userID = '';

    cy.get('@createAcc').then(response => {
        expect(response.status).to.eq(201);
        cy.wrap(response.body).should('deep.include', {
            username :username 
            
        });
        userID = response.body.userID;
        let token = '';   
        cy.request( {
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/GenerateToken',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: {
                userName: username,
                password : password,
            } 
        }   
        ).as('getToken');
    
        cy.get('@getToken').then(responseToken => {
            token = responseToken.body.token;
            cy.log('token', token);
            
            //delete account
            cy.request( {
                method: 'DELETE',
                url: 'https://demoqa.com/Account/v1/User/' +  userID,
                headers: {
                    'Content-Type' : 'application/json' ,
                    'Authorization' : "Bearer " + token
                    
                },
                body: {
                                     
                } 
            }   
            ).as('deleteAcc');
            cy.get('@deleteAcc').then(response => {
                expect(response.status).to.eq(204);                          
        })
        
        
    })
    })
 })
