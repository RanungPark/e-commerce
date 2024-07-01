import ImageCards from '@components/common/Cards/ImageCards';
import Text from '@components/common/Text';
import { mixins } from '@styles/Mixin';
import { findParam } from '@utils/findParam';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Products, Rep } from 'src/@types/product';
import styled from 'styled-components';

const CategoryPage = () => {
  const URL_REGEXP = /\/categories\/([^/]+)/;
  const [products, setProducts] = useState<Products[]>([]);
  const [rep, setRep] = useState<Rep>({ img: '', type: '' });

  const location = useLocation();
  const navigate = useNavigate();

  const goToNotFound = () => {
    navigate('/error');
  };

  const goToProduct = (productId: number) => () => {
    navigate(`products/${productId}`);
  };

  useEffect(() => {
    const categoryName = findParam(URL_REGEXP, location.pathname);

    if (categoryName === undefined) {
      goToNotFound();
    } else {
      console.log(categoryName);
      fetch('/freshflowers/products')
        .then(response => response.json())
        .then(data => {
          setRep(data.rep);
          setProducts(data.products);
        });
    }
  }, [location, navigate]);

  return (
    <>
      <CategoryHeader productImg={rep?.img} className="br-1 bl-1 bb-1">
        <Text as="h1" typography="Heading1" color="white">
          {rep?.type}
        </Text>
      </CategoryHeader>
      <CardsWrapper className="br-1">
        {products.map(product => (
          <ImageCards
            key={product.id}
            label={product.name}
            productImg={product.productImg}
            price={`price ${product.price}$`}
            cardType="main"
            handleClick={goToProduct(product.id)}
          />
        ))}
      </CardsWrapper>
    </>
  );
};

const CategoryHeader = styled.section<{ productImg: string }>`
  ${mixins.flexBox({})}

  background-image: linear-gradient( rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35) ),${({
    productImg,
  }) => `url(${productImg})`};
  background-size: cover;
  width: 100%;
  height: 500px;
`;

const CardsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default CategoryPage;
