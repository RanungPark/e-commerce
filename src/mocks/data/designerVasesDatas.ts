import { ProductType, ProductBgType } from 'src/@types/product';
import { IMG_PATH } from '@constants/imgPath';

export const designerVasesBg: ProductBgType = {
  title: 'Designer Vases',
  imgPath: IMG_PATH.DesignerVases.DesignerVasesBg,
};

export const designerVasesProducts: ProductType[] = [
  {
    id: 1,
    name: 'Bernadotte Vase',
    price: 106000,
    imgPath: IMG_PATH.DesignerVases.BernadotteVase,
    info: `Bernadotte Vase는 모던하고 세련된 디자인으로 어떤 공간에서도 돋보이며, 미니멀한 인테리어와 완벽하게 어우러집니다. 꽃이나 식물을 꽂아 두지 않아도 그 자체로 예술 작품처럼 공간을 장식할 수 있는 제품입니다. 뛰어난 내구성과 부식 방지 특성을 지녀 오랫동안 변함없이 사용할 수 있습니다.`,
    category: 'designer vases',
  },
  {
    id: 2,
    name: 'Botanica Vase',
    price: 191000,
    imgPath: IMG_PATH.DesignerVases.BotanicaVase,
    info: `Botanica Vase는 클래식한 우아함과 현대적인 감각이 조화롭게 어우러진 꽃병입니다. 고급스러운 스테인리스 스틸 소재로 제작되어 견고하면서도 세련된 분위기를 자아내며, 매끄럽고 반짝이는 표면이 공간에 고급스러움을 더해줍니다.`,
    category: 'designer vases',
  },
  {
    id: 3,
    name: 'Pot Vase',
    price: 167000,
    imgPath: IMG_PATH.DesignerVases.PotVase,
    info: `Pot Vase는 점토로 만들어져 자연스러운 질감과 따뜻한 느낌이 특징입니다. 전통적인 도자기 기법을 현대적으로 재해석한 이 꽃병은 흙 본연의 색감과 질감을 그대로 살려내며, 수작업으로 완성된 유기적인 형태는 각각의 제품마다 고유한 매력을 지니고 있으며, 실내 공간에 따뜻하고 자연스러운 분위기를 더해줍니다.`,
    category: 'designer vases',
  },
  {
    id: 4,
    name: 'Ceramic Vase',
    price: 77000,
    imgPath: IMG_PATH.DesignerVases.CeramicVase,
    info: `Ceramic Vase는 정교하게 만들어진 도자기 꽃병으로, 우아한 디자인과 뛰어난 품질이 특징입니다. 고온에서 구워진 세라믹 소재는 단단하고 내구성이 뛰어나며, 다양한 색상과 유약 처리로 매끄럽고 고급스러운 표면을 자랑합니다.`,
    category: 'designer vases',
  },
  {
    id: 5,
    name: 'Slim Vase',
    price: 92000,
    imgPath: IMG_PATH.DesignerVases.SlimVase,
    info: `Slim Vase는 유리로 만들어진 세련된 꽃병으로, 얇고 우아한 실루엣이 특징입니다. 일반적인 유리보다 강화된 소재를 사용해 내구성을 높였기 때문에 일상적인 사용에도 충분히 견딜 수 있습니다. 투명한 디자인은 꽃이나 식물의 자연스러운 아름다움을 그대로 보여주며, 공간을 한층 더 밝고 고급스럽게 연출해 줍니다.`,
    category: 'designer vases',
  },
  {
    id: 6,
    name: 'Clear Vase',
    price: 168000,
    imgPath: IMG_PATH.DesignerVases.ClearVase,
    info: `Clear Vase는 튼튼하고 안정감 있는 디자인이 특징입니다. 두꺼운 유리 소재로 제작되어 내구성이 뛰어나며, 무게감 있는 구조로 인해 안정적으로 꽃이나 식물을 지지할 수 있습니다. 크고 투명한 디자인은 꽃의 아름다움과 자연스러움을 더욱 돋보이게 하며, 다양한 꽃꽂이에 적합합니다.`,
    category: 'designer vases',
  },
];
