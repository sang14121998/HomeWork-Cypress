const URL = "https://demoqa.com/automation-practice-form";
const FIRT_NAME = "//input[@id='firstName']";
const LAST_NAME = "//input[@id='lastName']";
const EMAIL = "//input[@id='userEmail']";
const PHONE_NUMBER = "//input[@id='userNumber']";
const SUBJECT = "//div[@class='subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3']";
const CURRENT_ADDRESS = "Ha Noi city";
const HOBBY_SPORT = "//label[normalize-space()='Sports']";
const HOBBY_READING = "//label[normalize-space()='Reading']";
const HOBBY_MUSIC = "//label[normalize-space()='Music']";
const CHOOSE_BUTTON = "//input[@id='uploadPicture']";
const GENDER_MALE = "//label[normalize-space()='Male']";
const GENDER_FEMALE = "//label[normalize-space()='Female']";
const GENDER_OTHER = "//label[normalize-space()='Other']";
const DOB = "#dateOfBirth";
const DOB_INPUT ="#dateOfBirthInput";
const SUBMIT_BUTTON = "//button[@id='submit']";


export default class FormDemoQA {
    get getUrl() {
        return URL;
    }

    get getDate() {
        return cy.get(DOB).find(DOB_INPUT);
    }

    get getFirstName() {
        return FIRT_NAME;
    }

    get getLastName() {
        return LAST_NAME;
    }

    get getPhoneNumber() {
        return PHONE_NUMBER;
    }

    get getSubmitButton() {
        return SUBMIT_BUTTON;
    }

    get getMale() {
        return GENDER_MALE;
    }




}