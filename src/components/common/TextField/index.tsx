import React, { useState } from 'react';
import styled from 'styled-components';
import { PartialRequired } from 'src/@types/utils';
import Helper from './Helper';
import { DefaultStyle, ErrorStyle, SuccessStyle } from './TextField.css';

export interface TextFieldProps {
  label: string;
  isDisabled: boolean;
  placeholder: string;
  textHelper: string;
  labelState: boolean;
  helperState: boolean;
  inputState: 'default' | 'success' | 'error';
}

type RequiredFromTextField = PartialRequired<TextFieldProps, 'placeholder'>;

type PickWrapperProps = Pick<TextFieldProps, 'inputState'>;

const TextField = ({
  label,
  placeholder,
  textHelper,
  isDisabled = false,
  inputState = 'default',
}: RequiredFromTextField) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  return (
    <StyledTextField>
      {label ? <LabelWrapper htmlFor="textField">{label}</LabelWrapper> : <></>}
      <InputWrapper
        type="text"
        placeholder={placeholder}
        disabled={isDisabled}
        value={inputText}
        inputState={inputState}
        onChange={handleChange}
        id="textField"
      />
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

const InputWrapper = styled.input<PickWrapperProps>`
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

  ${({ inputState }) => inputState === 'success' && SuccessStyle}
  ${({ inputState }) => inputState === 'error' && ErrorStyle}
  ${({ inputState }) => inputState === 'default' && DefaultStyle}
`;

export default TextField;
