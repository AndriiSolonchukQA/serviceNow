import {commonConsts} from "../consts/common";

export const checkingBackLink = () => {
    return cy.get(commonConsts.locators.backButton)
             .click()
             .url().should('be.equal',commonConsts.urls.loginPageUrl);
};

export const checkValidationErrorVisisble = () => {
    return  cy.get(commonConsts.locators.submitButton)
        .click()
        .get(commonConsts.locators.validationError)
        .should('be.visible')
        .and('contain', commonConsts.strings.emptyFieldsAllErrorMessage);
};