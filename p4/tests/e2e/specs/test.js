// https://docs.cypress.io/api/introduction/api.html

describe('Expenser', () => {
  // check if the home page shows 3 responsibility divs
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains("h1", "Expenser");
    cy.get("[data-test='name']").its('length').should('be.eq', 3);
  }),

    //as the person is retrieved from a different api, make sure the correct person name is displayed
    it('shows the correct person name', () => {
      cy.visit('/');
      cy.get("[data-test='name']").first().contains('Satya');
    })

  //click on the Pay Now button of p2 person and verify the Paid text
  it('Click the pay now button and verify text', () => {
    cy.visit('/')
    cy.get("[data-test='paid-status']#p2 > button").click();
    cy.get("[data-test='paid-status']#p2 > [data-test='paid-clicked']").contains("Paid!!!")
  }),

    //Navigate to a different page and in the home page should show the date
    it('verifies the paid date', () => {
      cy.visit('/friends')
      cy.visit('/')
      cy.get("[data-test='paid-money-date']#p2").contains("2019")
    })

  //navigate to expenses page and verify the count of expenses
  it('Visits the Expenses page', () => {
    cy.visit('/expenses');
    cy.get("[data-test='expense-description']").its('length').should('be.gte', 5);
  })

  //navigate to expenses page and verify the count of expenses
  it('Visits the Friends page', () => {
    cy.visit('/friends');
    cy.get("[data-test='name']").its('length').should('be.eq', 3);
  })


})
