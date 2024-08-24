import { css } from 'styled-components';

import { OptionalFromFlexBoxProps } from 'src/@types/mixin/flexbox';
import { OptionalButtonProps } from 'src/@types/mixin/nodeToColor';

export const mixins = {
  flexBox: ({
    display = 'flex',
    direction = 'row',
    justify = 'center',
    align = 'center',
  }: OptionalFromFlexBoxProps) => css`
    display: ${display};
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,

  border: ({ width }: { width: 'right' | 'leftAndBottom' }) => css`
    ${({ theme }) => {
      const { black } = theme.colors;
      if (width === 'right') {
        return css`
          border-right: 1px solid ${black};
        `;
      } else if (width === 'leftAndBottom') {
        return css`
          border-left: 1px solid ${black};
          border-bottom: 1px solid ${black};
        `;
      }
    }}
  `,

  button: ({ colorAndFill, bgColor, borderColor }: OptionalButtonProps) => {
    return css`
      ${({ theme }) => {
        const { colors } = theme;
        return css`
          color: ${colors[colorAndFill]};
          background-color: ${bgColor ? colors[bgColor] : 'inherit'};
          border: ${borderColor ? `1px solid ${colors[borderColor]}` : `none`};
          & path {
            fill: ${colors[colorAndFill]};
          }
        `;
      }}
    `;
  },
};
