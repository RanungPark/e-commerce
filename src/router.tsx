import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import { ReactNode } from 'react';
import { Routes, routes } from './utils/routes';

interface RouteElement extends Routes {
  errorElement: ReactNode;
  children: Routes[];
}

const routeElement: RouteElement[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
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
