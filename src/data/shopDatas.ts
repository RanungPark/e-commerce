import { fetchImgURL, imgOptimization } from '@utils/img';

interface ShopDatas {
  children: string;
  imgPath: string;
  url: string;
}

export const shopDatas: ShopDatas[] = [
  {
    children: 'Fresh Flowers',
    imgPath:
      fetchImgURL({ category: 'fresh_flowers', name: 'fresh_flowers_rep' }) +
      imgOptimization({
        width: 400,
        height: 400,
      }),
    url: `/categories/fresh_flowers`,
  },
  {
    children: 'Dried Flowers',
    imgPath:
      fetchImgURL({ category: 'dried_flowers', name: 'dried_flowers_rep' }) +
      imgOptimization({
        width: 400,
        height: 400,
      }),
    url: `/categories/dried_flowers`,
  },
  {
    children: 'Live Plants',
    imgPath:
      fetchImgURL({ category: 'live_plants', name: 'live_plant_rep' }) +
      imgOptimization({
        width: 400,
        height: 400,
      }),
    url: `/categories/live_plants`,
  },
  {
    children: 'Designer Vases',
    imgPath:
      fetchImgURL({ category: 'designer_vases', name: 'designer_vases_rep' }) +
      imgOptimization({
        width: 400,
        height: 400,
      }),
    url: `/categories/designer_vases`,
  },
  {
    children: 'Aroma Candels',

    imgPath:
      fetchImgURL({ category: 'aroma_candles', name: 'aroma_candles_rep' }) +
      imgOptimization({
        width: 400,
        height: 400,
      }),
    url: `/categories/aroma_candels`,
  },
  {
    children: 'Fresheners',
    imgPath:
      fetchImgURL({ category: 'fresheners', name: 'fresheners_rep' }) +
      imgOptimization({
        width: 400,
        height: 400,
      }),
    url: `/categories/fresheners`,
  },
];
