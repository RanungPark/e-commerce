import styled from 'styled-components';
import { mixins } from '@styles/Mixin';
import { ProductType } from 'src/@types/product';
import PrimaryImageCard from '@components/cards/PrimaryImageCard';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { imgOptimization } from '@utils/img';

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
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 64px;
`;

const OuterProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(odd) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export default OuterProducts;
