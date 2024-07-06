import styled from 'styled-components';
import ImageCards from '../common/Cards/ImageCards';
import Text from '../common/Text';
import { mixins } from '@styles/Mixin';
import { PickFromProducts } from 'src/@types/product';

const OuterProducts = ({
  outerProducts,
}: {
  outerProducts: PickFromProducts[];
}) => {
  return (
    <StyledOuterProducts className="br-1">
      <Title className="bl-1 bb-1">
        <Text as="p" typography="Heading3">
          {'You may also like…'}
        </Text>
      </Title>
      <ProductsList>
        {outerProducts.map(outerProduct => (
          <ImageCards
            label={outerProduct.name}
            cardType="main"
            price={`price ${outerProduct.price}$`}
            productImg={outerProduct.productImg}
          />
        ))}
      </ProductsList>
    </StyledOuterProducts>
  );
};

const StyledOuterProducts = styled.article``;

const Title = styled.div`
  ${mixins.flexBox({})}
  height: 206px;
`;

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default OuterProducts;
