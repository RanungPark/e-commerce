import { http, HttpResponse } from 'msw';
import { freshflowersRep, products } from '../data/freshflowers';

export const productsHandlers = [
  http.get('/v1/freshflowers/products', () => {
    return HttpResponse.json({
      rep: freshflowersRep,
      products,
    });
  }),
];
