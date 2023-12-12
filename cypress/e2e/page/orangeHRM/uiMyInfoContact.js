import { PhoneModule } from "@faker-js/faker";

const TAB_CONTACT = "//a[normalize-space()='Contact Details']";
const STREET1 = "//div[label[text()='Street 1']]/following-sibling::div/input";
const STREET2 = "//div[label[text()='Street 2']]/following-sibling::div/input"
const CITY = "//div[label[text()='City']]/following-sibling::div/input";
const ZIP_CODE = "//div[label[text()='Zip/Postal Code']]/following-sibling::div/input";
const PHONE_HOME = "//div[label[text()='Home']]/following-sibling::div/input";
const PHONE_MOBILE = "//div[label[text()='Mobile']]/following-sibling::div/input";
const PHONE_WORK = "//div[label[text()='Work']]/following-sibling::div/input";
const EMAIL_WORK = "//div[label[text()='Work Email']]/following-sibling::div/input";
const EMAIL_OTHER = "//div[label[text()='Other Email']]/following-sibling::div/input";
const BTN_SAVE = "//button[normalize-space()='Save']";

export default class ContactDetail {
    get getTabContact() {
        return TAB_CONTACT;
    }

    get getStreet1() {
        return STREET1;
    }

    get getStreet2() {
        return STREET2;
    }

    get getCity() {
        return CITY;
    }

    get getZipCode() {
        return ZIP_CODE;
    }

    get getPhoneHome() {
        return PHONE_HOME;
    }

    get getPhoneMobile() {
        return PHONE_MOBILE;
    }

    get getPhoneWork() {
        return PHONE_WORK;
    }

    get getEmailWork() {
        return EMAIL_WORK;
    }

    get getEmailOther() {
        return EMAIL_OTHER;
    }

    get getBtnSave() {
        return BTN_SAVE;
    }

}