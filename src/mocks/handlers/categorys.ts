import { http, HttpResponse } from 'msw';
import { driedFlowersBg, driedFlowersProducts } from '@mocks/data/driedFlowers';
import { freshFlowersBg, freshFlowersProducts } from '@mocks/data/freshFlowers';
import { livePlantsBg, livePlantsProducts } from '@mocks/data/livePlants';
import { aromaCandelsBg, aromaCandelsProducts } from '@mocks/data/aromaCandels';
import { freshenersBg, freshenersProducts } from '@mocks/data/fresheners';
import {
  designerVasesBg,
  designerVasesProducts,
} from '@mocks/data/designerVases';

export const categoryHandlers = [
  http.get('/fresh_flowers', () => {
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

  http.get('/dried_flowers', () => {
    if (!driedFlowersProducts) {
      return HttpResponse.json(
        { error: 'dried flowers not found' },
        { status: 404 }
      );
    }

    return HttpResponse.json(
      {
        products: driedFlowersProducts,
        productBg: driedFlowersBg,
      },
      { status: 200 }
    );
  }),

  http.get('/live_plants', () => {
    if (!livePlantsProducts) {
      return HttpResponse.json(
        { error: 'live plants not found' },
        { status: 404 }
      );
    }

    return HttpResponse.json(
      {
        products: livePlantsProducts,
        productBg: livePlantsBg,
      },
      { status: 200 }
    );
  }),

  http.get('/designer_vases', () => {
    if (!designerVasesProducts) {
      return HttpResponse.json(
        { error: 'designer vases not found' },
        { status: 404 }
      );
    }

    return HttpResponse.json(
      {
        products: designerVasesProducts,
        productBg: designerVasesBg,
      },
      { status: 200 }
    );
  }),

  http.get('/aroma_candels', () => {
    if (!aromaCandelsProducts) {
      return HttpResponse.json(
        { error: 'aroma candels not found' },
        { status: 404 }
      );
    }

    return HttpResponse.json(
      {
        products: aromaCandelsProducts,
        productBg: aromaCandelsBg,
      },
      { status: 200 }
    );
  }),

  http.get('/fresheners', () => {
    if (!freshenersProducts) {
      return HttpResponse.json(
        { error: 'fresheners not found' },
        { status: 404 }
      );
    }

    return HttpResponse.json(
      {
        products: freshenersProducts,
        productBg: freshenersBg,
      },
      { status: 200 }
    );
  }),
];
