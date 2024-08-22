describe('장바구니 담기 테스트', () => {
  it('Home 페이지에서 카테고리 페이지(Flash Flower)로 이동한다.', () => {
    cy.visit('/');

    cy.get('[data-cy=action_0]').as('action0');
    cy.get('@action0').find('[data-cy=actionCardBtn]').as('actionCardBtn');
    cy.get('@actionCardBtn').should('exist').click();

    cy.intercept(
      {
        method: 'GET',
        url: '/fresh_flowers',
      },
      {
        fixture: 'freahFlowerDatas.json',
      }
    );

    cy.url().should('include', '/categories/fresh_flowers');
  });

  it('카테고리 페이지(Flash Flower)에서 상품(Snowfall) 페이지로 이동한다.', () => {
    cy.visit('/categories/fresh_flowers');
    cy.intercept(
      {
        method: 'GET',
        url: '/fresh_flowers',
      },
      {
        fixture: 'freahFlowerDatas.json',
      }
    );

    cy.get('[data-cy=fresh_flowers_1]').as('freshFlower1');
    cy.get('@freshFlower1').should('exist').click();

    cy.intercept(
      {
        method: 'GET',
        url: '/fresh_flowers/1',
      },
      {
        fixture: 'freshFlowerProduct.json',
      }
    );

    cy.url().should('include', '/categories/fresh_flowers/products/1');
  });

  it('상품(Snowfall) 페이지에서 원하는 상품(Snowfall) 갯수를 변경하고 장바구니에 담을 수 있다.', () => {
    cy.visit('/categories/fresh_flowers/products/1');

    cy.intercept(
      {
        method: 'GET',
        url: '/fresh_flowers/1',
      },
      {
        fixture: 'freshFlowerProduct.json',
      }
    );

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

  it('장바구니에서 상품(Snowfall)을 확인할 수 있다.', () => {
    cy.visit('/categories/fresh_flowers/products/1');

    cy.intercept(
      {
        method: 'GET',
        url: '/fresh_flowers/1',
      },
      {
        fixture: 'freshFlowerProduct.json',
      }
    );

    cy.get('[data-cy=addBtn]').as('addBtn');
    cy.get('@addBtn').should('exist').click();

    cy.get('[data-cy=cartBtn]').as('cartBtn');
    cy.get('@cartBtn').should('exist').click();
  });
});
