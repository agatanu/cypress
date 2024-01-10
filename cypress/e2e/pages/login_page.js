export class LoginPage{

    username_textbox = '[name=username]'
    password_textbox = '[name=password]'
    submit_button = '[type=submit]'
    login_alert = '.oxd-alert'

    enterUserName(username){
        cy.get(this.username_textbox).type(username)
    }

    enterUserPassword(pass){
        cy.get(this.password_textbox).type(pass)
    }

    clickLogin(){
        cy.get(this.submit_button).click()  
    }

    verifyAlertIsVisible(){
        cy.get(this.login_alert).should('be.visible')
    }
}