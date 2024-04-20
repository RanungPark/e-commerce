import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ChevronRight } from '../assets/icons/wght400/chevron-right.svg';

const StyledStepIndicator = styled.div`
  ${({ theme }) => theme.typography('OverLine')}
  ${({ theme }) => theme.flexSet(undefined, undefined, 'flex-start')};
  width: auto;
  height: auto;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};

  & span {
    margin-right: 8px;
  }

  & path {
    padding: 0;
    fill: ${({ theme }) => theme.colors.gray};
  }

  &:active {
    color: ${({ theme }) => theme.colors.black};

    & path {
      fill: ${({ theme }) => theme.colors.black};
    }
  }
`;

const StepIndicator = () => {
  return (
    <StyledStepIndicator>
      <span>{'INFORMATION'}</span>
      <div>
        <ChevronRight />
      </div>
    </StyledStepIndicator>
  );
};

export default StepIndicator;
