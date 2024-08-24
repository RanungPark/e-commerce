import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import { Routes, routes } from './pages/routes';

interface RouteElement extends Routes {
  errorElement: ReactNode;
  children: Routes[];
}

const routeElement: RouteElement[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: routes,
  },
];

const router = createBrowserRouter(
  routeElement.map(route => {
    const childs = route.children?.map(childRoute => {
      return {
        path: childRoute.path,
        element: childRoute.element,
      };
    });
    return {
      ...route,
      children: childs,
    };
  })
);

export default router;
