import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import PrimaryImageCard from '@components/cards/PrimaryImageCard';
import { mixins } from '@styles/Mixin';
import { imgOptimization } from '@utils/img';
import { ProductType } from 'src/@types/product';

interface OuterProductsProps {
  outerProducts: ProductType[];
}

interface GoToProductProps {
  productCategory: string;
  productId: number;
}

const OuterProducts = ({ outerProducts }: OuterProductsProps) => {
  const navigate = useNavigate();

  const goToProduct =
    ({ productCategory, productId }: GoToProductProps) =>
    () => {
      navigate(`/categories/${productCategory}/products/${productId}`);
    };

  return (
    <OuterProductsWrapper>
      <OuterProductsTitle>You may also like…</OuterProductsTitle>
      <OuterProductsList>
        {outerProducts.map(({ id, name, price, imgPath, category }) => (
          <PrimaryImageCard
            key={uuidv4()}
            alt={name}
            onClick={goToProduct({ productId: id, productCategory: category })}
            imgPath={imgPath + imgOptimization({ width: 500, height: 500 })}
            price={price}
            testId={`${category}_${id}`}
          >
            {name}
          </PrimaryImageCard>
        ))}
      </OuterProductsList>
    </OuterProductsWrapper>
  );
};

const OuterProductsWrapper = styled.article``;

const OuterProductsTitle = styled.div`
  ${({ theme }) => theme.typography.Heading4}
  ${mixins.flexBox({})}
  padding: 64px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const OuterProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(odd) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export default OuterProducts;
