import styled from 'styled-components';

interface ProductCardInfoProps {
  children: string;
}

const ProductCardInfo = ({ children }: ProductCardInfoProps) => {
  return <ProductCardInfoWrapper>{children}</ProductCardInfoWrapper>;
};

const ProductCardInfoWrapper = styled.li`
  ${({ theme }) => theme.typography.Body}
  margin-bottom: 4px;
  height: 100%;
  list-style: inside;
`;

export default ProductCardInfo;
