describe('로그인 테스트', () => {
  /**
   * given - 로그인 페이지에 접근한다.
   * when - 아이디를 입력하고 확인 버튼을 클릭한후 비밀번호를 입력하고 확인 버튼을 클릭한다.
   * then - 로그인에 성공하면 메인 화면으로 이동한다.
   */
  it('사용자가 아이디와 비밀번호를 사용해서 로그인을 한다.', () => {
    cy.visit('/');
    cy.visit('/login');

    cy.get('[data-cy=phoneInput]').as('phoneInput');
    cy.get('@phoneInput').type('01087971558');
    cy.get('@phoneInput').invoke('val').should('eq', '01087971558');

    cy.get('[data-cy=phoneButton]').should('exist').click();

    cy.intercept({
      method: 'POST',
      url: '/login',
    }).as('login');

    cy.get('[data-cy=passwordInput]').as('passwordInput');
    cy.get('@passwordInput').type('1558');
    cy.get('@passwordInput').invoke('val').should('eq', '1558');

    cy.get('[data-cy=passwrodButton]').should('exist').click();
    cy.intercept({
      method: 'POST',
      url: '/join',
    }).as('join');
  });
});
