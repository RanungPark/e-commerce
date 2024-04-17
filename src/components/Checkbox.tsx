import React from "react";
import styled from "styled-components";
import checkbox from "../assets/icons/wght300/check_FILL0_wght300_GRAD0_opsz24.svg";

const StyleCheckbox = styled.label`
  ${({ theme }) => theme.typography("CaptionBold")};
  position: relative;
  cursor: pointer;

  & [type="checkbox"],
  span {
    vertical-align: text-top;
  }

  & [type="checkbox"] {
    appearance: none;
    background-color: ${({ theme }) => theme.colors.lightgray};
    border: 1px solid ${({ theme }) => theme.colors.black};
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-right: 12px;

    &:checked {
      & + img {
        position: absolute;
        top: 20%;
        left: 4%;
      }
    }
  }
`;

const Checkbox = () => {
  const check = true;
  return (
    <StyleCheckbox>
      <input type="checkbox" value="checkbox" checked />
      {check ? <img src={checkbox} alt="checkbox Icon" /> : <></>}
      <span>{"Checkbox"}</span>
    </StyleCheckbox>
  );
};

export default Checkbox;
