import Loading from '@components/common/Loading';
import Product from '@components/product';
import OuterProducts from '@components/product/OuterProducts';
import { useQuery } from '@tanstack/react-query';
import { fetchProduct } from '@utils/api';
import { useNavigate, useParams } from 'react-router';
import { ProductType } from 'src/@types/product';

interface IProduct {
  product: ProductType;
  selectProducts: ProductType[];
  outerProducts: ProductType[];
}

const ProductsPage = () => {
  const param = useParams();

  const { data, isLoading, error } = useQuery<IProduct>({
    queryKey: [`${param.categoryName}_${param.productId}`],
    queryFn: () => fetchProduct(param.categoryName!, param.productId!),
  });

  const navigate = useNavigate();

  const goToNotFound = () => {
    navigate('/error');
  };

  if (error) goToNotFound();

  if (data && !isLoading) {
    const { product, outerProducts, selectProducts } = data;
    return (
      <>
        <Product product={product} selectProducts={selectProducts} />
        <OuterProducts outerProducts={outerProducts} />
      </>
    );
  }

  return <Loading />;
};

export default ProductsPage;
