import React from 'react';
import styled from 'styled-components';
import { ReactComponent as East300 } from '../assets/icons/wght300/east_wght300_opsz24.svg';
import { ReactComponent as West300 } from '../assets/icons/wght300/west_300_opsz24.svg';

const StyledTextIconButton = styled.button`
  ${({ theme }) => theme.flexSet()}
  ${({ theme }) => theme.typography('Links')}
  width: auto;
  height: auto;
  padding: 0;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  background-color: inherit;
  gap: 4px;
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:active {
    color: ${({ theme }) => theme.colors.black};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.lightgray};
    cursor: not-allowed;
  }

  &:hover::after,
  &:active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

interface ITextIconButton {
  text: string;
  arrowIcon?: 'rightIcon' | 'leftIcon' | 'withText';
  textOrIcon?: 'withText' | 'onlyIcon';
  isDisabled?: boolean;
}

const TextIconButton = ({
  text,
  arrowIcon = 'rightIcon',
  textOrIcon = 'withText',
  isDisabled = false,
}: ITextIconButton) => {
  return (
    <StyledTextIconButton disabled={isDisabled}>
      {textOrIcon === 'withText' && arrowIcon === 'withText' && <>{text}</>}
      {textOrIcon === 'onlyIcon' && (
        <>
          {arrowIcon === 'leftIcon' && <West300 />}
          {arrowIcon === 'rightIcon' && <East300 />}
        </>
      )}
      {textOrIcon === 'withText' && arrowIcon !== 'withText' && (
        <>
          {arrowIcon === 'leftIcon' && <West300 />}
          {text}
          {arrowIcon === 'rightIcon' && <East300 />}
        </>
      )}
    </StyledTextIconButton>
  );
};

export default TextIconButton;
