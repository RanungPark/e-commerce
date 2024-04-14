import React from "react";
import styled from "styled-components";
import arrowRight from "../assets/icons/wght400/arrow-right.svg";

const StyleTextIconButton = styled.button`
  ${({ theme }) => theme.flexSet()}
  ${({ theme }) => theme.typography("Links")}
  color: ${({ theme }) => theme.colors.black};
  border: none;
  background-color: inherit;
  gap: 4px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
  }

  &:active {
    color: ${({ theme }) => theme.colors.black};
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.lightgray};
  }
`;

const TextIconButton = () => {
  return (
    <StyleTextIconButton>
      {"Button"}
      <img src={arrowRight} alt="arrow right" />
    </StyleTextIconButton>
  );
};

export default TextIconButton;
