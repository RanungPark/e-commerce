import React from 'react';
import styled, { css } from 'styled-components';

import HelpMessage from '@components/texts/HelpMessage';
import { zIndex } from '@constants/zIndex';

import TextFieldLabel from '../texts/TextFieldLabel';

type InputState = 'default' | 'error' | 'success';

interface DefaultTextFieldProps {
  inputState?: InputState;
  hasLabel?: boolean;
  label?: string;
  htmlFor?: string;
  hasHelpMessage?: boolean;
  helpMessage?: string;
  children: React.ReactElement<HTMLInputElement>;
  helpTestId?: string;
}

const DefaultTextField = ({
  inputState = 'default',
  hasLabel = false,
  label = '',
  htmlFor = '',
  hasHelpMessage = false,
  helpMessage,
  children,
  helpTestId,
}: DefaultTextFieldProps) => {
  return (
    <DefaultTextFieldWrapper>
      {hasLabel && <TextFieldLabel htmlFor={htmlFor}>{label}</TextFieldLabel>}
      <InputWrapper inputState={inputState}>{children}</InputWrapper>
      {hasHelpMessage && !!helpMessage && (
        <HelpMessage testId={helpTestId} helpMessageTheme={inputState}>
          {helpMessage}
        </HelpMessage>
      )}
    </DefaultTextFieldWrapper>
  );
};

const DefaultTextFieldWrapper = styled.div`
  position: relative;
  z-index: ${zIndex.textField};
  
  width: 100%;
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
          box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.gray};

          outline: none;

          &::placeholder {
            color: ${colors.lightgray};
          }
        }

        &:disabled {
          border: 1px solid ${colors.lightgray};

          background-color: ${colors.extralight};

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
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.success};

      color: ${({ theme }) => theme.colors.success};
    }
  `,
  error: css`
    border: 1px solid ${({ theme }) => theme.colors.error};

    &:focus {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.error};

      color: ${({ theme }) => theme.colors.error};
    }
  `,
};

const InputWrapper = styled.div.withConfig({
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
