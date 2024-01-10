///<reference types="cypress"/>

// using fixtures

before(function () {
    cy.fixture('example.json').as('test_data')
})
it('Read files using Fixture', function () {
    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })

    cy.log(this.test_data.name)
})

//using readFile

it('Read using readFile()', function () {
    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })
})

it('Write file demo', function(){
    cy.writeFile('sample.txt', 'Hello, I am Agata')
})