/// <reference types = "Cypress" />

import { loginPage } from "../page_objects/loginPOM";

describe ('login to', () => {

    it('Successful login', () => {
cy.visit('/login');
loginPage.emailInputField.type('maja.turanski+2019@gmail.com');
loginPage.passwordInputField.type('thermaltake2019');
loginPage.LoginBtn.click();

cy.url().should('contains', '/my-organizations');
loginPage.LoginBtn.should('not.exist');
loginPage.addNewOrg.should('be.visible');
loginPage.logoutBtn.should('not.exist');
loginPage.userName.should('be.visible');

    })

    it('Create new organization', () => {
        cy.visit('/login');
        loginPage.login('maja.turanski+2019@gmail.com', 'thermaltake2019');
        loginPage.addNew.click();
        loginPage.addOrg.click();
        loginPage.orgName.type('new org');
        loginPage.nextBtn.click();
        loginPage.createBtn.click();
        cy.url().should('contains', '/my-organizations');
        
    })
    it.only ('Add logo to organization', () => {
        cy.visit('/login');
        loginPage.login('maja.turanski+2019@gmail.com', 'thermaltake2019');
        cy.wait(3000);
        cy.visit('/organizations/28290/boards');
        cy.visit('/organizations/28290/settings');
        loginPage.deleteBtn.click();
        loginPage.placeholder.type('thermaltake2019');
        loginPage.yessBtn.click();
        
        



    })
})
