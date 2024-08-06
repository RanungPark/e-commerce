import { PickFromProducts } from 'src/@types/product';
import { IMG_PATH } from '@constants/imgPath';

export const combinationProducts: PickFromProducts[] = [
  {
    name: 'Bernadotte Vase',
    price: 15,
    imgPath: IMG_PATH.DesignerVases.BernadotteVase,
  },
  {
    name: 'Botanica Vase',
    price: 45,
    imgPath: IMG_PATH.DesignerVases.BotanicaVase,
  },
  {
    name: 'Ceramic Vase',
    price: 35,
    imgPath: IMG_PATH.DesignerVases.CeramicVase,
  },
  {
    name: 'Clear Vase',
    price: 25,
    imgPath: IMG_PATH.DesignerVases.ClearVase,
  },
];
