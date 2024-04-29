import React from 'react';
import styled from 'styled-components';
import { ReactComponent as East300 } from '../../../assets/icons/wght300/east_wght300_opsz24.svg';
import { ReactComponent as West300 } from '../../../assets/icons/wght300/west_300_opsz24.svg';
import { mixins } from '../../../styles/Mixin';

const StyledTextIconButton = styled.button`
  ${mixins.flexBox()}
  ${({ theme }) => theme.typography.Links}
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

type TextIconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  arrowIcon?: 'rightIcon' | 'leftIcon' | 'withText';
  textOrIcon?: 'withText' | 'onlyIcon';
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const TextIconButton = ({
  label,
  arrowIcon = 'rightIcon',
  textOrIcon = 'withText',
  isDisabled = false,
  onClick,
}: TextIconButtonProps) => {
  return (
    <StyledTextIconButton disabled={isDisabled} onClick={onClick}>
      {textOrIcon === 'withText' && arrowIcon === 'withText' && <>{label}</>}
      {textOrIcon === 'onlyIcon' && (
        <>
          {arrowIcon === 'leftIcon' && <West300 />}
          {arrowIcon === 'rightIcon' && <East300 />}
        </>
      )}
      {textOrIcon === 'withText' && arrowIcon !== 'withText' && (
        <>
          {arrowIcon === 'leftIcon' && <West300 />}
          {label}
          {arrowIcon === 'rightIcon' && <East300 />}
        </>
      )}
    </StyledTextIconButton>
  );
};

export default TextIconButton;
