import { http, HttpResponse } from 'msw';
import { products } from '../data/freshflowers';

export const productsHandlers = [
  http.get('/v1/freshflowers/products', () => {
    return HttpResponse.json({ products });
  }),
];
