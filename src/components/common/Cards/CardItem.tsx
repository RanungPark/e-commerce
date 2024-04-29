import React from 'react';
import styled from 'styled-components';
import { mixins } from '../../../styles/Mixin';

const StyledCardItem = styled.section<{ bgImg: string }>`
  ${mixins.flexBox()}
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  border-left: 1px solid ${({ theme }) => theme.colors.black};
  position: relative;
  background-image: url(${({ bgImg }) => bgImg});
  background-size: cover;
  width: 100%;
  height: 25vw;
  padding: 24px;
`;

const CardItemDescription = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 24px;
`;

const Description = styled.p`
  ${({ theme }) => theme.typography.Caption};
  text-align: center;
  display: block;
`;

const DescriptionLabel = styled(Description)`
  ${({ theme }) => theme.typography.Heading6};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 4px;
`;
const DescriptionPrice = styled(Description)`
  color: ${({ theme }) => theme.colors.gray};
`;

interface ICardItem {
  bgImg: string;
  label: string;
  price: string;
  isDescription?: boolean;
}

const CardItem = ({ bgImg, label, price, isDescription = true }: ICardItem) => {
  return (
    <StyledCardItem bgImg={bgImg}>
      {isDescription !== false && (
        <CardItemDescription>
          <DescriptionLabel>{label}</DescriptionLabel>
          <DescriptionPrice>{price}</DescriptionPrice>
        </CardItemDescription>
      )}
    </StyledCardItem>
  );
};

export default CardItem;
