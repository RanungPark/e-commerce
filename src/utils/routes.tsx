import { ReactNode } from 'react';
import AboutPage from 'src/pages/About';
import CategoryPage from 'src/pages/Categorys';
import CheckoutPage from 'src/pages/Checkout';
import HomePage from 'src/pages/Home';
import ProductsPage from 'src/pages/Products';

export interface Routes {
  path: string;
  element: ReactNode;
}

export const routes: Routes[] = [
  { path: '', element: <HomePage /> },
  { path: '/categories/:categoryName', element: <CategoryPage /> },
  {
    path: 'categories/:categoryName/products/:productId',
    element: <ProductsPage />,
  },
  { path: '/company/about', element: <AboutPage /> },
  { path: '/order/checkout', element: <CheckoutPage /> },
];
