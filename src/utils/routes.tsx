import AboutPage from "@pages/About";
import CategoryPage from "@pages/Categorys";
import CheckoutPage from "@pages/Checkout";
import HomePage from "@pages/Home";
import ProductsPage from "@pages/Products";
import { ReactNode } from "react";

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
