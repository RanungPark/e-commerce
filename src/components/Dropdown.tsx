import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckFill } from '../assets/icons/wght300/check_FILL0_wght300_GRAD0_opsz24.svg';
import { ReactComponent as EditSquare } from '../assets/icons/wght400/edit_square.svg';

const StyledDropdown = styled.div<{ isFiiled: boolean }>`
  ${({ theme }) => theme.flexSet(undefined, 'space-between')};
  ${({ theme }) => theme.typography('Subtitle')};
  color: ${({ isFiiled, theme }) =>
    isFiiled ? theme.colors.black : theme.colors.lightgray};
  width: 100%;
  height: auto;
  border-bottom: 1px solid
    ${({ isFiiled, theme }) =>
      isFiiled ? theme.colors.black : theme.colors.lightgray};
  padding: 0 16px 24px 0;

  & path {
    fill: ${({ theme }) => theme.colors.gray};
  }
`;

const FrontBox = styled.div`
  ${({ theme }) => theme.flexSet()};
  width: auto;
  height: auto;
  gap: 4px;

  & path {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

interface IDropdown {
  label: string;
  isFilled?: boolean;
}

const Dropdown = ({ label, isFilled = true }: IDropdown) => {
  return (
    <StyledDropdown isFiiled={isFilled}>
      <FrontBox>
        {isFilled && <CheckFill />}
        {label}
      </FrontBox>
      <div>{isFilled && <EditSquare />}</div>
    </StyledDropdown>
  );
};

export default Dropdown;