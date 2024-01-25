const BTN_CAU_HINH = "//span[contains(text(),'Cấu hình')]"
const BTN_DELETE_PROJECT = "//span[contains(text(),'Xoá dự án')]"
const BTN_DELETE_PROJECT_POPUP = "//a[@class='btn-delete-user submit_remove_project']"
const BTN_ADD_NHAN_SU = "(//span[@class='btn_text'][contains(text(),'Thêm nhân sự')])[1]"
const BTN_ADD_THANH_VIEN = "(//a[contains(text(),'Thêm thành viên')])[1]"
const TEXT_BOX_INVITE_EMAIL = "//div[@id='modalAddMember']//span[@role='textbox']"
const BTN_SUBMIT_INVITE_EMAIL = "//a[@class='btn btn-submit-invite-2 submit_member']"



export default class CauHinh {
    get getBtnCauHinh() {
        return BTN_CAU_HINH;
    }

    get getBtnDelProject() {
        return BTN_DELETE_PROJECT;
    }

    get getBtnDelProjectOnPopup() {
        return BTN_DELETE_PROJECT_POPUP;
    }

    get getBtnAddNhanSu() {
        return BTN_ADD_NHAN_SU;
    }

    get getBtnAddThanhVien() {
        return BTN_ADD_THANH_VIEN;
    }

    get getTextBoxInviteEmail() {
        return TEXT_BOX_INVITE_EMAIL;
    }

    get getBtnSubmitInviteEmail() {
        return BTN_SUBMIT_INVITE_EMAIL;
    }

}
