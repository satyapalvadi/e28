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
    cy.get("[data-test='paid-status']#p2 > [data-test='paid-clicked']").contains("Paid!!!");
    cy.visit('/expenses')
    cy.visit('/')
    cy.get("[data-test='paid-money-date']#p2").contains("2019")
  }),

    //navigate to expenses page and verify the count of expenses
    it('Visits the Expenses page', () => {
      cy.get('#expenses').click();
      cy.get("[data-test='expense-description']").its('length').should('be.gte', 5);
    })

  //navigate to expenses page and verify the count of expenses
  it('Visits the Friends page', () => {
    cy.get('#friends').click();
    cy.get("[data-test='name']").its('length').should('be.eq', 3);
  })


  it('verify the create expense', () => {
    let expense = {
      description:'Movies on 12/25',
      amount:'200',
      date: "2019-12-25",
      paidBy: "p1",
      splitters: "p1-50,p2-50"
    }

    cy.get('#add').click();
    cy.get('[data-test=expense-description-input]').type(expense.description);
    cy.get('[data-test=expense-amount-input]').type(expense.amount);
    cy.get('[data-test=expense-paidBy-input]').type(expense.paidBy);
    cy.get('[data-test=expense-date-input]').type(expense.date);
    cy.get('[data-test=expense-splitters-input]').type(expense.splitters);
    cy.get('[data-test=add-expense-button]').click();
    cy.get("[data-test='name']").its('length').should('be.eq', 3);

  })

})
