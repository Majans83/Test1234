class Loginpage {

    get emailInputField() {
        return cy.get('input[type="email"]');
    }
    get passwordInputField() {
        return cy.get('input[type="password"]');
    }    
    
    get LoginBtn() {
        return cy.get('button[type="submit"]');
    }

    get addNewOrg(){
        return cy.get('.vs-c-my-organization--add-new');
    }

    get logoutBtn() {
        return cy.get('button[class="vs-c-btn vs-c-btn--link vs-c-btn--danger"]');
    }

    get userName() {
        return cy.get('.vs-c-user-name');
    }

    get addNew() {
        return cy.contains('Add New');
    }
    get addOrg() {
        return cy.contains('Add Organization');
    }
    
    get orgName() {
        return cy.get('input[placeholder="Enter name..."]');
    }
    
    get nextBtn() {
        return cy.get('[name="next_btn"]');
    }
    
    get createBtn() {
        return cy.get('button[name="next_btn"]');
    }

    get upload() {
        return cy.get('div[class="el-upload-dragger"]');
    }

    get saveBtn() {
        return cy.get('button[name="save-btn"]');
    }

    get settings() {
        return cy.get('a[href="/organizations/28290/settings"]');
    }
    get uploader() {
        return cy.get('div[class="vs-c-avatar vs-c-settings-avatar-uploader"]');
    }

    get content() {
        return cy.contains('new org');
    }

    get inputField() {
        return cy.contains('Choose a logo or drop it here');
    }

    get deleteBtn() {
        return cy.get('button[class="vs-c-btn vs-c-btn--warning vs-c-btn--spaced"]');
    }

    get placeholder() {
        return cy.get('input[placeholder="Enter current password"]');
    }

    get yessBtn() {
        return cy.get('.el-button--success');
    }
login(email, password) {
    loginPage.emailInputField.type('maja.turanski+2019@gmail.com');
    loginPage.passwordInputField.type('thermaltake2019');
    loginPage.LoginBtn.click();
}
}

export const loginPage = new Loginpage()

