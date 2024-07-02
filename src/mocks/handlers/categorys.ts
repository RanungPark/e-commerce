import { freshflowersRep, freshflowersProducts } from '../data/freshflowers';
import { rest } from 'msw';

export const categoryHandlers = [
  rest.get('/freshflowers', (req, res, ctx) => {
    if (!freshflowersProducts) {
      return res(
        ctx.status(404),
        ctx.json({ error: 'freshflowers not found' })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({ rep: freshflowersRep, products: freshflowersProducts })
    );
  }),
];
