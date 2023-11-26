import UiLogin from "../page/UI_LogIn_OrangeHRM";
import UiAddEmp from "../page/UI_AddEmployee_OrangeHRM";
import UiDetailInfo from "../page/UI_DetailEmp_OrangeHRM";
import UiListEmp from "../page/UI_ListEmp_OrangeHRM";
import DataOrange from "../../fixtures/DataORANGE.json";

const uiLogin = new UiLogin();
const uiAddEmp = new UiAddEmp();
const uiDetailInfo = new UiDetailInfo();
const uiListEmp = new UiListEmp();

describe("ORANGE ", () => {
    it("TC1 - Create new info and update, search info of an Emp is success", () =>{
        //LOGIN
        uiLogin.getUrlVisit;
        uiLogin.getUsername;
        uiLogin.getPassWord;
        uiLogin.getBtnLoginClick;

        // VERIFY DIRECT TO DASHBOARD PAGE
        cy.verifiURL(DataOrange.verifi_url.dashboard_url);

        //MOVE TO CREATE NEW EMPLOYEE
        uiAddEmp.getUrlVisit;
        uiAddEmp.getFirstNameInput;
        uiAddEmp.getMidNameInput;
        uiAddEmp.getLastNameInput;
        uiAddEmp.getIdEmpInput;
        uiAddEmp.getBtnSaveClick;
        cy.verifiURL(DataOrange.verifi_url.detail_info_emp_url);

        // UPDATE INFO HAS JUST CREATED
        uiDetailInfo.getFirstNameInput;
        uiDetailInfo.getMidNameInput;
        uiDetailInfo.getLastNameInput;
        uiDetailInfo.getIdEmpInput;
        uiDetailInfo.getBtnSave1Click;
        cy.verifiURL(DataOrange.verifi_url.detail_info_emp_url);
        cy.verifiDataInputedCSS(uiDetailInfo.getFirstName, DataOrange.data_edit_info_emp.firstNameEdit);
        cy.verifiDataInputedCSS(uiDetailInfo.getMidName, DataOrange.data_edit_info_emp.midNameEdit);
        cy.verifiDataInputedCSS(uiDetailInfo.getLastName, DataOrange.data_edit_info_emp.lastNameEdit);
        cy.verifiDataInputedXpath(uiDetailInfo.getIdEmp, DataOrange.data_edit_info_emp.idEmpEdit);

        // SEARCH AN EMPLOYEE BY ID_EMP, HAS DATA RESPONE
        uiListEmp.getUrl;
        uiListEmp.getIdEmpInput;
        uiListEmp.getBtnSearchClick;
        uiListEmp.FindEmpReturnData;

    




        


    })
})