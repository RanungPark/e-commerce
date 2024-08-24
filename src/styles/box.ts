import { css } from 'styled-components';

export function box() {
  return Array(100)
    .fill(1)
    .reduce(
      (prev, curr, currIndex) => {
        const index = currIndex;
        const size = 8;

        return css`
          ${prev}
          &.m-${index} {
            margin: ${index * size}px;
          }
          &.mt-${index} {
            margin-top: ${index * size}px;
          }
          &.mb-${index} {
            margin-bottom: ${index * size}px;
          }
          &.mr-${index} {
            margin-right: ${index * size}px;
          }
          &.ml-${index} {
            margin-left: ${index * size}px;
          }
          &.p-${index} {
            padding: ${index * size}px;
          }
          &.pt-${index} {
            padding-top: ${index * size}px;
          }
          &.pb-${index} {
            padding-bottom: ${index * size}px;
          }
          &.pr-${index} {
            padding-right: ${index * size}px;
          }
          &.pl-${index} {
            padding-left: ${index * size}px;
          }
          &.b-${index} {
            border: ${index}px solid ${({ theme }) => theme.colors.black};
          }
          &.bt-${index} {
            border-top: ${index}px solid ${({ theme }) => theme.colors.black};
          }
          &.bb-${index} {
            border-bottom: ${index}px solid ${({ theme }) => theme.colors.black};
          }
          &.br-${index} {
            border-right: ${index}px solid ${({ theme }) => theme.colors.black};
          }
          &.bl-${index} {
            border-left: ${index}px solid ${({ theme }) => theme.colors.black};
          }
        `;
      },
      css`
        &.m-half {
          margin: 4px;
        }
        &.mt-half {
          margin-top: 4px;
        }
        &.mb-half {
          margin-bottom: 4px;
        }
        &.mr-half {
          margin-right: 4px;
        }
        &.ml-half {
          margin-left: 4px;
        }
        &.p-half {
          padding: 4px;
        }
        &.pt-half {
          padding-top: 4px;
        }
        &.pb-half {
          padding-bottom: 4px;
        }
        &.pr-half {
          padding-right: 4px;
        }
        &.pl-half {
          padding-left: 4px;
        }
      `,
    );
}
