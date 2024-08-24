import styled from 'styled-components';

interface ProductCardInfoProps {
  children: string;
}

const ProductCardInfo = ({ children }: ProductCardInfoProps) => {
  return <ProductCardInfoWrapper>{children}</ProductCardInfoWrapper>;
};

const ProductCardInfoWrapper = styled.li`
  ${({ theme }) => theme.typography.Body}
  height: 100%;
  margin-bottom: 4px;
  
  list-style: inside;
`;

export default ProductCardInfo;
