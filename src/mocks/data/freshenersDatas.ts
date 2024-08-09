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
    price: 70,
    imgPath: IMG_PATH.Fresheners.CedarLavender,
    info: `Snowfall 부케는 은은한 향기로 유명한 우아한 화이트 장미와 계절의 푸르름이 어우러져 순수한 아름다움을 더욱 돋보이게 합니다. 이 절묘한 부케는 어떤 상황에서도 세련미와 우아함을 더합니다.`,
    category: 'fresheners',
  },
  {
    id: 2,
    name: `Himalayan Salt & Rosewater`,
    price: 70,
    imgPath: IMG_PATH.Fresheners.HimalayanSaltRosewater,
    info: `Dawn's Delight 부케는 매혹적인 색감과 은은한 향기로 유명한 복숭아와 핑크 장미를 선보입니다. 계절의 잎사귀로 포인트를 준 이 부케는 어떤 환경에서도 따뜻함과 매력을 선사합니다.`,
    category: 'fresheners',
  },
  {
    id: 3,
    name: 'Wild Mint & Eucalyptus',
    price: 70,
    imgPath: IMG_PATH.Fresheners.WildMintEucalyptus,
    info: `Pink Elegance 부케는 선명한 색상과 달콤한 향기로 사랑받는 아름다운 핑크 장미가 특징입니다. 계절의 푸르름과 어우러진 이 부케는 우아함과 세련미를 발산합니다.`,
    category: 'fresheners',
  },
  {
    id: 4,
    name: 'Grapefruit',
    price: 70,
    imgPath: IMG_PATH.Fresheners.Grapefruit,
    info: `Rustic Charm 부케는 흙빛 장미와 야생화를 결합하여 자연스럽고 매력적인 아름다움을 연출합니다. 계절의 단풍으로 더욱 돋보이는 이 부케는 시골의 아름다움을 떠올리게 합니다.`,
    category: 'fresheners',
  },
  {
    id: 5,
    name: 'Ocean Mist',
    price: 70,
    imgPath: IMG_PATH.Fresheners.OceanMist,
    info: `Autumn Symphony 부케는 따뜻한 톤의 장미와 제철 단풍이 조화롭게 어우러져 가을의 정수를 담아낸 것이 특징입니다. 가을의 생생한 색감과 아늑한 느낌을 실내에서도 느낄 수 있는 부케입니다.`,
    category: 'fresheners',
  },
  {
    id: 6,
    name: 'Driftwood',
    price: 70,
    imgPath: IMG_PATH.Fresheners.Driftwood,
    info: `Rosy Delight 부케는 아름다움과 은은한 향기로 유명한 데이비드 오스틴 장미를 엄선하여 선보입니다. 제철 잎사귀와 어우러져 이 아름다운 꽃의 숭고한 매력을 더욱 돋보이게 하는 부케입니다.`,
    category: 'fresheners',
  },
];
