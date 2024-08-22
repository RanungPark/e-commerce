declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to log in
     * @param username - The username for login
     * @param password - The password for login
     * @example cy.login('user@example.com', 'password123')
     */
    login({
      username,
      password,
    }: {
      username: string;
      password: string;
    }): Chainable<JQuery<HTMLElement>>;

    addToCart(): Chainable<JQuery<HTMLElement>>;
    addToCartSub(): Chainable<JQuery<HTMLElement>>;
  }
}
