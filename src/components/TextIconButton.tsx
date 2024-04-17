import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowRight } from '../assets/icons/wght400/chevron-right.svg';

const StyleTextIconButton = styled.button`
  ${({ theme }) => theme.flexSet()}
  ${({ theme }) => theme.typography('Links')}
  color: ${({ theme }) => theme.colors.black};
  border: none;
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

const TextIconButton = () => {
  return (
    <StyleTextIconButton>
      {'Button'}
      <ArrowRight />
    </StyleTextIconButton>
  );
};

export default TextIconButton;
