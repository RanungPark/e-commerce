import AboutPage from './AboutPage';
import CategoryPage from './CategoryPage';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import { ReactNode } from 'react';
import LoginPage from './LoginPage';
import CheckoutPage from './CheckoutPage';
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
  { path: '/company/about', element: <AboutPage /> },
  { path: '/checkout', element: <CheckoutPage /> },
  { path: '/admin/test/component', element: <TestPage /> },
];
