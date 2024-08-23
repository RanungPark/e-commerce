describe('로그인 테스트', () => {
  it('아이디와 비밀번호를 사용해서 로그인을 한다.', () => {
    //given - 로그인 페이지에 접근한다.
    cy.visit('/');
    cy.visit('/login');

    // 로그인 요청을 미리 intercept하여 대기
    cy.intercept({
      method: 'POST',
      url: '/login',
    }).as('login');

    // when - 아이디를 입력하고 확인 버튼을 클릭한후 비밀번호를 입력하고 확인 버튼을 클릭한다.
    cy.get('[data-cy=phoneInput]').as('phoneInput');
    cy.get('@phoneInput').type('01087971558');
    cy.get('@phoneInput').invoke('val').should('eq', '01087971558');
    cy.get('[data-cy=phoneBtn]').should('exist').click();

    cy.intercept({
      method: 'POST',
      url: '/join',
    }).as('join');

    cy.get('[data-cy=passwordInput]').as('passwordInput');
    cy.get('@passwordInput').type('1558');
    cy.get('@passwordInput').invoke('val').should('eq', '1558');
    cy.get('[data-cy=passwordBtn]').should('exist').click();

    //then - 로그인에 성공하면 직전 페이지로 이동한다.
    cy.url().should('include', '/');
  });

  it('로그인 진행 메시지가 나타난다.', () => {
    //given - 로그인 페이지에 접근한다.
    cy.visit('/login');

    // when - 존재하는 아이디 입력한다.
    cy.get('[data-cy=phoneInput]').as('phoneInput');
    cy.get('@phoneInput').type('01087971558');
    cy.get('[data-cy=phoneBtn]').should('exist').click();

    //then - 진행 메시지를 확인한다.
    cy.get('[data-cy=loginHelp]')
      .should('be.visible')
      .and('have.text', '로그인을 진행해주세요');
  });

  it('회원가입 진행 메시지가 나타난다.', () => {
    //given - 로그인 페이지에 접근한다.
    cy.visit('/login');

    // when - 존재하지 않은 아이디를 입력한다.
    cy.get('[data-cy=phoneInput]').as('phoneInput');
    cy.get('@phoneInput').type('01011112222');
    cy.get('[data-cy=phoneBtn]').should('exist').click();

    //then - 진행 메시지를 확인한다.
    cy.get('[data-cy=loginHelp]')
      .should('be.visible')
      .and('have.text', '회원가입을 진행해주세요');
  });

  it('아이디를 입력하지 않은 경우 에러 메시지가 나타난다.', () => {
    //given - 로그인 페이지에 접근한다.
    cy.visit('/login');

    // when - 아이디를 입력하지 않고 확인 버튼을 클릭한다.
    cy.get('[data-cy=phoneInput]').as('phoneInput');
    cy.get('[data-cy=phoneBtn]').should('exist').click();

    //then - 에러 메시지를 확인한다.
    cy.get('[data-cy=phoneHelp]')
      .should('be.visible')
      .and('have.text', 'ID를 입력해주세요');
  });

  it('아이디가 전화번호 형식이 아닐 경우 에러 메시지가 나타난다.', () => {
    //given - 로그인 페이지에 접근한다.
    cy.visit('/login');

    // when - 전화번호 형식이 아닌 아이디를 입력 후 확인 버튼을 클릭한다.
    cy.get('[data-cy=phoneInput]').as('phoneInput');
    cy.get('@phoneInput').type('아이디');
    cy.get('[data-cy=phoneBtn]').should('exist').click();

    //then - 에러 메시지를 확인한다.
    cy.get('[data-cy=phoneHelp]')
      .should('be.visible')
      .and('have.text', `'-' 없이 전화번호를 입력해주세요.`);
  });

  it('비밀번호가 틀렸을 경우 에러 메시지가 나타난다.', () => {
    //given - 로그인 페이지에 접근한다.
    cy.visit('/login');

    // when - 존재하는 아이디를 입력후 틀린 비밀번호를 입력한다.
    cy.get('[data-cy=phoneInput]').as('phoneInput');
    cy.get('@phoneInput').type('01087971558');
    cy.get('[data-cy=phoneBtn]').should('exist').click();

    cy.get('[data-cy=passwordInput]').as('passwordInput');
    cy.get('@passwordInput').type('1');
    cy.get('[data-cy=passwordBtn]').should('exist').click();

    //then - 에러 메시지를 확인한다.
    cy.get('[data-cy=passwordHelp]')
      .should('be.visible')
      .and('have.text', `로그인을 실패 하였습니다.`);
  });

  it('edit 버튼을 클릭하면 아이디를 다시 입력할 수 있다.', () => {
    //given - 로그인 페이지에 접근한다.
    cy.visit('/login');

    // when - 아이디 입력 완료 후 edit버튼을 클릭한다.
    cy.get('[data-cy=phoneInput]').as('phoneInput');
    cy.get('@phoneInput').type('01087971558');
    cy.get('[data-cy=phoneBtn]').should('exist').click();

    cy.get('[data-cy=phoneEdit]').should('exist').click();

    //then - 에러 메시지를 확인한다.
    cy.get('@phoneInput').should('be.visible');
  });
});
