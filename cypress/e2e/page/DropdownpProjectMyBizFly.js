const CHOOSE_PROJECT_DROPDOWN = '//div[@class = "choose_project"]';
const BTN_CREATE_PROJECT = '//span[contains(text(),"Tạo dự án mới")]';
const BTN_SELECT_PROJECT = "(//span[@class='status text-success'][contains(text(),'Đang hoạt động')])[1]"

export default class DropdownProject {
    get getChooseProject() {
        return CHOOSE_PROJECT_DROPDOWN;
    }

    get getBtnCreateProject() {
        return BTN_CREATE_PROJECT;
    }

    get getBtnSelectProject() {
        return BTN_SELECT_PROJECT;
    }
}