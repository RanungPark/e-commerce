import React from 'react';
import styled from 'styled-components';
import { mixins } from 'src/styles/Mixin';
import { PickCommonProps } from 'src/@types/common';

const StyledCardItem = styled.section<{ productImg: string }>`
  ${mixins.flexBox()}
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  border-left: 1px solid ${({ theme }) => theme.colors.black};
  position: relative;
  background-image: url(${({ productImg }) => productImg});
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

type UseCommonProps = 'productImg' | 'label' | 'price';

type CardItemProps = PickCommonProps<UseCommonProps> & {
  isDescription?: boolean;
};

const CardItem = ({
  productImg,
  label,
  price,
  isDescription = true,
}: CardItemProps) => {
  return (
    <StyledCardItem productImg={productImg}>
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
