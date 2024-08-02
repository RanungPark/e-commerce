import styled from 'styled-components';
import Helper from './Helper';
import { DefaultStyle, ErrorStyle, SuccessStyle } from './TextField.css';

export interface TextFieldProps {
  label: string;
  textHelper: string;
  labelState: boolean;
  helperState: boolean;
  inputState: 'default' | 'success' | 'error';
}

type PartialTextField = Partial<TextFieldProps>;

type PickWrapperProps = Pick<TextFieldProps, 'inputState'>;

const TextField = ({
  label,
  textHelper,
  inputState = 'default',
  children,
}: React.PropsWithChildren<PartialTextField>) => {
  return (
    <StyledTextField>
      {label ? <LabelWrapper htmlFor="textField">{label}</LabelWrapper> : <></>}
      <InputWrapper className="mt-2" inputState={inputState}>
        {children}
      </InputWrapper>
      {textHelper ? (
        <Helper textHelper={textHelper} inputState={inputState} />
      ) : (
        <></>
      )}
    </StyledTextField>
  );
};

const StyledTextField = styled.div`
  ${({ theme }) => theme.typography.Heading6};
  width: 100%;
  height: auto;
`;

const LabelWrapper = styled.label`
  margin-bottom: 12px;
`;

const InputWrapper = styled.div<PickWrapperProps>`
  & input {
    ${({ theme }) => theme.typography.Caption};
    display: block;
    width: 100%;
    height: 56px;
    padding: 16px;

    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }

    ${({ inputState }) => (inputState === 'success' ? SuccessStyle : null)}
    ${({ inputState }) => (inputState === 'error' ? ErrorStyle : null)}
    ${({ inputState }) => (inputState === 'default' ? DefaultStyle : null)}
  }
`;

export default TextField;
