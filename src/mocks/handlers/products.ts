import { aromaCandelsProducts } from '@mocks/data/aromaCandels';
import { designerVasesProducts } from '@mocks/data/designerVases';
import { driedFlowersProducts } from '@mocks/data/DriedFlowers';
import { freshenersProducts } from '@mocks/data/fresheners';
import { freshFlowersProducts } from '@mocks/data/freshFlowers';
import { livePlantsProducts } from '@mocks/data/livePlants';

import { http, HttpResponse } from 'msw';

export const productHandlers = [
  http.get('/fresh_flowers/:id', ({ params }) => {
    const { id } = params;
    const product = freshFlowersProducts.find(
      product => product.id === Number(id)
    );

    if (!product) {
      return HttpResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return HttpResponse.json(
      {
        product,
        selectProducts: freshFlowersProducts,
        outerProducts: aromaCandelsProducts,
      },
      { status: 200 }
    );
  }),

  http.get('/dried_flowers/:id', ({ params }) => {
    const { id } = params;
    const product = driedFlowersProducts.find(
      product => product.id === Number(id)
    );

    if (!product) {
      return HttpResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return HttpResponse.json(
      {
        product,
        selectProducts: driedFlowersProducts,
        outerProducts: freshenersProducts,
      },
      { status: 200 }
    );
  }),

  http.get('/live_plants/:id', ({ params }) => {
    const { id } = params;
    const product = livePlantsProducts.find(
      product => product.id === Number(id)
    );

    if (!product) {
      return HttpResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return HttpResponse.json(
      {
        product,
        selectProducts: livePlantsProducts,
        outerProducts: designerVasesProducts,
      },
      { status: 200 }
    );
  }),

  http.get('/designer_vases/:id', ({ params }) => {
    const { id } = params;
    const product = designerVasesProducts.find(
      product => product.id === Number(id)
    );

    if (!product) {
      return HttpResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return HttpResponse.json(
      {
        product,
        selectProducts: designerVasesProducts,
        outerProducts: aromaCandelsProducts,
      },
      { status: 200 }
    );
  }),

  http.get('/aroma_candels/:id', ({ params }) => {
    const { id } = params;
    const product = aromaCandelsProducts.find(
      product => product.id === Number(id)
    );

    if (!product) {
      return HttpResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return HttpResponse.json(
      {
        product,
        selectProducts: aromaCandelsProducts,
        outerProducts: freshenersProducts,
      },
      { status: 200 }
    );
  }),

  http.get('/fresheners/:id', ({ params }) => {
    const { id } = params;
    const product = freshenersProducts.find(
      product => product.id === Number(id)
    );

    if (!product) {
      return HttpResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return HttpResponse.json(
      {
        product,
        selectProducts: freshenersProducts,
        outerProducts: designerVasesProducts,
      },
      { status: 200 }
    );
  }),
];
