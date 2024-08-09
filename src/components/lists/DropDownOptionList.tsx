import DropDownOption from '@components/texts/DropDownOption';
import { colors } from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

interface DropDownOptionListProps {
  options: string[];
  onClick: (e: React.MouseEvent) => void;
}

const DropDownOptionList = ({ options, onClick }: DropDownOptionListProps) => {
  return (
    <DropDownOptionListWrapper
      className="mt-1 b-1"
      style={{ borderColor: colors.darkgray }}
    >
      {options.map(option => (
        <DropDownOption onClick={onClick}>{option}</DropDownOption>
      ))}
    </DropDownOptionListWrapper>
  );
};

const DropDownOptionListWrapper = styled.ul`
  width: 100%;

  & > li {
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }

  & > li:last-child {
    border-bottom: none;
  }
`;

export default DropDownOptionList;
