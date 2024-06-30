import { mixins } from '@styles/Mixin';
import styled from 'styled-components';
import { TextFieldProps } from '.';
import { BiSolidErrorCircle } from 'react-icons/bi';
import { BiSolidCheckCircle } from 'react-icons/bi';
import Text from '../Text';

interface HelperProps extends TextFieldProps {}

type PickFromHelperProps = Pick<HelperProps, 'inputState' | 'textHelper'>;

const Helper = ({ inputState, textHelper }: PickFromHelperProps) => {
  return (
    <HelperWapper>
      {inputState === 'success' ? <BiSolidCheckCircle /> : <></>}
      {inputState === 'error' ? <BiSolidErrorCircle /> : <></>}
      <Text as="p" typography="CaptionSmall">
        {textHelper}
      </Text>
    </HelperWapper>
  );
};

const HelperWapper = styled.div`
  ${mixins.flexBox({ justify: 'flex-start' })};
  margin-top: 8px;
`;

export default Helper;
