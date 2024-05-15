import React, { useState } from 'react';
import styled from 'styled-components';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import { mixins } from 'src/styles/Mixin';

interface StepperProps {
  value: number;
  handleMinus: React.MouseEventHandler<HTMLButtonElement>;
  handlePlus: React.MouseEventHandler<HTMLButtonElement>;
}

const Stepper = ({ value, handleMinus, handlePlus }: StepperProps) => {
  return (
    <StyledStepper>
      <MinusButton onClick={handleMinus}>
        <BiMinus />
      </MinusButton>
      <LabelWrapper>
        <InputWrapper type="text" readOnly value={value} />
      </LabelWrapper>
      <PlusButton onClick={handlePlus}>
        <BiPlus />
      </PlusButton>
    </StyledStepper>
  );
};

const StyledStepper = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
  max-width: 147px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

const LabelWrapper = styled.label`
  height: 100%;
`;

const InputWrapper = styled.input`
  ${({ theme }) => theme.typography.Body};
  width: 40px;
  height: 100%;
  text-align: center;
`;

const PublicButton = styled.button`
  ${mixins.flexBox({})}
  background-color: inherit;
  cursor: pointer;
  width: 44px;
  height: 44px;
`;

const MinusButton = styled(PublicButton)`
  border-right: 1px solid ${({ theme }) => theme.colors.black};
`;

const PlusButton = styled(PublicButton)`
  border-left: 1px solid ${({ theme }) => theme.colors.black};
`;

export default Stepper;
