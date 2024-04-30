import { css } from "styled-components";

const base = css`
  #root {
    font-family: "Roboto", sans-serif;
  }
  body: {
    margin: auto;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export default base;