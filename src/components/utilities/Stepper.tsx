import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Add } from '@assets/icons/wght300/Add.svg';
import { ReactComponent as Minus } from '@assets/icons/wght300/Minus.svg';
import IconButton from '@components/buttons/IconButton';
import { mixins } from '@styles/Mixin';

interface StepperProps {
  value: number;
  onClickMinus: (e: React.MouseEvent) => void;
  onClickPlus: (e: React.MouseEvent) => void;
  testId?: string;
}

const Stepper = ({
  value,
  onClickMinus,
  onClickPlus,
  testId,
}: StepperProps) => {
  return (
    <StepperWrapper>
      <IconButton
        onClick={onClickMinus}
        IconComponent={Minus}
        size="large"
        ariaLabel="minusBtn"
        testId="minusBtn"
      />
      <Input
        readOnly
        value={value}
        type="text"
        aria-label="stepper"
        data-cy={testId}
      />
      <IconButton
        onClick={onClickPlus}
        IconComponent={Add}
        size="large"
        ariaLabel="plusBtn"
        testId="plusBtn"
      />
    </StepperWrapper>
  );
};

const StepperWrapper = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
  max-width: 146px;
  border: 1px solid ${({ theme }) => theme.colors.black};

  & button:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }

  & button:last-child {
    border-left: 1px solid ${({ theme }) => theme.colors.black};
  }

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const Input = styled.input`
  ${({ theme }) => theme.typography.Body};
  width: 59px;
  height: 100%;
  text-align: center;
`;

export default Stepper;
