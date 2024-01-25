const BTN_GIAIPHAP_BIZCRM = "//button[@data-name='BizCRM']";
const BTN_START_NOW = '//button[contains(text(),"Bắt đầu sử dụng ngay")]';

export default class CreateProject {
    get getBtnGiaiPhapBizCrm() {
        return BTN_GIAIPHAP_BIZCRM;
    }

    get getBtnStartNow() {
        return BTN_START_NOW;
    }

}