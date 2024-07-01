import { freshflowersRep, products } from '../data/freshflowers';
import { rest } from 'msw';

export const productsHandlers = [
  rest.get('/freshflowers/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ rep: freshflowersRep, products }));
  }),
];
