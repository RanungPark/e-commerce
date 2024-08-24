import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import DropDownOption from '@components/texts/DropDownOption';

interface DropDownOptionListProps {
  options: string[];
  onClick: (e: React.MouseEvent) => void;
}

const DropDownOptionList = ({ options, onClick }: DropDownOptionListProps) => {
  return (
    <DropDownOptionListWrapper>
      {options.map((option, index) => (
        <DropDownOption
          onClick={onClick}
          key={uuidv4()}
          testId={`option${index + 1}`}
        >
          {option}
        </DropDownOption>
      ))}
    </DropDownOptionListWrapper>
  );
};

const DropDownOptionListWrapper = styled.ul`
  width: 100%;
  margin-top: 8px;
  border: 1px solid ${({ theme }) => theme.colors.darkgray};
  & > li {
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }

  & > li:last-child {
    border-bottom: none;
  }
`;

export default DropDownOptionList;
