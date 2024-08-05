import styled from 'styled-components';

interface ProductCardInfoProps {
  children: string;
}

const ProductCardInfo = ({ children }: ProductCardInfoProps) => {
  return (
    <ProductCardInfoWrapper className="mb-half">
      {children}
    </ProductCardInfoWrapper>
  );
};

const ProductCardInfoWrapper = styled.li`
  ${({ theme }) => theme.typography.Body}
  height: 100%;
  list-style: inside;
`;

export default ProductCardInfo;
