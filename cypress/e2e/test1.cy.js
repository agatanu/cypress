///<reference types="cypress"/>

it('Google Search', () => {

   cy.visit ('https://google.com')

   cy.get('#L2AGLb').click()

   cy.get('#APjFqb').type("Automation Step by Step{enter}")

   cy.wait(1000)

   cy.contains('Wideo', {timeout:5000}).click()

})