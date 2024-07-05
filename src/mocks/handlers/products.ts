import { combinationProducts } from '@mocks/data/combinationProducts';
import { freshflowersProducts } from '@mocks/data/freshflowers';
import { outerProducts } from '@mocks/data/outerProducts';

import { http, HttpResponse } from 'msw';

export const productHandlers = [
  http.get('/freshflowers/:id', ({ params }) => {
    const { id } = params;
    const product = freshflowersProducts.find(
      product => product.id === Number(id)
    );

    if (!product) {
      return HttpResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return HttpResponse.json(
      { product, outerProducts, combinationProducts },
      { status: 200 }
    );
  }),
];
