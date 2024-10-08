import styled from 'styled-components';

import { changeKroeaPrice } from '@utils/price';

interface ProductInfoProps {
  name: string;
  price: number;
  children: string;
}

const ProductInfo = ({ name, price, children }: ProductInfoProps) => {
  return (
    <ProductInfoWrapper>
      <Title>
        {`${name} - ${changeKroeaPrice(price)}`}
        <Unit> KRW</Unit>
      </Title>
      {children}
    </ProductInfoWrapper>
  );
};

const ProductInfoWrapper = styled.div`
  ${({ theme }) => theme.typography.Body}
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  ${({ theme }) => theme.typography.Heading3}
  margin-bottom: 16px;
`;

const Unit = styled.span`
  ${({ theme }) => theme.typography.Heading4}
`;

export default ProductInfo;
