import styled from 'styled-components';
import { mixins } from '@styles/Mixin';
import { ProductType } from 'src/@types/product';
import PrimaryImageCard from '@components/cards/PrimaryImageCard';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

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
      navigate(
        `/categories/${productCategory.replace(' ', '_')}/products/${productId}`
      );
    };

  return (
    <OuterProductsWrapper>
      <OuterProductsTitle className="bb-1 p-8">
        You may also like…
      </OuterProductsTitle>
      <OuterProductsList>
        {outerProducts.map(({ id, name, price, imgPath, category }) => (
          <PrimaryImageCard
            key={uuidv4()}
            alt={name}
            onClick={goToProduct({ productId: id, productCategory: category })}
            imgPath={imgPath}
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
`;

const OuterProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > section:nth-child(odd) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export default OuterProducts;
