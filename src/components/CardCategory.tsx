import React from 'react';
import styled from 'styled-components';
import TextIconButton from './TextIconButton';

const StyledCardCategory = styled.section`
  ${({ theme }) => theme.flexSet()}
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  border-left: 1px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  position: relative;
  width: 100%;
  height: 25vw;
  padding: 24px;

  & h3 {
    ${({ theme }) => theme.typography('Heading3')}
    width: 100%;
    height: auto;
    text-align: center;
  }

  & button {
    position: absolute;
    bottom: 24px;
  }
`;

interface ICardCategory {
  label: string;
  buttonText: string;
}

const CardCategory = ({ label, buttonText }: ICardCategory) => {
  return (
    <StyledCardCategory>
      <h3>{label}</h3>
      <TextIconButton text={buttonText}></TextIconButton>
    </StyledCardCategory>
  );
};

export default CardCategory;
