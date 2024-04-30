import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ChevronRight } from 'src/assets/icons/wght400/chevron-right.svg';
import { mixins } from 'src/styles/Mixin';
import { PickLabel } from 'src/@types/common';

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

type StepIndicatorProps = PickLabel;

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
