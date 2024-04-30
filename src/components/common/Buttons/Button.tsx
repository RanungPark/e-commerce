import React from 'react';
import styled from 'styled-components';
import { ReactComponent as East300 } from 'src/assets/icons/wght300/east_wght300_opsz24.svg';
import { ReactComponent as West300 } from 'src/assets/icons/wght300/west_300_opsz24.svg';
import { mixins } from 'src/styles/Mixin';
import { PickCommonProps } from 'src/@types/common';

const StyledButton = styled.button<{
  colorType: ColorType;
}>`
  ${mixins.flexBox()}
  ${({ theme }) => theme.typography.Button}
  padding: 16px 24px 14px 24px;
  min-width: 175px;
  width: 100%;
  height: 56px;
  gap: 8px;
  background-color: ${({ colorType, theme }) => {
    switch (colorType) {
      case 'primary':
        return theme.colors.black;
      case 'secondary':
        return theme.colors.white;
      case 'tertiary':
        return 'inherit';
    }
  }};
  color: ${({ colorType, theme }) => {
    switch (colorType) {
      case 'primary':
        return theme.colors.white;
      case 'secondary':
        return theme.colors.black;
      case 'tertiary':
        return theme.colors.white;
    }
  }};
  border: ${({ colorType, theme }) => {
    switch (colorType) {
      case 'primary':
        return 'none';
      case 'secondary':
        return `1px solid ${theme.colors.black}`;
      case 'tertiary':
        return `1px solid ${theme.colors.white}`;
    }
  }};

  & path {
    fill: ${({ colorType, theme }) => {
      switch (colorType) {
        case 'primary':
          return theme.colors.white;
        case 'secondary':
          return theme.colors.black;
        case 'tertiary':
          return theme.colors.white;
      }
    }};
  }

  &:hover {
    background-color: ${({ colorType, theme }) => {
      switch (colorType) {
        case 'primary':
          return theme.colors.darkgray;
        case 'secondary':
          return theme.colors.black;
        case 'tertiary':
          return theme.colors.white;
      }
    }};
    color: ${({ colorType, theme }) => {
      switch (colorType) {
        case 'primary':
          return theme.colors.white;
        case 'secondary':
          return theme.colors.white;
        case 'tertiary':
          return theme.colors.darkgray;
      }
    }};

    & path {
      fill: ${({ colorType, theme }) => {
        switch (colorType) {
          case 'primary':
            return theme.colors.white;
          case 'secondary':
            return theme.colors.white;
          case 'tertiary':
            return theme.colors.darkgray;
        }
      }};
    }
  }

  &:active {
    background-color: ${({ colorType, theme }) => {
      switch (colorType) {
        case 'primary':
          return theme.colors.black;
        case 'secondary':
          return theme.colors.white;
        case 'tertiary':
          return theme.colors.white;
      }
    }};
    color: ${({ colorType, theme }) => {
      switch (colorType) {
        case 'primary':
          return theme.colors.white;
        case 'secondary':
          return theme.colors.black;
        case 'tertiary':
          return theme.colors.black;
      }
    }};
    border: ${({ colorType, theme }) =>
      colorType === 'secondary' ? `1px solid ${theme.colors.black}` : 'none'};

    & path {
      fill: ${({ colorType, theme }) => {
        switch (colorType) {
          case 'primary':
            return theme.colors.white;
          case 'secondary':
            return theme.colors.black;
          case 'tertiary':
            return theme.colors.black;
        }
      }};
    }
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray};
    background-color: ${({ colorType, theme }) =>
      colorType === 'primary' ? theme.colors.lightgray : 'inherit'};
    border: ${({ colorType, theme }) =>
      colorType !== 'primary' ? `1px solid ${theme.colors.lightgray}` : 'none'};
    cursor: not-allowed;

    & path {
      fill: ${({ theme }) => theme.colors.gray};
    }
  }
`;

type ColorType = 'primary' | 'secondary' | 'tertiary';
type UseCommonProps = 'label' | 'isDisabled' | 'arrowIcon';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  PickCommonProps<UseCommonProps> & {
    colorType?: ColorType;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };

const Button = ({
  label,
  colorType = 'primary',
  arrowIcon = 'none',
  isDisabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton colorType={colorType} disabled={isDisabled} onClick={onClick}>
      {arrowIcon === 'left' && <West300 />}
      {label}
      {arrowIcon === 'right' && <East300 />}
    </StyledButton>
  );
};

export default Button;
