import { authorizationHandlers } from './authorization';
import { categoryHandlers } from './categorys';
import { productHandlers } from './products';

export const handlers = [
  ...categoryHandlers,
  ...productHandlers,
  ...authorizationHandlers,
];
