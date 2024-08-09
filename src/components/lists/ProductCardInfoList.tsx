import ProductCardInfo from '@components/texts/ProductCardInfo';
import { mixins } from '@styles/Mixin';
import { colors } from '@styles/theme';
import styled from 'styled-components';

interface ProductCardInfoListProps {
  children: string;
  infoItems: string[];
}

const ProductCardInfoList = ({
  children,
  infoItems,
}: ProductCardInfoListProps) => {
  return (
    <ProductCardInfoListWrapper
      className="p-2"
      style={{ borderColor: colors.lightgray }}
    >
      {children}
      <ProductCardInfoListUl>
        {infoItems.map(infoItem => (
          <ProductCardInfo>{infoItem}</ProductCardInfo>
        ))}
      </ProductCardInfoListUl>
    </ProductCardInfoListWrapper>
  );
};

const ProductCardInfoListWrapper = styled.div`
  ${({ theme }) => theme.typography.Subtitle}
  ${mixins.flexBox({ direction: 'column', align: 'start' })}

  width: 100%;
  height: 100%;
  min-height: 225px;
  gap: 16px;
`;

const ProductCardInfoListUl = styled.ul`
  & li:last-of-type {
    margin: 0;
  }
`;

export default ProductCardInfoList;
