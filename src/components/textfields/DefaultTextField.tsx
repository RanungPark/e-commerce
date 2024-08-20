import HelpMessage from '@components/texts/HelpMessage';
import React from 'react';
import styled, { css } from 'styled-components';
import TextFieldLabel from '../texts/TextFieldLabel';
import { zIndex } from '@constants/zIndex';

type InputState = 'default' | 'error' | 'success';

interface DefaultTextFieldProps {
  inputState?: InputState;
  hasLabel?: boolean;
  label?: string;
  htmlFor?: string;
  hasHelpMessage?: boolean;
  helpMessage?: string;
  children: React.ReactElement<HTMLInputElement>;
}

const DefaultTextField = ({
  inputState = 'default',
  hasLabel = false,
  label = '',
  htmlFor = '',
  hasHelpMessage = false,
  helpMessage,
  children,
}: DefaultTextFieldProps) => {
  return (
    <DefaultTextFieldWrapper>
      {hasLabel && <TextFieldLabel htmlFor={htmlFor}>{label}</TextFieldLabel>}
      <DefaultTextFieldInputWrapper inputState={inputState}>
        {children}
      </DefaultTextFieldInputWrapper>
      {hasHelpMessage && !!helpMessage && (
        <HelpMessage helpMessageTheme={inputState}>{helpMessage}</HelpMessage>
      )}
    </DefaultTextFieldWrapper>
  );
};

const DefaultTextFieldWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: ${zIndex.textField};
`;

const TextFieldStyle = {
  default: css`
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
          pointer-events: none;

          &::placeholder {
            color: ${colors.lightgray};
          }
        }

        &[value]:not([value='']) {
          border: 1px solid ${colors.black};
        }
      `;
    }}
  `,
  success: css`
    border: 1px solid ${({ theme }) => theme.colors.success};

    &:focus {
      color: ${({ theme }) => theme.colors.success};
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.success};
    }
  `,
  error: css`
    border: 1px solid ${({ theme }) => theme.colors.error};

    &:focus {
      color: ${({ theme }) => theme.colors.error};
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.error};
    }
  `,
};

const DefaultTextFieldInputWrapper = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'inputState',
})<{ inputState: InputState }>`
  & input {
    ${({ theme }) => theme.typography.Caption};
    ${({ inputState }) => TextFieldStyle[inputState] || TextFieldStyle.default};

    display: block;
    width: 100%;
    height: 56px;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    cursor: text;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;

export default DefaultTextField;
