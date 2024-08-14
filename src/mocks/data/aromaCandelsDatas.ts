import { ProductType, ProductBgType } from 'src/@types/product';
import { IMG_PATH } from '@constants/imgPath';

export const aromaCandelsBg: ProductBgType = {
  title: 'Aroma Candels',
  imgPath: IMG_PATH.AromaCandles.AromaCandlesBg,
};

export const aromaCandelsProducts: ProductType[] = [
  {
    id: 1,
    name: 'Rattan Grapefruit',
    price: 65000,
    imgPath: IMG_PATH.AromaCandles.RattanGrapefruit,
    info: `Rattan Grapefruit는 상큼한 그레이프프루트 향이 특징으로, 공간을 신선하고 활기찬 분위기로 가득 채웁니다. 고급스러운 라탄 용기는 자연스러운 매력을 더하며, 디자인이 세련되어 어떤 인테리어에도 잘 어울립니다. 또한, 라탄 용기의 내구성은 향초의 품질을 높여주며, 방 안을 한층 더 아늑하고 고급스럽게 만들어 줍니다.`,
    category: 'aroma candels',
  },
  {
    id: 2,
    name: `Himalayan Salt & Rosewater`,
    price: 103000,
    imgPath: IMG_PATH.AromaCandles.HimalayanSaltRosewater,
    info: `Himalayan Salt & Rosewater는 고급스러운 히말라야 소금과 부드러운 장미수 향이 조화를 이루는 제품입니다. 이 향초는 천연 히말라야 소금을 사용하여 공간에 상쾌하고 정화된 느낌을 선사하며, 장미수의 은은하고 우아한 향이 따뜻하고 편안한 분위기를 만들어줍니다.`,
    category: 'aroma candels',
  },
  {
    id: 3,
    name: 'Charcoal Woods',
    price: 106000,
    imgPath: IMG_PATH.AromaCandles.CharcoalWoods,
    info: `Charcoal Woods는 깊고 고요한 숲의 향을 담아낸 제품으로, 차분하고 묵직한 분위기를 제공합니다. 이 향초는 숯의 연기와 우디한 나무 향이 조화를 이루어, 공간에 자연스럽고 안정감 있는 분위기를 만들어줍니다. 매끄러운 검정색 용기에 담긴 이 향초는 현대적이고 세련된 감각을 더하며 고급스러운 인테리어 포인트가 됩니다.`,
    category: 'aroma candels',
  },
  {
    id: 4,
    name: 'Lime & Matcha',
    price: 62500,
    imgPath: IMG_PATH.AromaCandles.LimeMatcha,
    info: `Lime & Matcha는 상큼한 라임과 진한 말차의 조화가 특징인 제품으로, 신선하고 활기찬 분위기를 제공합니다. 이 향초는 라임의 시원하고 상쾌한 향과 말차의 깊고 풍부한 녹차 향이 어우러져 공간에 자연스럽고 깨끗한 느낌을 더합니다. 향초가 천천히 타면서 방 안에 상쾌한 향이 퍼지며, 기분을 맑게 하고 에너지를 북돋아줍니다.`,
    category: 'aroma candels',
  },
  {
    id: 5,
    name: 'Bamboo',
    price: 49000,
    imgPath: IMG_PATH.AromaCandles.Bamboo,
    info: `Bamboo는 신선하고 자연스러운 대나무의 향을 담아내어, 공간에 상쾌하고 깨끗한 느낌을 제공합니다. 이 향초는 대나무 숲의 조용하고 평화로운 분위기를 재현하며, 차분하면서도 시원한 향기가 특징입니다. 자연의 편안함을 실내에서 경험할 수 있게 해줍니다.`,
    category: 'aroma candels',
  },
  {
    id: 6,
    name: 'Driftwood',
    price: 106000,
    imgPath: IMG_PATH.AromaCandles.Driftwood,
    info: `Driftwood는 자연의 해변에서 발견한 표류목의 향을 담아낸 제품으로, 차분하고 따뜻한 분위기를 제공합니다. 이 향초는 바다의 소금기와 자연스럽게 마모된 나무의 향이 조화를 이루어, 공간에 편안하고 고요한 느낌을 더합니다. 자연의 여유로움을 실내에서 경험할 수 있게 해줍니다.`,
    category: 'aroma candels',
  },
];
