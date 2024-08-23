Cypress.Commands.add('login', ({ username, password }) => {
  cy.visit('/');
  cy.visit('/login');

  cy.get('[data-cy=phoneInput]').as('phoneInput');
  cy.get('@phoneInput').type(username);

  cy.get('[data-cy=phoneBtn]').should('exist').click();

  cy.get('[data-cy=passwordInput]').as('passwordInput');
  cy.get('@passwordInput').type(password);

  cy.get('[data-cy=passwordBtn]').should('exist').click();
});

Cypress.Commands.add('addToCart', () => {
  cy.visit('/');

  cy.get('[data-cy=action_0]')
    .find('[data-cy=actionCardBtn]')
    .should('exist')
    .click();

  cy.get('[data-cy=fresh_flowers_1]')
    .as('freshFlower1')
    .should('exist')
    .click();

  cy.get('[data-cy=plusBtn]').as('plusBtn').should('exist').click();

  cy.get('[data-cy=addBtn]').as('addBtn').should('exist').click();
});

Cypress.Commands.add('addToCartSub', () => {
  cy.get('[data-cy=fresh_flowers_4_CarouseBtn]').as('freshFlower4CarouseBtn');
  cy.get('@freshFlower4CarouseBtn').should('exist').click();

  cy.url().should('include', '/categories/fresh_flowers/products/4');

  cy.get('[data-cy=plusBtn]').as('plusBtn');
  cy.get('@plusBtn').should('exist').click();

  cy.get('[data-cy=addBtn]').as('addBtn');
  cy.get('[data-cy=addBtn]').should('exist').click();

  cy.get('[data-cy=aroma_candles_1]').as('aromaCandles1');
  cy.get('@aromaCandles1').should('exist').click();

  cy.url().should('include', '/categories/aroma_candles/products/1');

  cy.get('[data-cy=addBtn]').as('addBtn');
  cy.get('[data-cy=addBtn]').should('exist').click();
});
