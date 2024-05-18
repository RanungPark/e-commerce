import styled from 'styled-components';
import ImageCards from '../common/Cards/ImageCards';
import Text from '../common/Text';
import { mixins } from 'src/styles/Mixin';
import { useEffect, useState } from 'react';
import { PickFromProducts } from 'src/@types/product';

const OuterProducts = () => {
  const [outerProducts, setOuterProducts] = useState<PickFromProducts[]>([]);

  useEffect(() => {
    (async () => {
      const responce = await fetch('/v1/products/outerProducts');
      const json = await responce.json();
      setOuterProducts(json);
    })();
  }, []);

  return (
    <StyledOuterProducts>
      <Title>
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

const StyledOuterProducts = styled.article`
  ${mixins.border({ width: 'right' })}
`;

const Title = styled.div`
  ${mixins.border({ width: 'leftAndBottom' })}
  ${mixins.flexBox({})}
  height: 206px;
`;

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default OuterProducts;
