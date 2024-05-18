export interface Products {
  id: number;
  name: string;
  price: number;
  productImg: string;
  info: string;
}

export type PickFromProducts = Pick<Products, 'name' | 'price' | 'productImg'>;
