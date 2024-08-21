import { changeKroeaPrice } from '@utils/price';
import styled from 'styled-components';

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
        <span> KRW</span>
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
  & span {
    ${({ theme }) => theme.typography.Heading4}
  }
`;

export default ProductInfo;
