import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as NorthEast } from '../assets/icons/wght300/north_east_FILL0_wght300_GRAD0_opsz24.svg';
import { ReactComponent as SouthEast } from '../assets/icons/wght300/south_east_FILL0_wght300_GRAD0_opsz24.svg';

const StyledDropdownFAQ = styled.div`
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: auto;
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const TopBox = styled.div`
  ${({ theme }) => theme.typography('Heading4')};
  ${({ theme }) => theme.flexSet(undefined, 'space-between')};
  gap: 16px;
  cursor: pointer;

  & p {
    width: 100%;
    height: auto;
  }
`;

const BottomBox = styled.div`
  ${({ theme }) => theme.typography('Body')};
  width: 100%;
  height: auto;
  margin-top: 16px;
  opacity: 0.9;
`;

interface IDropdownFAQ {
  label: string;
  replay: string;
}

const DropdownFAQ = ({ label, replay }: IDropdownFAQ) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <StyledDropdownFAQ>
      <TopBox onClick={handleClick}>
        <p>{label}</p>
        {open ? <NorthEast /> : <SouthEast />}
      </TopBox>
      {open && <BottomBox>{replay}</BottomBox>}
    </StyledDropdownFAQ>
  );
};

export default DropdownFAQ;
