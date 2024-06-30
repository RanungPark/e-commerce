import { css } from 'styled-components';

export const CheckBoxStyle = css`
  position: relative;

  & svg {
    display: none;
  }

  & input,
  p {
    vertical-align: text-top;
  }

  & input {
    &:checked {
      & + svg {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  &:active {
    & input {
      border: 1px solid ${({ theme }) => theme.colors.darkgray};
    }

    & path {
      fill: ${({ theme }) => theme.colors.gray};
    }
  }
`;

export const RadioButtonStyle = css`
  & input,
  p {
    vertical-align: text-top;
  }

  & input {
    border-radius: 50%;
    position: relative;

    &:checked {
      &::before {
        content: '';
        border-radius: 50%;
        width: 14px;
        height: 14px;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.black};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  &:active {
    & input {
      border: 1px solid ${({ theme }) => theme.colors.gray};

      &::before {
        background-color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;
