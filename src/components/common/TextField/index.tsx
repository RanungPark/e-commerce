import React, { useState } from 'react';
import styled from 'styled-components';
import { PartialRequired } from 'src/@types/utils';
import Helper from './Helper';
import Text from '../Text';

const StyledTextField = styled.div`
  width: 100%;
  height: auto;
`;

const InputWrapper = styled.input<PickWrapperProps>`
  ${({ theme }) => theme.typography.Caption};
  display: block;
  width: 100%;
  height: 56px;
  padding: 16px;
  margin-top: 12px;
  border: ${({ theme, inputState }) => {
    switch (inputState) {
      case 'default':
        return `1px solid ${theme.colors.lightgray}`;
      case 'success':
        return `1px solid ${theme.colors.succeess}`;
      case 'error':
        return `1px solid ${theme.colors.error}`;
    }
  }};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &::placeholder {
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

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.gray};

    &::placeholder {
      color: ${({ theme }) => theme.colors.lightgray};
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.extralight};
    border: 1px solid ${({ theme }) => theme.colors.lightgray};
    cursor: not-allowed;

    &::placeholder {
      color: ${({ theme }) => theme.colors.lightgray};
    }
  }

  &[value]:not([value='']) {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export interface TextFieldProps {
  label: string;
  isDisabled: boolean;
  placeholder: string;
  textHelper: string;
  labelState: boolean;
  helperState: boolean;
  inputState: 'default' | 'success' | 'error';
}

type RequiredFromTextField = PartialRequired<
  TextFieldProps,
  'label' | 'placeholder' | 'textHelper'
>;

type PickWrapperProps = Pick<TextFieldProps, 'inputState'>;

const TextField = ({
  label,
  placeholder,
  textHelper,
  labelState = true,
  helperState = true,
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
      <Text as="label" typography="Caption">
        {labelState && label}
        <InputWrapper
          type="text"
          placeholder={placeholder}
          disabled={isDisabled}
          value={inputText}
          inputState={inputState}
          onChange={handleChange}
        />
      </Text>
      {helperState && (
        <Helper textHelper={textHelper} inputState={inputState} />
      )}
    </StyledTextField>
  );
};

export default TextField;
