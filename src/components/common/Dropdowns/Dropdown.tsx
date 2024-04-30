import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckFill } from 'src/assets/icons/wght300/check_FILL0_wght300_GRAD0_opsz24.svg';
import { ReactComponent as EditSquare } from 'src/assets/icons/wght400/edit_square.svg';
import { mixins } from 'src/styles/Mixin';
import { PickLabel } from 'src/@types/common';

const StyledDropdown = styled.div<{ isFiiled: boolean }>`
  ${mixins.flexBox(undefined, 'space-between')}
  ${({ theme }) => theme.typography.Subtitle};
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
  ${mixins.flexBox()}
  width: auto;
  height: auto;
  gap: 4px;

  & path {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

type DropdownProps = PickLabel & {
  isFilled?: boolean;
};

const Dropdown = ({ label, isFilled = true }: DropdownProps) => {
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
