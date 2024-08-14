import { ProductType, ProductBgType } from 'src/@types/product';
import { IMG_PATH } from '@constants/imgPath';

export const freshenersBg: ProductBgType = {
  title: 'Fresheners',
  imgPath: IMG_PATH.Fresheners.FreshenersBg,
};

export const freshenersProducts: ProductType[] = [
  {
    id: 1,
    name: 'Cedar & Lavender',
    price: 87000,
    imgPath: IMG_PATH.Fresheners.CedarLavender,
    info: `Cedar & Lavender는 깊고 우디한 시더와 부드럽고 진정되는 라벤더 향이 어우러진 제품입니다. 이 디퓨저는 시더의 따뜻하고 안정감 있는 향과 라벤더의 편안한 허브 향이 조화를 이루어, 공간에 고요하고 아늑한 분위기를 제공합니다.`,
    category: 'fresheners',
  },
  {
    id: 2,
    name: `Himalayan Salt & Rosewater`,
    price: 43500,
    imgPath: IMG_PATH.Fresheners.HimalayanSaltRosewater,
    info: `Himalayan Salt & Rosewater는 고급스러운 히말라야 소금의 정화된 느낌과 부드러운 장미수의 우아한 향이 어우러진 제품입니다. 이 디퓨저는 히말라야 소금의 미네랄 향과 장미수의 섬세하고 감미로운 향이 조화를 이루어, 공간에 상쾌하고 편안한 분위기를 제공합니다.`,
    category: 'fresheners',
  },
  {
    id: 3,
    name: 'Wild Mint & Eucalyptus',
    price: 79000,
    imgPath: IMG_PATH.Fresheners.WildMintEucalyptus,
    info: `Wild Mint & Eucalyptus는 상쾌한 민트와 청량한 유칼립투스의 향이 조화를 이루는 제품입니다. 이 디퓨저는 신선한 민트의 상쾌함과 유칼립투스의 자연스러운 청량감이 어우러져, 공간에 활력 넘치는 에너지를 제공합니다.`,
    category: 'fresheners',
  },
  {
    id: 4,
    name: 'Grapefruit',
    price: 43500,
    imgPath: IMG_PATH.Fresheners.Grapefruit,
    info: `Grapefruit는 상큼하고 청량한 자몽의 향을 담아낸 제품으로, 공간에 밝고 활기찬 분위기를 제공합니다. 자몽의 상쾌한 향이 기분을 환기시키고 에너지를 북돋아 주며, 공간을 자연스럽게 상쾌하게 만들어 줍니다. 자몽의 시트러스 향이 자연스럽게 퍼져나가면서, 공간에 생동감과 경쾌함을 더해 줍니다.`,
    category: 'fresheners',
  },
  {
    id: 5,
    name: 'Ocean Mist',
    price: 79000,
    imgPath: IMG_PATH.Fresheners.OceanMist,
    info: `Ocean Mist는 깊고 신선한 바다의 안개를 연상시키는 향으로, 공간에 상쾌하고 청량한 느낌을 제공합니다. 바다의 미스트처럼 부드럽고 시원한 향이 자연스럽게 퍼지면서, 공간에 편안하고 평화로운 분위기를 만들어줍니다.`,
    category: 'fresheners',
  },
  {
    id: 6,
    name: 'Driftwood',
    price: 79000,
    imgPath: IMG_PATH.Fresheners.Driftwood,
    info: `Driftwood는 자연스럽고 편안한 해변의 분위기를 담아낸 제품입니다. 해변에서 부드럽게 퍼지는 나무의 향기와 바다의 염분이 조화를 이루며, 공간에 따뜻하고 차분한 느낌을 제공합니다. 은은한 나무 향과 바다의 미세한 염분이 결합되어, 실내에 고요하고 편안한 환경을 조성해 줍니다.`,
    category: 'fresheners',
  },
];
