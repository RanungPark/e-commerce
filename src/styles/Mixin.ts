import { css } from "styled-components";

export const mixins = {
  flexBox: (direction = 'row',justify = 'center', align = 'center', ) => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,
};
