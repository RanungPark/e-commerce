import React from 'react';
import styled from 'styled-components';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import IconButton from '@components/buttons/IconButton';
import { mixins } from '@styles/Mixin';

interface StepperProps {
  value: number;
  onClickMinus: (e: React.MouseEvent) => void;
  onClickPlus: (e: React.MouseEvent) => void;
}

const Stepper = ({ value, onClickMinus, onClickPlus }: StepperProps) => {
  return (
    <StepperWrapper className="b-1">
      <IconButton onClick={onClickMinus} IconComponent={BiMinus} size="large" />
      <StepperInput readOnly value={value} type="text" />
      <IconButton onClick={onClickPlus} IconComponent={BiPlus} size="large" />
    </StepperWrapper>
  );
};

const StepperWrapper = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}

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

const StepperInput = styled.input`
  ${({ theme }) => theme.typography.Body};
  width: 59px;
  height: 100%;
  text-align: center;
`;

export default Stepper;
