import { ReactNode } from 'react';

import CategoryPage from './CategoryPage';
import CheckoutPage from './CheckoutPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import ProductsPage from './ProductsPage';
import TestPage from './TestPage';

export interface Routes {
  path: string;
  element: ReactNode;
}

export const routes: Routes[] = [
  { path: '', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/categories/:categoryName', element: <CategoryPage /> },
  {
    path: 'categories/:categoryName/products/:productId',
    element: <ProductsPage />,
  },
  { path: '/checkout', element: <CheckoutPage /> },
  { path: '/admin/test/component', element: <TestPage /> },
];
