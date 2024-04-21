import React from 'react';
import styled from 'styled-components';

const StyledBenefitBlock = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  border-left: 1px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: auto;
  padding: 80px;

  & h3 {
    ${({ theme }) => theme.typography('Heading3')}
    margin-bottom: 16px;
  }

  & article {
    ${({ theme }) => theme.typography('Body')}
    opacity: 0.9;
  }
`;

interface IBenefitBlock {
  label: string;
  description: string;
}

const BenefitBlock = ({ label, description }: IBenefitBlock) => {
  return (
    <StyledBenefitBlock>
      <h3>{label}</h3>
      <article>{description}</article>
    </StyledBenefitBlock>
  );
};

export default BenefitBlock;
