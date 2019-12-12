// https://docs.cypress.io/api/introduction/api.html

describe('Expenser', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Expenser')
  })
})
