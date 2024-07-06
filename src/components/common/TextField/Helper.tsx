import { mixins } from '@styles/Mixin';
import styled, { css } from 'styled-components';
import { TextFieldProps } from '.';
import { BiSolidErrorCircle } from 'react-icons/bi';
import { BiSolidCheckCircle } from 'react-icons/bi';
import Text from '../Text';

interface HelperProps extends TextFieldProps {}

type PickFromHelperProps = Pick<HelperProps, 'inputState' | 'textHelper'>;

type PickWrapperProps = Pick<PickFromHelperProps, 'inputState'>;

const Helper = ({ inputState, textHelper }: PickFromHelperProps) => {
  return (
    <HelperWapper inputState={inputState}>
      {inputState === 'success' ? <BiSolidCheckCircle /> : <></>}
      {inputState === 'error' ? <BiSolidErrorCircle /> : <></>}
      <Text as="p" typography="CaptionSmall">
        {textHelper as string}
      </Text>
    </HelperWapper>
  );
};

const HelperWapper = styled.div<PickWrapperProps>`
  ${mixins.flexBox({ justify: 'flex-start' })};
  gap: 8px;
  margin-top: 8px;

  ${({ inputState }) =>
    inputState === 'success'
      ? css`
          & p {
            color: ${({ theme }) => theme.colors.gray};
          }
          & path {
            fill: ${({ theme }) => theme.colors.gray};
          }
        `
      : null}
  ${({ inputState }) =>
    inputState === 'error'
      ? css`
          & p {
            color: ${({ theme }) => theme.colors.error};
          }
          & path {
            fill: ${({ theme }) => theme.colors.error};
          }
        `
      : null}
  ${({ inputState }) =>
    inputState === 'default'
      ? css`
          & p {
            color: ${({ theme }) => theme.colors.success};
          }
          & path {
            fill: ${({ theme }) => theme.colors.success};
          }
        `
      : null}
`;

export default Helper;
