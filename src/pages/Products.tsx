import React, { useEffect } from 'react';
import Product from 'src/components/product';
import OuterProducts from 'src/components/product/OuterProducts';

const ProductsPage = () => {

  return (
    <>
      <Product />
      <OuterProducts/>
    </>
  );
};

export default ProductsPage;
