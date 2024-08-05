import SelectBoxOption from '@components/texts/SelectBoxOption';
import { colors } from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

interface SelectBoxOptionListProps {
  options: string[];
  onClick: (e: React.MouseEvent) => void;
}

const SelectBoxOptionList = ({
  options,
  onClick,
}: SelectBoxOptionListProps) => {
  return (
    <SelectBoxOptionListWrapper
      className="mt-1 bt-1 br-1 bl-1"
      style={{ borderColor: colors.darkgray }}
    >
      {options.map(option => (
        <SelectBoxOption onClick={onClick}>{option}</SelectBoxOption>
      ))}
    </SelectBoxOptionListWrapper>
  );
};

const SelectBoxOptionListWrapper = styled.ul`
  width: 100%;
`;

export default SelectBoxOptionList;
