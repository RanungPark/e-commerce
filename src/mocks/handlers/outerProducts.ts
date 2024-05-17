import { http, HttpResponse } from 'msw';
import { outerProducts } from '../data/outerProducts';

export const outerProductsHandlers = [
  http.get('/v1/products/outerProducts', () => {
    return HttpResponse.json(outerProducts);
  }),
];
