import React from "react";
import styled from "styled-components";

const StyledButton = styled.button<{
  $colorType: "primary" | "secondary" | "tertiary";
}>`
  ${({ theme }) => theme.flexSet()}
  ${({ theme }) => theme.typography("Button")}
  padding: 16px 24px 14px 24px;
  width: 175px;
  height: 56px;
  cursor: pointer;
  background-color: ${({ $colorType, theme }) => {
    switch ($colorType) {
      case "primary":
        return theme.colors.black;
      case "secondary":
        return theme.colors.white;
      case "tertiary":
        return "inherit";
    }
  }};
  color: ${({ $colorType, theme }) => {
    switch ($colorType) {
      case "primary":
        return theme.colors.white;
      case "secondary":
        return theme.colors.black;
      case "tertiary":
        return theme.colors.white;
    }
  }};
  border: ${({ $colorType, theme }) => {
    switch ($colorType) {
      case "primary":
        return "none";
      case "secondary":
        return `1px solid ${theme.colors.black}`;
      case "tertiary":
        return `1px solid ${theme.colors.white}`;
    }
  }};

  &:hover {
    background-color: ${({ $colorType, theme }) => {
      switch ($colorType) {
        case "primary":
          return theme.colors.darkgray;
        case "secondary":
          return theme.colors.black;
        case "tertiary":
          return theme.colors.white;
      }
    }};
    color: ${({ $colorType, theme }) => {
      switch ($colorType) {
        case "primary":
          return theme.colors.white;
        case "secondary":
          return theme.colors.white;
        case "tertiary":
          return theme.colors.darkgray;
      }
    }};
  }

  &:active {
    background-color: ${({ $colorType, theme }) => {
      switch ($colorType) {
        case "primary":
          return theme.colors.black;
        case "secondary":
          return theme.colors.white;
        case "tertiary":
          return theme.colors.white;
      }
    }};
    color: ${({ $colorType, theme }) => {
      switch ($colorType) {
        case "primary":
          return theme.colors.white;
        case "secondary":
          return theme.colors.black;
        case "tertiary":
          return theme.colors.black;
      }
    }};
    border: ${({ $colorType, theme }) =>
      $colorType === "secondary" ? `1px solid ${theme.colors.black}` : "none"};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray};
    background-color: ${({ $colorType, theme }) =>
      $colorType === "primary" ? theme.colors.lightgray : "inherit"};
    border: ${({ $colorType, theme }) =>
      $colorType !== "primary"
        ? `1px solid ${theme.colors.lightgray}`
        : "none"};
  }
`;

interface IButton {
  text: string;
  $colorType: "primary" | "secondary" | "tertiary";
}

const Button = ({ text, $colorType = "primary" }: IButton) => {
  return <StyledButton $colorType={$colorType}>{text}</StyledButton>;
};

export default Button;
