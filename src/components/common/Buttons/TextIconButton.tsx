import React from 'react';
import styled from 'styled-components';
import { ReactComponent as East300 } from 'src/assets/icons/wght300/east_wght300_opsz24.svg';
import { ReactComponent as West300 } from 'src/assets/icons/wght300/west_300_opsz24.svg';
import { PickCommonProps } from 'src/@types/common';
import { mixins } from 'src/styles/Mixin';

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

type UseCommonProps = 'label' | 'isDisabled' | 'arrowIcon';

type TextIconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  PickCommonProps<UseCommonProps> & {
    textOrIcon?: 'withText' | 'onlyIcon';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };

const TextIconButton = ({
  label,
  arrowIcon = 'right',
  textOrIcon = 'withText',
  isDisabled = false,
  onClick,
}: TextIconButtonProps) => {
  return (
    <StyledTextIconButton disabled={isDisabled} onClick={onClick}>
      {textOrIcon === 'withText' && arrowIcon === 'none' && <>{label}</>}
      {textOrIcon === 'onlyIcon' && (
        <>
          {arrowIcon === 'left' && <West300 />}
          {arrowIcon === 'right' && <East300 />}
        </>
      )}
      {textOrIcon === 'withText' && arrowIcon !== 'none' && (
        <>
          {arrowIcon === 'left' && <West300 />}
          {label}
          {arrowIcon === 'right' && <East300 />}
        </>
      )}
    </StyledTextIconButton>
  );
};

export default TextIconButton;
