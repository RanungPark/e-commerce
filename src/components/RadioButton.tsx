import React from 'react';
import styled from 'styled-components';

const StyledRadioButton = styled.label`
  ${({ theme }) => theme.typography('Body')};
  width: auto;
  height: auto;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  & [type='radio'],
  p {
    vertical-align: middle;
  }

  p {
    display: inline-block;
  }

  & [type='radio'] {
    appearance: none;
    background-color: ${({ theme }) => theme.colors.lightgray};
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 50%;
    width: 24px;
    height: 24px;
    position: relative;
    cursor: pointer;
    margin-right: 12px;

    &:checked {
      &::before {
        content: '';
        border-radius: 50%;
        width: 14px;
        height: 14px;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.black};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  &:active {
    color: ${({ theme }) => theme.colors.gray};

    & [type='radio'] {
      border: 1px solid ${({ theme }) => theme.colors.gray};

      &::before {
        background-color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

interface IRadioButton {
  text: string;
}

const RadioButton = ({ text }: IRadioButton) => {
  return (
    <StyledRadioButton>
      <input type="radio" name="contact" value="radioButton" />
      <p>{text}</p>
    </StyledRadioButton>
  );
};

export default RadioButton;