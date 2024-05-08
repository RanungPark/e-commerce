import { mixins } from 'src/styles/Mixin';
import { css } from 'styled-components';

export const DefaultStyle = css`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      ${mixins.input({ colorAndFill: 'gray', borderColor: 'lightgray' })}
      &:hover {
        border: 1px solid ${colors.gray};
      }

      &:focus {
        outline: none;
        border: 2px solid ${colors.gray};

        &::placeholder {
          color: ${colors.lightgray};
        }
      }

      &:disabled {
        background-color: ${colors.extralight};
        border: 1px solid ${colors.lightgray};
        cursor: not-allowed;

        &::placeholder {
          color: ${colors.lightgray};
        }
      }

      &[value]:not([value='']) {
        border: 1px solid ${colors.black};
      }
    `;
  }}
`;

export const SuccessStyle = css`
  ${mixins.input({ colorAndFill: 'succeess', borderColor: 'succeess' })}
  &:focus {
    color: ${({ theme }) => theme.colors.succeess};
  }
`;

export const ErrorStyle = css`
  ${mixins.input({ colorAndFill: 'error', borderColor: 'error' })}
  &:focus {
    color: ${({ theme }) => theme.colors.error};
  }
`;
