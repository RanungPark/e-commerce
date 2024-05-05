import React, { useState } from 'react';
import styled from 'styled-components';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import { mixins } from 'src/styles/Mixin';

const StyledStepper = styled.div`
  ${mixins.flexBox(undefined, undefined, 'space-between')}
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
  ${mixins.flexBox()}
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

interface StepperProps {
  value: number;
}

const Stepper = ({ value }: StepperProps) => {
  const [inputValue, setInputValue] = useState(value);

  const handleMinus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (inputValue > 0) {
      setInputValue(inputValue - 1);
    } else {
      return;
    }
  };
  const handlePlus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setInputValue(inputValue + 1);
  };

  return (
    <StyledStepper>
      <MinusButton onClick={handleMinus}>
        <BiMinus />
      </MinusButton>
      <LabelWrapper>
        <InputWrapper type="text" readOnly value={inputValue} />
      </LabelWrapper>
      <PlusButton onClick={handlePlus}>
        <BiPlus />
      </PlusButton>
    </StyledStepper>
  );
};

export default Stepper;
