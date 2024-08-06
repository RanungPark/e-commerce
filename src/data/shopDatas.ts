import { IMG_PATH } from '@constants/imgPath';

interface ShopDatas {
  children: string;
  imgPath: string;
  url: string;
}

export const shopDatas: ShopDatas[] = [
  {
    children: 'Fresh Flowers',
    imgPath: IMG_PATH.FreshFlowers.FreshFlowersRep,
    url: `/categories/fresh-flowers`,
  },
  {
    children: 'Dried Flowers',
    imgPath: IMG_PATH.DriedFlowers.DriedFlowersRep,
    url: `/categories/dried-flowers`,
  },
  {
    children: 'Live Plants',
    imgPath: IMG_PATH.LivePlants.LivePlantRep,
    url: `/categories/live-plants`,
  },
  {
    children: 'Designer Vases',
    imgPath: IMG_PATH.DesignerVases.DesignerVasesRep,
    url: `/categories/designer-vases`,
  },
  {
    children: 'Aroma Candels',
    imgPath: IMG_PATH.AromaCandles.AromaCandlesRep,
    url: `/categories/aroma-candels`,
  },
  {
    children: 'Fresheners',
    imgPath: IMG_PATH.Fresheners.FreshenersRep,
    url: `/categories/fresheners`,
  },
];
