import { css } from 'styled-components';

const base = css`
  #root {
    font-family: 'Roboto', sans-serif;
  }
  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }
  path {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

export default base;
