import { mixins } from 'src/styles/Mixin';
import { css } from 'styled-components';
import { ImageCardsProps } from '.';

interface ImageCardsCSS extends ImageCardsProps {}

type PickImageCardProps = Pick<ImageCardsCSS, 'productImg'>;

export const StyledImageCard = {
  main: ({ productImg }: PickImageCardProps) => {
    return css`
      ${({ theme }) => {
        const { colors } = theme;
        return css`
          ${mixins.flexBox({})}
          border-bottom: 1px solid ${colors.black};
          border-left: 1px solid ${colors.black};
          position: relative;
          background-image: url(${productImg});
          background-size: cover;
          width: 100%;
          height: ${768 / 2}px;
          padding: 24px;

          & h6,
          & p {
            text-align: center;
          }
        `;
      }}
    `;
  },
  sub: () => {
    return css`
      ${({ theme }) => {
        const { colors } = theme;
        return css`
          width: 100px;
          height: auto;

          & img {
            border: 1px solid ${colors.lightgray};
            width: auto;
            height: 100px;
            margin-bottom: 8px;
          }

          &:hover {
            & img {
              border: 1px solid ${colors.gray};
            }
          }

          &:active {
            & img {
              border: 1px solid ${colors.black};
            }
          }
        `;
      }}
    `;
  },
};
