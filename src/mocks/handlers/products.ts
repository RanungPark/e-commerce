import { aromaCandlesProducts } from './../data/aromaCandlesDatas';
import { designerVasesProducts } from '@mocks/data/designerVasesDatas';
import { driedFlowersProducts } from '@mocks/data/driedFlowersDatas';
import { freshenersProducts } from '@mocks/data/freshenersDatas';
import { freshFlowersProducts } from '@mocks/data/freshFlowersDatas';
import { livePlantsProducts } from '@mocks/data/livePlantsDatas';

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
        outerProducts: aromaCandlesProducts,
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
        outerProducts: driedFlowersProducts,
      },
      { status: 200 }
    );
  }),

  http.get('/aroma_candles/:id', ({ params }) => {
    const { id } = params;
    const product = aromaCandlesProducts.find(
      product => product.id === Number(id)
    );

    if (!product) {
      return HttpResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return HttpResponse.json(
      {
        product,
        selectProducts: aromaCandlesProducts,
        outerProducts: livePlantsProducts,
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
        outerProducts: freshFlowersProducts,
      },
      { status: 200 }
    );
  }),
];
