import AboutPage from './AboutPage';
import CategoryPage from './CategoryPage';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import { ReactNode } from 'react';
import OrderPage from './OrderPage';
import LoginPage from './LoginPage';
import SingupPage from './SingupPage';

export interface Routes {
  path: string;
  element: ReactNode;
}

export const routes: Routes[] = [
  { path: '', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SingupPage /> },
  { path: '/categories/:categoryName', element: <CategoryPage /> },
  {
    path: 'categories/:categoryName/products/:productId',
    element: <ProductsPage />,
  },
  { path: '/company/about', element: <AboutPage /> },
  { path: '/order', element: <OrderPage /> },
];