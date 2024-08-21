import PrimaryButton from '@components/buttons/PrimaryButton';
import ProductCardInfoList from '@components/lists/ProductCardInfoList';
import styled from 'styled-components';
import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';
import { mixins } from '@styles/Mixin';

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
      <Contents>
        <Img alt={alt} src={imgPath} />
        <ProductCardInfoList infoItems={infoItems}>
          {children}
        </ProductCardInfoList>
      </Contents>
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

const Contents = styled.div`
  ${mixins.flexBox({})}
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

const Img = styled.img`
  border-right: 1px solid ${({ theme }) => theme.colors.lightgray};
  width: 50%;
  height: 50%;
`;

export default ProductCard;
