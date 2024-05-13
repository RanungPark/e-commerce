import { ReactNode } from 'react';
import About from 'src/pages/About';
import Checkout from 'src/pages/Checkout';
import Collection from 'src/pages/Collection';
import Home from 'src/pages/Home';
import Products from 'src/pages/Products';

export interface Routes {
  path: string;
  element: ReactNode;
}

export const routes: Routes[] = [
  { path: '', element: <Home /> },
  { path: '/collection', element: <Collection /> },
  { path: '/products/:productId', element: <Products /> },
  { path: '/company/about', element: <About /> },
  { path: '/order/checkout', element: <Checkout /> },
];
