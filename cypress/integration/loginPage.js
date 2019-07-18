import {commonConsts} from "../consts/common";

let PurchaseStartedOccurancesNumber;
context('Login Page Tests', () => {
    before(() => {
        cy.visit(commonConsts.urls.loginPageUrl);
    });

    it('Login', () => {
        cy.request({
            methhod:"GET",
            url: "https://api.appsee.com/events?apikey=8ca3c900cc1f436986d846940d8542c8&apisecret=423467cf645cff1288d3a768&fromdate=2019-07-17&todate=2019-07-18",
        }).then(response =>{
            PurchaseStartedOccurancesNumber = response.body.Events[0].Occurrences;
            return response;
        });

        cy.get(commonConsts.locators.usernameInput)
            .type(commonConsts.strings.username)
            .get(commonConsts.locators.usernamePassword)
            .type(commonConsts.strings.password)
            .get(commonConsts.locators.loginButton)
            .click()
            .get(".appsee-icon_analytics")

    });

    it('Event row occurences value test', () => {
          cy.request('/home/shoppie#/analytics/custom-events#all/all/range,07-17-2019,07-18-2019/all')
            .get(commonConsts.locators.PurchaseStarted).should('have.text', PurchaseStartedOccurancesNumber);
    });

});
