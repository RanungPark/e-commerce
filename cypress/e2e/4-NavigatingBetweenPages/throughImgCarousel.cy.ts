describe('상품 페이지간 이동 테스트', () => {
  beforeEach(() => {
    cy.addToCart();
  });

  it('이미지 케러셀을 통해 같은 카테고리의 다른 상품의 페이지로 이동할 수 있다.', () => {
    cy.get('[data-cy=fresh_flowers_4_CarouseBtn]').as('freshFlower4CarouseBtn');
    cy.get('@freshFlower4CarouseBtn').should('exist').click();

    cy.url().should('include', '/categories/fresh_flowers/products/4');

    cy.get('[data-cy=plusBtn]').as('plusBtn');
    cy.get('@plusBtn').should('exist').click();

    cy.get('[data-cy=addBtn]').as('addBtn');
    cy.get('[data-cy=addBtn]').should('exist').click();
  });
});
