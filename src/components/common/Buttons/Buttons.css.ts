import { mixins } from 'src/styles/Mixin';
import { css } from 'styled-components';
import { PickContainedButtonProps } from '.';
import {
  PrimaryStyle,
  SecondaryStyle,
  TertiaryyStyle,
} from './FiledButton.css';

export const StyledButton = {
  contained: ({ colorType }: PickContainedButtonProps) => {
    return css`
      ${mixins.flexBox({})}
      padding: 16px 24px 14px 24px;
      min-width: 175px;
      width: 100%;
      height: 56px;
      gap: 8px;
      ${colorType === 'primary' && PrimaryStyle}
      ${colorType === 'secondary' && SecondaryStyle}
      ${colorType === 'tertiary' && TertiaryyStyle}
    `;
  },
  none: () => {
    return css`
      ${({ theme }) => {
        const { colors } = theme;
        return css`
          ${mixins.flexBox({})}
          width: auto;
          height: auto;
          padding: 0;
          border: none;
          background-color: inherit;
          gap: 4px;
          position: relative;

          &:hover {
            color: ${colors.gray};
          }

          &:active {
            color: ${colors.black};
          }

          &:disabled {
            color: ${colors.lightgray};
            cursor: not-allowed;
          }

          &:hover::after,
          &:active::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 1px;
            background-color: ${colors.black};
          }
        `;
      }}
    `;
  },
};
