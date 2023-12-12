import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MyInfoPersonal from "../../page/orangeHRM/uiMyInfoPersonal";
import MyInfoContact from "../../page/orangeHRM/uiMyInfoContact";

import {faker} from '@faker-js/faker';

const myInfoPersonal = new MyInfoPersonal();
const myInfoContact = new MyInfoContact();

When ('Chuyển đến trang "My Info Personal"', function() {
 
 cy.contains("My Info").click();
})

Then('Hiển thị trang "My Info Personal"', function() {
    cy.url().should("contain", "viewPersonalDetails/empNumber")
})

When('Nhập data edit theo data faker vào form Personal', function() {
   let firstName = faker.name.firstName();
   let midName = faker.name.firstName();
   let lastName = faker.name.lastName(); 
   cy.get(myInfoPersonal.getFirstName).type(firstName);
   cy.get(myInfoPersonal.getMidName).type(midName);
   cy.get(myInfoPersonal.getLastName).type(lastName);

})
When('Click "Save" button đầu tiên ở trang Personal', function() {
    cy.xpath(myInfoPersonal.getBtnSave1).click({force: true});
})
Then('Edit info emp thành công', function() {
    cy.url().should("contain", 'viewPersonalDetails/empNumber');
})

When('Chuyển đến trang "Contact details"', function() {
    cy.xpath(myInfoContact.getTabContact).click({force: true});
})

Then('Hiển thị trang "Contact details"', function() {
    cy.url().should('contain', 'contactDetails/empNumber');
})

let street1 = faker.address.streetAddress();
let street2 = faker.address.streetAddress();
let city = faker.location.cityName();
let zipCode = faker.address.zipCode();
let phoneHome = faker.phone.number();
let phoneMobile = faker.phone.number();
let phoneWork = faker.phone.number();
let emailWork = faker.internet.email();
let emailOther = faker.internet.email();

When('Input vào form "Contact details"', function() {
    cy.xpath(myInfoContact.getStreet1).should("be.enabled").clear().type(street1).and('have.value', street1);
    cy.xpath(myInfoContact.getStreet2).should("be.enabled").clear().type(street2).and('have.value', street2);
    cy.xpath(myInfoContact.getCity).should("be.enabled").clear().type(city).and('have.value', city);
    cy.xpath(myInfoContact.getZipCode).should("be.enabled").clear().type(zipCode).and('have.value', zipCode);
    cy.xpath(myInfoContact.getPhoneHome).should("be.enabled").clear().type(phoneHome).and('have.value', phoneHome);
    cy.xpath(myInfoContact.getPhoneMobile).should("be.enabled").clear().type(phoneMobile).and('have.value', phoneMobile);
    cy.xpath(myInfoContact.getPhoneWork).should("be.enabled").clear().type(phoneWork).and('have.value', phoneWork);
    cy.xpath(myInfoContact.getEmailWork).should("be.enabled").clear().type(emailWork).and('have.value', emailWork);
    cy.xpath(myInfoContact.getEmailOther).should("be.enabled").clear().type(emailOther).and('have.value', emailOther);
        
})
When('Click "Save" button ở trang Contact', function(){
    cy.xpath(myInfoContact.getBtnSave).should("be.enabled").click();
})

Then('Verify info "Contact details" mới update', function() {
    cy.url().should('contain', 'contactDetails/empNumber');
    cy.xpath(myInfoContact.getStreet1).should('have.value', street1);
    cy.xpath(myInfoContact.getStreet2).should('have.value', street2);
    cy.xpath(myInfoContact.getCity).should('have.value', city);
    cy.xpath(myInfoContact.getZipCode).should('have.value', zipCode);
    cy.xpath(myInfoContact.getPhoneHome).should('have.value', phoneHome);
    cy.xpath(myInfoContact.getPhoneMobile).should('have.value', phoneMobile);
    cy.xpath(myInfoContact.getPhoneWork).should('have.value', phoneWork);
    cy.xpath(myInfoContact.getEmailWork).should('have.value', emailWork);
    cy.xpath(myInfoContact.getEmailOther).should('have.value', emailOther);
})
