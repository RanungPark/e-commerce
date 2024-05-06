import { mixins } from 'src/styles/Mixin';
import styled from 'styled-components';
import { TextFieldProps } from '.';
import { BiSolidErrorCircle } from 'react-icons/bi';
import { BiSolidCheckCircle } from 'react-icons/bi';
import Text from '../Text';

const HelperWapper = styled.div<HelperWrapperProps>`
  ${mixins.flexBox({ justify: 'flex-start' })};
  margin-top: 8px;

  & p {
    color: ${({ theme, inputState }) => {
      switch (inputState) {
        case 'default':
          return theme.colors.gray;
        case 'success':
          return theme.colors.succeess;
        case 'error':
          return theme.colors.error;
      }
    }};
  }

  & path {
    fill: ${({ theme, inputState }) => {
      switch (inputState) {
        case 'default':
          return theme.colors.gray;
        case 'success':
          return theme.colors.succeess;
        case 'error':
          return theme.colors.error;
      }
    }};
  }
`;

interface HelperProps extends TextFieldProps {}

type PickFromHelperProps = Pick<HelperProps, 'inputState' | 'textHelper'>;
type HelperWrapperProps = Pick<HelperProps, 'inputState'>;

const Helper = ({ inputState, textHelper }: PickFromHelperProps) => {
  return (
    <HelperWapper inputState={inputState}>
      {inputState === 'success' && <BiSolidCheckCircle />}
      {inputState === 'error' && <BiSolidErrorCircle />}
      <Text as="p" typography="CaptionSmall">
        {textHelper}
      </Text>
    </HelperWapper>
  );
};

export default Helper;
