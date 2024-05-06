import { OptionalSpecifyColorProps } from 'src/@types/mixin/specifyColor';
import { OptionalFromFlexBoxProps } from 'src/@types/mixin/flexbox';
import { css } from 'styled-components';

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
  specifyColor: ({
    colorAndFill,
    bgColor,
    borderColor,
  }: OptionalSpecifyColorProps) => {
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
