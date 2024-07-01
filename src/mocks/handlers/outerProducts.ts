import { outerProducts } from '../data/outerProducts';

import { rest } from 'msw';

export const outerProductsHandlers = [
  rest.get('/products/outerProducts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(outerProducts));
  }),
];
