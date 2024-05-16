import { productsList } from 'src/@types/product';
import { imgPath } from 'src/constants/imgPath';

export const outerProducts: productsList[] = [
  {
    label: 'Rattan Grapefruit',
    price: 'price 48$',
    productImg: imgPath.other.RattanGrapefruit,
  },
  {
    label: 'Lime & Matcha',
    price: 'price 46$',
    productImg: imgPath.other.LimeMatcha,
  },
  {
    label: 'Cedar & Lavender',
    price: 'price 64$',
    productImg: imgPath.other.CedarLavender,
  },
  {
    label: 'Ocean Mist',
    price: 'price 58$',
    productImg: imgPath.other.OceanMist,
  },
];
