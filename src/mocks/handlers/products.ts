import { http, HttpResponse } from 'msw';
import { products } from '../data/products';

export const productsHandlers = [
  http.get('/products', () => {
    return HttpResponse.json({ products });
  }),
];
