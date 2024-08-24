import styled from 'styled-components';

import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';
import PrimaryButton from '@components/buttons/PrimaryButton';
import ProductCardInfoList from '@components/lists/ProductCardInfoList';
import { mixins } from '@styles/Mixin';

interface ProductCardProps {
  alt: string;
  imgPath: string;
  children: string;
  infoItems: string[];
  select?: boolean;
  onClick: (e: React.MouseEvent) => void;
  testId?: string;
  buttonTestId?: string;
}

const ProductCard = ({
  alt,
  imgPath,
  children,
  infoItems,
  select = false,
  onClick,
  testId,
  buttonTestId,
}: ProductCardProps) => {
  return (
    <ProductCardWrapper data-cy={testId}>
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
        testId={buttonTestId}
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
  width: 50%;
  height: 50%;
  border-right: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

export default ProductCard;
