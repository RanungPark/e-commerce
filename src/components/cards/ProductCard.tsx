import PrimaryButton from '@components/buttons/PrimaryButton';
import ProductCardInfoList from '@components/lists/ProductCardInfoList';
import styled from 'styled-components';
import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';
import { mixins } from '@styles/Mixin';
import { colors } from '@styles/theme';

interface ProductCardProps {
  alt: string;
  imgPath: string;
  children: string;
  infoItems: string[];
  select?: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const ProductCard = ({
  alt,
  imgPath,
  children,
  infoItems,
  select = false,
  onClick,
}: ProductCardProps) => {
  return (
    <ProductCardWrapper>
      <ProductCardContentWrapper
        className="bt-1 br-1 bl-1"
        style={{ borderColor: colors.lightgray }}
      >
        <ProductCardImg alt={alt} src={imgPath} />
        <ProductCardInfoList infoItems={infoItems}>
          {children}
        </ProductCardInfoList>
      </ProductCardContentWrapper>
      <PrimaryButton
        onClick={onClick}
        hasLeftIcon={select}
        CustomButton={Check}
      >
        select
      </PrimaryButton>
    </ProductCardWrapper>
  );
};

const ProductCardWrapper = styled.div``;

const ProductCardContentWrapper = styled.div`
  ${mixins.flexBox({})}
`;

const ProductCardImg = styled.img`
  width: 100%;
  height: 100%;
`;

export default ProductCard;
