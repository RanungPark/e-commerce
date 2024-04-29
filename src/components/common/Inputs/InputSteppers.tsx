import React from 'react';
import styled from 'styled-components';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import { mixins } from '../../../styles/Mixin';

const StyledInputSteppers = styled.div`
  ${mixins.flexBox(undefined, 'space-between')}
  ${({ theme }) => theme.typography.Body};
  width: 146px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

const PublicButton = styled.button`
  background-color: inherit;
  border: none;
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

interface IInputSteppers {}
//일단 하드코딩으로 숫자 대입
const InputSteppers = ({}: IInputSteppers) => {
  return (
    <StyledInputSteppers>
      <MinusButton>
        <BiMinus />
      </MinusButton>
      1
      <PlusButton>
        <BiPlus />
      </PlusButton>
    </StyledInputSteppers>
  );
};

export default InputSteppers;
