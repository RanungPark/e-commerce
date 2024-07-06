import { css } from 'styled-components';

export const DefaultStyle = css`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      border: 1px solid ${({ theme }) => theme.colors.lightgray};
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
  border: 1px solid ${({ theme }) => theme.colors.success};
  &:focus {
    color: ${({ theme }) => theme.colors.success};
  }

  & p {
    color: ${({ theme }) => theme.colors.success};
  }
`;

export const ErrorStyle = css`
  border: 1px solid ${({ theme }) => theme.colors.error};
  &:focus {
    color: ${({ theme }) => theme.colors.error};
  }
`;
