const URL = 'https://my.bizfly.vn/embed/login?type_view=&is_login=0';
const USERNAME = '//input[@placeholder="Nhập Email hoặc SĐT tài khoản VietID của bạn"]';
const BTN_CONTINUE = '//div/button/span[@class="btn-login"]';
const PASSWORD = '//input[@id="show-pass"]';
const BTN_LOGIN = '//button[contains(text(),"Đăng nhập bằng ViệtID")]';

export default class Login {
    get getURL() {
        return URL;
    }

    get getUsername() {
        return USERNAME;
    }

    get getPassword() {
        return PASSWORD;
    }

    get getBtnContinue() {
        return BTN_CONTINUE;
    }

    get getBtnLogin() {
         return BTN_LOGIN;
    }

    
}
