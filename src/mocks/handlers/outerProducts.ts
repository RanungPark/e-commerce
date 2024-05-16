import { http, HttpResponse } from 'msw';
import { outerProducts } from '../data/outerProducts';

export const outerProductsHandlers = [
  http.get('/products/outerProducts', () => {
    return HttpResponse.json(outerProducts);
  }),
];
