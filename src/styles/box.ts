import { css } from 'styled-components';

function box() {
  return Array(100)
    .fill(1)
    .reduce((prev, curr, currIndex) => {
      const index = currIndex;
      const size = 8;

      return css`
        .m-${index} {
          margin: ${index * size}px;
        }
        .mt-${index} {
          margin-top: ${index * size}px;
        }
      `;
    }, '');
}
