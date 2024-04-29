import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSolidErrorCircle } from 'react-icons/bi';
import { BiSolidCheckCircle } from 'react-icons/bi';
import { mixins } from '../../../styles/Mixin';

const StyledInputText = styled.div`
  ${({ theme }) => theme.typography.Heading6};
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.black};
`;

const InputBox = styled.input<{ inputState?: 'default' | 'success' | 'error' }>`
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

const TextHelperWapper = styled.div<{
  inputState?: 'default' | 'success' | 'error';
}>`
  ${({ theme }) => theme.typography.CaptionSmall};
  ${mixins.flexBox(undefined, undefined, 'center')};
  margin-top: 8px;

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

interface IInputText {
  label: string;
  placeholder: string;
  textHelper: string;
  labelState?: boolean;
  helperState?: boolean;
  isDisabled?: boolean;
  inputState?: 'default' | 'success' | 'error';
}

const InputText = ({
  label,
  placeholder,
  textHelper,
  labelState = true,
  helperState = true,
  isDisabled = false,
  inputState = 'default',
}: IInputText) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  return (
    <StyledInputText>
      {labelState && label}
      <InputBox
        type="text"
        placeholder={placeholder}
        disabled={isDisabled}
        value={inputText}
        inputState={inputState}
        onChange={handleChange}
      />
      {helperState && (
        <TextHelperWapper inputState={inputState}>
          {inputState === 'success' && <BiSolidCheckCircle />}
          {inputState === 'error' && <BiSolidErrorCircle />}
          {textHelper}
        </TextHelperWapper>
      )}
    </StyledInputText>
  );
};

export default InputText;
