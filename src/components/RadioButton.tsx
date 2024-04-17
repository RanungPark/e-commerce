import React from "react";
import styled from "styled-components";

const StyleRadioButton = styled.label`
  ${({ theme }) => theme.typography("Body")};
  cursor: pointer;

  & [type="radio"],
  span {
    vertical-align: middle;
  }

  & [type="radio"] {
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
        content: "";
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
`;

const RadioButton = () => {
  return (
    <StyleRadioButton>
      <input type="radio" name="contact" value="radioButton" />
      <span>{"Radio Button"}</span>
    </StyleRadioButton>
  );
};

export default RadioButton;
