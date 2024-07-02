import { combinationProducts } from '@mocks/data/combinationProducts';
import { freshflowersProducts } from '@mocks/data/freshflowers';
import { outerProducts } from '@mocks/data/outerProducts';

import { rest } from 'msw';

export const productHandlers = [
  rest.get('/freshflowers/:id', (req, res, ctx) => {
    const { id } = req.params;
    const product = freshflowersProducts.find(
      product => product.id === Number(id)
    );

    if (!product) {
      return res(ctx.status(404), ctx.json({ error: 'Product not found' }));
    }

    return res(
      ctx.status(200),
      ctx.json({ product, outerProducts, combinationProducts })
    );
  }),
];
