import { freshflowersRep, freshflowersProducts } from '../data/freshflowers';
import { http, HttpResponse } from 'msw';

export const categoryHandlers = [
  http.get('/freshflowers', () => {
    if (!freshflowersProducts) {
      return HttpResponse.json(
        { error: 'freshflowers not found' },
        { status: 404 }
      );
    }

    return HttpResponse.json(
      {
        rep: freshflowersRep,
        products: freshflowersProducts,
      },
      { status: 200 }
    );
  }),
];
