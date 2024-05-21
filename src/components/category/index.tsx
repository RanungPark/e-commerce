import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Products, Rep } from 'src/@types/product';
import { productV1BaseFetch } from 'src/constants/fetch';
import ImageCards from '../common/Cards/ImageCards';
import styled from 'styled-components';
import { mixins } from 'src/styles/Mixin';
import { findParam } from 'src/utils/findParam';
import Text from '../common/Text';

const Category = () => {
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
      productV1BaseFetch({ categoryName: categoryName })({})
        .then(res => res.json())
        .then(data => {
          setRep(data.rep);
          setProducts(data.products);
        });
    }
  }, [location, navigate]);

  return (
    <>
      <CategoryHeader productImg={rep?.img}>
        <Text as="h1" typography="Heading1" color="white">
          {rep?.type}
        </Text>
      </CategoryHeader>
      <CardsWrapper>
        {products.map(product => (
          <ImageCards
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
  ${mixins.border({ width: 'leftAndBottom' })}
  ${mixins.border({ width: 'right' })}
  background-image: linear-gradient( rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35) ),${({
    productImg,
  }) => `url(${productImg})`};
  background-size: cover;
  width: 100%;
  height: 500px;
`;

const CardsWrapper = styled.section`
  ${mixins.border({ width: 'right' })}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default Category;