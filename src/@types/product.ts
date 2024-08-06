export interface ProductType {
  id: number;
  name: string;
  price: number;
  imgPath: string;
  info: string;
}

export type PickFromProducts = Pick<ProductType, 'name' | 'price' | 'imgPath'>;

export interface ProductBgType {
  title: string;
  imgPath: string;
}
