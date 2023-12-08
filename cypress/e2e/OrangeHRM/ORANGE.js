// LOGIN SCREEN 01
const URL_LOGIN = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
const USER_LOGIN = "//input[@placeholder='Username']";
const PASS_LOGIN = "//input[@placeholder='Password']";
const BTN_LOGIN = "//button[normalize-space()='Login']";

// ADD EMP SCREEN
const URL_ADD_EMP = "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee";
const FIRT_NAME_ADD= "//input[@placeholder='First Name']";
const MID_NAME_ADD = "//input[@placeholder='Middle Name']";
const LAST_NAME_ADD = "//input[@placeholder='Last Name']";
const ID_EMP_ADD = "(//input[@class='oxd-input oxd-input--active'])[2]";
const BTN_SAVE_EMP_ADD = "//button[normalize-space()='Save']";

//EDIT INFO EMP SCREEN 
const FIRT_NAME_EDIT = "//input[@placeholder='First Name']";
const MID_NAME_EDIT = "//input[@placeholder='Middle Name']" ;
const LAST_NAME_EDIT = "//input[@placeholder='Last Name']";
const ID_EMP_EDIT = "(//input[@class='oxd-input oxd-input--active'])[3]";
const BTN_SAVE_EMP_EDIT = "(//button[@type='submit'][normalize-space()='Save'])[1]";
const CHECK_URL_EDIT_INFO = "viewPersonalDetails/empNumber";

export default class Orange {
    get getUrlLogin() {
        return URL_LOGIN;
    }

    get getUserLogin() {
        return USER_LOGIN;
    }

    get getPassLogin() {
        return PASS_LOGIN;
    }

    get getBtnLogin() {
        return BTN_LOGIN;
    }
    /////////////////// add emp /////
    get getUrlAddEmp() {
        return URL_ADD_EMP;
    }

    get getFisrtNameAdd() {
        return FIRT_NAME_ADD;
    }

    get getLastNameAdd() {
        return LAST_NAME_ADD;
    }

    get getMidNameAdd() {
        return MID_NAME_ADD;
    }

    get getIdEmpAdd() {
        return ID_EMP_ADD;
    }

    get getBtnSaveEmpAdd() {
        return BTN_SAVE_EMP_ADD;
    }
    ///// edit info emp/////   
    get getFirstNameEdit() {
        return FIRT_NAME_EDIT;
    }

    get getMidNameEdit() {
        return MID_NAME_EDIT;
    }
    get getLastNameEdit() {
        return LAST_NAME_EDIT;
    }
    get getIdEmpEdit() {
        return ID_EMP_EDIT;
    }
    get getBtnSaveEmpEdit() {
        return BTN_SAVE_EMP_EDIT;
    }

    get getCheckUrlEditInfo() {
        return CHECK_URL_EDIT_INFO;
    }


}


    






