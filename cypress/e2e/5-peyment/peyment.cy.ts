describe('결제 테스트', () => {
  before(() => {
    cy.login({ username: '01087971558', password: '1558' });
    cy.addToCart();
    cy.addToCartSub();
  });

  it('장바구니에서 체크아웃 페이지로 이동후 결제를 진행한다.', () => {
    cy.get('[data-cy=cartBtn]').as('cartBtn');
    cy.get('@cartBtn').should('exist').click();

    cy.get('[data-cy=checkOutBtn]').as('checkOutBtn');
    cy.get('@checkOutBtn').should('exist').click();

    cy.get('[data-cy=nameInput]').as('nameInput');
    cy.get('@nameInput').type('박찬웅');
    cy.get('@nameInput').invoke('val').should('eq', '박찬웅');

    cy.get('[data-cy=emailInput]').as('emailInput');
    cy.get('@emailInput').type('ckehfqkr302@gmail.com');
    cy.get('@emailInput').invoke('val').should('eq', 'ckehfqkr302@gmail.com');

    cy.get('[data-cy=phoneInput]').as('phoneInput');
    cy.get('@phoneInput').type('01087971558');
    cy.get('@phoneInput').invoke('val').should('eq', '01087971558');

    cy.get('[data-cy=nextStepBtn]').should('exist').click();

    cy.get('[data-cy=recipientNameInput]').as('recipientNameInput');
    cy.get('@recipientNameInput').type('박찬웅');
    cy.get('@recipientNameInput').invoke('val').should('eq', '박찬웅');

    cy.get('[data-cy=recipientPhoneInput]').as('recipientPhoneInput');
    cy.get('@recipientPhoneInput').type('01087971558');
    cy.get('@recipientPhoneInput').invoke('val').should('eq', '01087971558');

    cy.get('[data-cy=deliveryTimeInput]').as('deliveryTimeInput');
    cy.get('@deliveryTimeInput').should('exist').click();

    cy.get('[data-cy=option5]').should('exist').click();

    cy.get('[data-cy=streetInput]').as('streetInput');
    cy.get('@streetInput').type('36');
    cy.get('@streetInput').invoke('val').should('eq', '36');

    cy.get('[data-cy=postalCodeInput]').as('postalCodeInput');
    cy.get('@postalCodeInput').type('15002');
    cy.get('@postalCodeInput').invoke('val').should('eq', '15002');

    cy.get('[data-cy=nextStepBtn]').should('exist').click();

    cy.get('[data-cy=cardNumberInput]').as('cardNumberInput');
    cy.get('@cardNumberInput').type('2134124124');
    cy.get('@cardNumberInput').invoke('val').should('eq', '2134124124');

    cy.get('[data-cy=dateInput]').as('dateInput');
    cy.get('@dateInput').type('04/24');
    cy.get('@dateInput').invoke('val').should('eq', '04/24');

    cy.get('[data-cy=cvvInput]').as('cvvInput');
    cy.get('@cvvInput').type('123');
    cy.get('@cvvInput').invoke('val').should('eq', '123');

    cy.get('[data-cy=nextStepBtn]').should('exist').click();

    cy.url().should('include', '/');
  });
});
