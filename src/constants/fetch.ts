import { createFetch } from 'src/utils/fetch';

interface ProductV1BaseFetch {
  categoryName: string;
}

const baseFetch = createFetch({})({
  headers: [{ key: 'Content-Type', value: 'application/json' }],
  baseUrl: '',
});

const v1BaseFetch = baseFetch({
  version: 'v1',
});

export const productV1BaseFetch = ({ categoryName }: ProductV1BaseFetch) =>
  v1BaseFetch({ endpoint: `${categoryName}/products` });
