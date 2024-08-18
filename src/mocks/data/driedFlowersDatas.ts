import { fetchImgURL } from '@utils/img';
import { ProductType, ProductBgType } from 'src/@types/product';

export const driedFlowersBg: ProductBgType = {
  title: 'Dried Flowers',
  imgPath: fetchImgURL({
    category: 'dried_flowers',
    name: 'dried_flowers_bg',
  }),
};

export const driedFlowersProducts: ProductType[] = [
  {
    id: 1,
    name: 'The Savoy',
    price: 75000,
    imgPath: fetchImgURL({
      category: 'dried_flowers',
      name: 'the_savoy',
    }),
    info: `The Savoy는 자연의 아름다움을 오래도록 간직할 수 있는 제품으로, 세심하게 건조 처리된 꽃들이 그 형태와 색상을 오래 유지합니다. 고급스럽고 세련된 디자인으로 공간에 우아함을 더해주는 장식 아이템입니다. 이 드라이 플라워는 섬세하게 건조된 다양한 꽃들이 조화롭게 배열되어 있습니다.`,
    category: 'dried flowers',
  },
  {
    id: 2,
    name: 'The Suri',
    price: 59000,
    imgPath: fetchImgURL({
      category: 'dried_flowers',
      name: 'the_suri',
    }),
    info: `The Suri는 집안의 다양한 공간에서 조화롭게 사용할 수 있으며, 특별한 행사나 일상적인 장식으로도 활용하기 좋습니다. 그 독특한 매력은 실내에서 자연의 아름다움을 오랫동안 감상할 수 있게 해주며, 따뜻하고 아늑한 분위기를 연출하는 데 도움을 줍니다.`,
    category: 'dried flowers',
  },
  {
    id: 3,
    name: 'The Naomi',
    price: 78000,
    imgPath: fetchImgURL({
      category: 'dried_flowers',
      name: 'the_naomi',
    }),
    info: `The Naomi는 풍성한 색감과 자연스러운 질감이 돋보입니다. 이 드라이 플라워는 다양한 텍스처와 색상이 어우러져, 자연의 섬세함을 담아내며 독특한 분위기를 자아냅니다. 인테리어의 분위기를 한층 더 고급스럽게 만들어주며, 특별한 장식이나 선물로도 훌륭합니다.`,
    category: 'dried flowers',
  },
  {
    id: 4,
    name: 'The Heath',
    price: 81500,
    imgPath: fetchImgURL({
      category: 'dried_flowers',
      name: 'the_heath',
    }),
    info: `The Heath는 강렬하고 매혹적인 빨간색으로 눈길을 사로잡는 장식 아이템입니다. 이 드라이 플라워는 생동감 넘치는 붉은색과 함께 섬세하게 배열된 식물들이 조화를 이루어, 공간에 강렬한 인상을 남깁니다. 뜨거운 열정과 활기를 불어넣는 색상으로, 집안에 따뜻하고 에너지 넘치는 분위기를 만들어줍니다. `,
    category: 'dried flowers',
  },
  {
    id: 5,
    name: 'Frosty Winter',
    price: 53000,
    imgPath: fetchImgURL({
      category: 'dried_flowers',
      name: 'frosty_winter',
    }),
    info: `Frosty Winter는 차가운 겨울의 신선한 감각을 담아낸 장식 아이템입니다. 이 드라이 플라워는 은은한 겨울철의 차가운 아름다움과 섬세한 질감을 표현하며, 공간에 신선하고 청명한 분위기를 더해줍니다. 섬세한 색조와 미세한 텍스처가 특징으로, 겨울의 상쾌한 공기와 얼음의 청량함을 전달합니다.`,
    category: 'dried flowers',
  },
  {
    id: 6,
    name: 'Rosy Perfection',
    price: 51500,
    imgPath: fetchImgURL({
      category: 'dried_flowers',
      name: 'rosy_perfection',
    }),
    info: `Rosy Perfection은 부드러운 장미색의 꽃들이 조화를 이루어, 공간에 따뜻하고 사랑스러운 분위기를 더해줍니다. 이 드라이 플라워는 정성스럽게 처리된 꽃들로 만들어져, 시간이 지나도 그 아름다움을 유지합니다. 로맨틱한 색조와 완벽하게 건조된 꽃들로 구성되어 있으며, 매혹적이고 세련된 느낌을 제공합니다.`,
    category: 'dried flowers',
  },
];
