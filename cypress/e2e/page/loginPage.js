const URL = "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login";
const BANNER = ".box.mainhdr";
const BTN_HOME = ".btn.home";
const BTN_CUSTOMER_LOGIN = "button[ng-click='customer()']";
const BTN_MANAGER_LOGIN = "button[ng-click='manager()']";


export default class Login {
    get getURL () {
        return URL;
    }

    get getBanner () {
        return BANNER;
    }

    get getBtnHome () {
        return BTN_HOME;
    }

    get getBtnCustomerLogin () {
        return BTN_CUSTOMER_LOGIN;
    }

    get getBtnManagerLogin () {
        return BTN_MANAGER_LOGIN;
    }

}