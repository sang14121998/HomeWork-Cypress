const FIRST_NAME = "input[placeholder='First Name']";
const MID_NAME = "input[placeholder='Middle Name']";
const LAST_NAME = "input[placeholder='Last Name']";
const ID_EMPLOYEE = "(//input[@class='oxd-input oxd-input--active'])[3]";
const BTN_SAVE_1 = "(//button[@type='submit'][normalize-space()='Save'])[1]";

import DataOrange from "../../fixtures/DataORANGE.json"

export default class DetailInfo {
    

    get getFirstName() {
        return FIRST_NAME
    }


    get getMidName() {
        return MID_NAME
    }


    get getLastName() {
        return LAST_NAME
    }


    get getIdEmp() {
        return ID_EMPLOYEE;
    }


    get getBtnSave1() {
      return BTN_SAVE_1;
    }
}