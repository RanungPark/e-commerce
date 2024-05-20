import { outerProductsHandlers } from './outerProducts';
import { productsHandlers } from './products';

export const handlers = [...outerProductsHandlers, ...productsHandlers];
