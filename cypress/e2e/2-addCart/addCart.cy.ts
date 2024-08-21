describe('장바구니 담기 테스트', () => {
  it('Home 페이지에서 Flash Flower 카테고리 페이지로 이동한다.', () => {
    cy.visit('/');

    cy.get('[data-cy=action_0]')
      .find('[data-cy=actionCardBtn]')
      .should('exist')
      .click();

    cy.url().should('include', '/categories/fresh_flowers');
  });

  it('Flash Flower 카테고리 페이지에서 Snowfall 상품 페이지로 이동한다.', () => {
    cy.visit('/categories/fresh_flowers');

    cy.get('[data-cy=fresh_flowers_1]').should('exist').click();

    cy.url().should('include', '/categories/fresh_flowers/products/1');
  });

  it('Snowfall 상품 페이지에서 원하는 상품 갯수를 변경하고 장바구니에 담을 수 있다.', () => {
    cy.visit('/categories/fresh_flowers/products/1');

    cy.get('[data-cy=quantityInput]').as('quantityInput');
    cy.get('@quantityInput').invoke('val').should('eq', '1');

    cy.get('[data-cy=plusBtn]').as('plusBtn');
    cy.get('[data-cy=minusBtn]').as('minusBtn');

    cy.get('@plusBtn').should('exist').click();
    cy.get('@quantityInput').invoke('val').should('eq', '2');

    cy.get('@minusBtn').should('exist').click();
    cy.get('@quantityInput').invoke('val').should('eq', '1');

    cy.get('[data-cy=addBtn]').as('addBtn');
    cy.get('[data-cy=addBtn]').should('exist').click();
  });

  it('Snowfall 장바구니에서 상품을 확인할 수 있다.', () => {
    cy.visit('/categories/fresh_flowers/products/1');

    cy.get('[data-cy=addBtn]').should('exist').click();
    cy.get('[data-cy=cartBtn]').should('exist').click();
  });
});
