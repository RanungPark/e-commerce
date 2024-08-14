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
      <ProductInfoTitle>
        {`${name} - ${changeKroeaPrice(price)}`}
        <span> KRW</span>
      </ProductInfoTitle>
      {children}
    </ProductInfoWrapper>
  );
};

const ProductInfoWrapper = styled.section`
  ${({ theme }) => theme.typography.Body}
  width: 100%;
  height: auto;
`;

const ProductInfoTitle = styled.h3`
  ${({ theme }) => theme.typography.Heading3}
  margin-bottom: 16px;
  & span {
    ${({ theme }) => theme.typography.Heading4}
  }
`;

export default ProductInfo;
