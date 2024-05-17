import { ReactNode } from 'react';
import About from 'src/pages/About';
import Checkout from 'src/pages/Checkout';
import Category from 'src/pages/Category';
import Home from 'src/pages/Home';
import Products from 'src/pages/Products';

export interface Routes {
  path: string;
  element: ReactNode;
}

export const routes: Routes[] = [
  { path: '', element: <Home /> },
  { path: '/categories?name=:categoryName', element: <Category /> },
  { path: '/products/:productId', element: <Products /> },
  { path: '/company/about', element: <About /> },
  { path: '/order/checkout', element: <Checkout /> },
];
