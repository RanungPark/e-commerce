import { freshFlowersBg, freshFlowersProducts } from '../data/freshFlowers';
import { http, HttpResponse } from 'msw';

export const categoryHandlers = [
  http.get('/fresh-flowers', () => {
    if (!freshFlowersProducts) {
      return HttpResponse.json(
        { error: 'fresh flowers not found' },
        { status: 404 }
      );
    }

    return HttpResponse.json(
      {
        products: freshFlowersProducts,
        productBg: freshFlowersBg,
      },
      { status: 200 }
    );
  }),
];
