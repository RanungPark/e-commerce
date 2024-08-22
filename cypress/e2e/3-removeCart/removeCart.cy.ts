describe('장바구니 제거 테스트', () => {
  beforeEach(() => {
    cy.addToCart();
  });

  it('장바구니에 담긴 상품(Snowfall)을 제거할 수 있다.', () => {
    cy.get('[data-cy=cartBtn]').as('cartBtn');
    cy.get('@cartBtn').should('exist').click();

    cy.get('[data-cy=cart_fresh_flowers_1]').as('cartFreshFlowers1');
    cy.get('@cartFreshFlowers1')
      .find('[data-cy=cartItemRemoveBtn]')
      .as('cartItemRemoveBtn');
    cy.get('@cartItemRemoveBtn').should('exist').click();
  });
});
