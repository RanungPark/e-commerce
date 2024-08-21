import ProductCardInfo from '@components/texts/ProductCardInfo';
import { mixins } from '@styles/Mixin';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

interface ProductCardInfoListProps {
  children: string;
  infoItems: string[];
}

const ProductCardInfoList = ({
  children,
  infoItems,
}: ProductCardInfoListProps) => {
  return (
    <ProductCardInfoListWrapper>
      {children}
      <Ul>
        {infoItems.map(infoItem => (
          <ProductCardInfo key={uuidv4()}>{infoItem}</ProductCardInfo>
        ))}
      </Ul>
    </ProductCardInfoListWrapper>
  );
};

const ProductCardInfoListWrapper = styled.div`
  ${({ theme }) => theme.typography.Subtitle}
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  width: 100%;
  height: 100%;
  padding: 16px;
  min-height: 225px;
  gap: 16px;
`;

const Ul = styled.ul`
  & li:last-of-type {
    margin: 0;
  }
`;

export default ProductCardInfoList;
