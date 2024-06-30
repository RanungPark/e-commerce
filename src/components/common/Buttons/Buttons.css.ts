import { ButtonsProps } from '.';
import { css } from 'styled-components';
import {
  PrimaryStyle,
  SecondaryStyle,
  TertiaryyStyle,
} from './FiledButton.css';
import { mixins } from '@styles/Mixin';

interface ButtonCSS extends ButtonsProps {}

type PickContainedButtonProps = Pick<ButtonCSS, 'colorType'>;

export const StyledButton = {
  contained: ({ colorType }: PickContainedButtonProps) => {
    return css`
      ${mixins.flexBox({})}
      padding: 16px 24px 14px 24px;
      min-width: 175px;
      width: 100%;
      height: 56px;
      gap: 8px;
      ${colorType === 'primary' ? PrimaryStyle : null}
      ${colorType === 'secondary' ? SecondaryStyle : null}
      ${colorType === 'tertiary' ? TertiaryyStyle : null}
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
