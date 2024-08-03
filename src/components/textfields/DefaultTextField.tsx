import HelpMessage from '@components/texts/HelpMessage';
import React from 'react';
import styled, { css } from 'styled-components';
import TextFieldLabel from './TextFieldLabel';

type InputState = 'default' | 'error' | 'success';

interface DefaultTextFieldProps {
  inputState: InputState;
  hasLabel?: boolean;
  label?: string;
  htmlFor?: string;
  hasHelpMessage?: boolean;
  helpMessage?: string;
  children: React.ReactElement<HTMLInputElement>;
}

type DefaultTextFieldInputProps = Pick<DefaultTextFieldProps, 'inputState'>;

const DefaultTextField = ({
  inputState = 'error',
  hasLabel = false,
  label = '',
  htmlFor = '',
  hasHelpMessage = false,
  helpMessage,
  children,
}: DefaultTextFieldProps) => {
  return (
    <DefaultTextFieldWrapper>
      {hasLabel ? (
        <TextFieldLabel htmlFor={htmlFor}>{label}</TextFieldLabel>
      ) : (
        <></>
      )}
      <DefaultTextFieldInput inputState={inputState}>
        {children}
      </DefaultTextFieldInput>
      {hasHelpMessage && !!helpMessage ? (
        <HelpMessage helpMessageTheme={inputState}>{helpMessage}</HelpMessage>
      ) : (
        <></>
      )}
    </DefaultTextFieldWrapper>
  );
};

const DefaultTextFieldWrapper = styled.div`
  position: relative;

  & .helpMessage,
  label {
    position: absolute;
  }
  & .helpMessage {
    bottom: -20px;
  }
  & label {
    top: -30px;
  }
`;

export const defaultStyle = css`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      border: 1px solid ${colors.lightgray};
      &:hover {
        border: 1px solid ${colors.gray};
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.gray};

        &::placeholder {
          color: ${colors.lightgray};
        }
      }

      &:disabled {
        background-color: ${colors.extralight};
        border: 1px solid ${colors.lightgray};
        cursor: not-allowed;

        &::placeholder {
          color: ${colors.lightgray};
        }
      }

      &[value]:not([value='']) {
        border: 1px solid ${colors.black};
      }
    `;
  }}
`;

export const successStyle = css`
  border: 1px solid ${({ theme }) => theme.colors.success};

  &:focus {
    color: ${({ theme }) => theme.colors.success};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.success};
  }
`;

export const errorStyle = css`
  border: 1px solid ${({ theme }) => theme.colors.error};

  &:focus {
    color: ${({ theme }) => theme.colors.error};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.error};
  }
`;

const DefaultTextFieldInput = styled.div<DefaultTextFieldInputProps>`
  & input {
    ${({ theme }) => theme.typography.Caption};

    ${({ inputState }) => (inputState === 'default' ? defaultStyle : null)}
    ${({ inputState }) => (inputState === 'success' ? successStyle : null)}
    ${({ inputState }) => (inputState === 'error' ? errorStyle : null)}
    
    display: block;
    width: 100%;
    height: 56px;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;

export default DefaultTextField;
