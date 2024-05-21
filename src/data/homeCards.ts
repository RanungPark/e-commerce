import { IMG_PATH } from 'src/constants/imgPath';

interface HomeCardDatas {
  label: string;
  productImg: string;
}

export const homeCardsDatas: HomeCardDatas[] = [
  {
    label: 'FreshFlowers',
    productImg: IMG_PATH.FLOWER.Snowfall,
  },
  {
    label: 'DriedFlowers',
    productImg: IMG_PATH.FLOWER.DriedFlowers,
  },
  {
    label: 'LivePlants',
    productImg: IMG_PATH.FLOWER.LivePlants,
  },
  {
    label: 'AromaCandels',
    productImg: IMG_PATH.OTHER.AromaCandels,
  },
  {
    label: 'Fresheners',
    productImg: IMG_PATH.OTHER.Fresheners,
  },
];
