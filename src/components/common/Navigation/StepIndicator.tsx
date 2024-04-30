import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ChevronRight } from '../../../assets/icons/wght400/chevron-right.svg';
import { mixins } from '../../../styles/Mixin';

const StyledStepIndicator = styled.div`
  ${({ theme }) => theme.typography.Overline};
  ${mixins.flexBox(undefined, undefined, 'flex-start')};

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

interface StepIndicatorProps {
  label: string;
}

const StepIndicator = ({ label }: StepIndicatorProps) => {
  return (
    <StyledStepIndicator>
      <span>{label}</span>
      <div>
        <ChevronRight />
      </div>
    </StyledStepIndicator>
  );
};

export default StepIndicator;