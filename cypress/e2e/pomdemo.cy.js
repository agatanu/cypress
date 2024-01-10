import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

describe('All Login Tests', () => {

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })

    it('Valid login', function () {

        loginPage.enterUserName('Admin')
        loginPage.enterUserPassword('admin123')
        loginPage.clickLogin()

    })

    it('Invalid login', function () {

        loginPage.enterUserName('Admin')
        loginPage.enterUserPassword('admin1234444')
        loginPage.clickLogin()
        loginPage.verifyAlertIsVisible()

    })

})
