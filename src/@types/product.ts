export interface ProductType {
  id: number;
  name: string;
  price: number;
  productImg: string;
  info: string;
}

export type PickFromProducts = Pick<ProductType, 'name' | 'price' | 'productImg'>;

export interface RepType {
  type: string;
  img: string;
}
