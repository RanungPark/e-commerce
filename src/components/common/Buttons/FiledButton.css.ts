import { mixins } from '@styles/Mixin';
import { css } from 'styled-components';

export const PrimaryStyle = css`
  ${mixins.button({ colorAndFill: 'white', bgColor: 'black' })};

  &:hover {
    ${mixins.button({
      colorAndFill: 'white',
      bgColor: 'darkgray',
    })};
  }

  &:active {
    ${mixins.button({ colorAndFill: 'white', bgColor: 'black' })};
  }

  &:disabled {
    ${mixins.button({
      colorAndFill: 'gray',
      bgColor: 'lightgray',
    })};
    cursor: not-allowed;
  }
`;

export const SecondaryStyle = css`
  ${mixins.button({
    colorAndFill: 'black',
    bgColor: 'white',
    borderColor: 'black',
  })};

  &:hover {
    ${mixins.button({
      colorAndFill: 'white',
      bgColor: 'black',
    })};
  }

  &:active {
    ${mixins.button({
      colorAndFill: 'black',
      bgColor: 'white',
      borderColor: 'black',
    })};
  }

  &:disabled {
    ${mixins.button({
      colorAndFill: 'gray',
      borderColor: 'lightgray',
    })};
    cursor: not-allowed;
  }
`;

export const TertiaryyStyle = css`
  ${mixins.button({
    colorAndFill: 'white',
    borderColor: 'white',
  })};

  &:hover {
    ${mixins.button({
      colorAndFill: 'darkgray',
      bgColor: 'white',
    })};
  }

  &:active {
    ${mixins.button({
      colorAndFill: 'black',
      bgColor: 'white',
    })};
  }

  &:disabled {
    ${mixins.button({
      colorAndFill: 'darkgray',
      borderColor: 'lightgray',
    })};
    cursor: not-allowed;
  }
`;
