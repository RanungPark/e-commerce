import React from 'react';
import styled from 'styled-components';

const StyledAdditionalProductCard = styled.div`
  width: 100px;
  height: auto;

  & img {
    border: 1px solid ${({ theme }) => theme.colors.lightgray};
    width: auto;
    height: 100px;
    margin-bottom: 8px;
  }

  &:hover {
    & img {
      border: 1px solid ${({ theme }) => theme.colors.gray};
    }
  }

  &:active {
    & img {
      border: 1px solid ${({ theme }) => theme.colors.black};
    }
  }
`;

const AdditionalProductCardDescription = styled.div`
  width: 100%;
  height: auto;
`;

const Description = styled.p`
  ${({ theme }) => theme.typography.Caption};
  display: block;
  width: 100%;
  height: auto;
`;

const DescriptionLabel = styled(Description)`
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 4px;
`;
const DescriptionPrice = styled(Description)`
  color: ${({ theme }) => theme.colors.gray};
`;

interface AdditionalProductCardProps {
  productImg: string;
  label: string;
  price: string;
}

const AdditionalProductCard = ({
  productImg,
  label,
  price,
}: AdditionalProductCardProps) => {
  return (
    <StyledAdditionalProductCard>
      <img src={productImg} alt="steel vase" />
      <AdditionalProductCardDescription>
        <DescriptionLabel>{label}</DescriptionLabel>
        <DescriptionPrice>{price}</DescriptionPrice>
      </AdditionalProductCardDescription>
    </StyledAdditionalProductCard>
  );
};

export default AdditionalProductCard;
