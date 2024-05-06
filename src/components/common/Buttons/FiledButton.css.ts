import { mixins } from 'src/styles/Mixin';
import { css } from 'styled-components';

export const PrimaryStyle = css`
  ${mixins.specifyColor({ colorAndFill: 'white', bgColor: 'black' })};

  &:hover {
    ${mixins.specifyColor({
      colorAndFill: 'white',
      bgColor: 'darkgray',
    })};
  }

  &:active {
    ${mixins.specifyColor({ colorAndFill: 'white', bgColor: 'black' })};
  }

  &:disabled {
    ${mixins.specifyColor({
      colorAndFill: 'gray',
      bgColor: 'lightgray',
    })};
    cursor: not-allowed;
  }
`;

export const SecondaryStyle = css`
  ${mixins.specifyColor({
    colorAndFill: 'black',
    bgColor: 'white',
    borderColor: 'black',
  })};

  &:hover {
    ${mixins.specifyColor({
      colorAndFill: 'white',
      bgColor: 'black',
    })};
  }

  &:active {
    ${mixins.specifyColor({
      colorAndFill: 'black',
      bgColor: 'white',
      borderColor: 'black',
    })};
  }

  &:disabled {
    ${mixins.specifyColor({
      colorAndFill: 'gray',
      borderColor: 'lightgray',
    })};
    cursor: not-allowed;
  }
`;

export const TertiaryyStyle = css`
  ${mixins.specifyColor({
    colorAndFill: 'white',
    borderColor: 'white',
  })};

  &:hover {
    ${mixins.specifyColor({
      colorAndFill: 'darkgray',
      bgColor: 'white',
    })};
  }

  &:active {
    ${mixins.specifyColor({
      colorAndFill: 'black',
      bgColor: 'white',
    })};
  }

  &:disabled {
    ${mixins.specifyColor({
      colorAndFill: 'darkgray',
      borderColor: 'lightgray',
    })};
    cursor: not-allowed;
  }
`;
