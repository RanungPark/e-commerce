import { fetchImgURL } from '@utils/img';
import { ProductType, ProductBgType } from 'src/@types/product';

export const livePlantsBg: ProductBgType = {
  title: 'Live Plants',
  imgPath: fetchImgURL({
    category: 'live_plants',
    name: 'live_plant_bg',
  }),
};

export const livePlantsProducts: ProductType[] = [
  {
    id: 1,
    name: 'The Snake Plant',
    price: 186500,
    imgPath: fetchImgURL({
      category: 'live_plants',
      name: 'the_snake_plant',
    }),
    info: `The Snake Plant는 강렬한 녹색과 독특한 형태로 주목받는 식물로, 인테리어에 세련된 감각을 더해 줍니다. 이 식물은 긴, 뾰족한 잎이 위로 뻗어 나가며, 자연스러운 선과 리듬을 선사합니다. 공기 정화 능력이 뛰어나며, 실내의 유해 물질을 효과적으로 제거해 건강한 환경을 조성하는 데 도움을 줍니다.`,
    category: 'live_plants',
  },
  {
    id: 2,
    name: 'The Fiddle LeafFig',
    price: 272000,
    imgPath: fetchImgURL({
      category: 'live_plants',
      name: 'the_fiddle_leaf_fig',
    }),
    info: `The Fiddle Leaf Fig는 풍성한 잎과 우아한 형태로 실내 공간에 강렬한 시각적 임팩트를 제공하는 식물입니다. 큰, 광택 있는 잎이 피아노 건반 모양을 닮아 ‘피들 리프’라는 이름이 붙여졌습니다. 이 식물은 넓고 풍성한 잎 덕분에 공간에 풍부한 녹색의 느낌을 더하며, 현대적인 인테리어와 자연스러운 조화를 이룹니다.`,
    category: 'live_plants',
  },
  {
    id: 3,
    name: 'Large Monstera Deliciosa',
    price: 234000,
    imgPath: fetchImgURL({
      category: 'live_plants',
      name: 'large_monstera_deliciosa',
    }),
    info: `Large Monstera Deliciosa는 그 독특한 형태와 풍부한 녹색으로 실내 공간에 열대의 매력을 더해주는 식물입니다. 큰, 깊게 패인 잎은 자연스러운 디자인과 현대적인 스타일을 조화롭게 결합하여 강렬한 시각적 효과를 제공합니다. 이 식물은 열대 우림에서 자생하며, 큰 잎이 공기 중의 습도를 조절하고 실내 환경을 청결하게 유지하는 데 도움을 줍니다.`,
    category: 'live_plants',
  },
  {
    id: 4,
    name: 'Large Majesty Palm',
    price: 272000,
    imgPath: fetchImgURL({
      category: 'live_plants',
      name: 'large_majesty_palm',
    }),
    info: `Large Majesty Palm은 우아하고 고급스러운 외관으로 실내 공간에 열대의 분위기를 더하는 식물입니다. 길고 풍성한 잎이 손바닥 모양으로 퍼져 나가며, 이 식물은 자연의 품격을 집이나 사무실에 불어넣어 줍니다. 열대 우림의 고유한 매력을 실내로 가져다주며, 그 넓은 잎은 공간에 청량하고 활기찬 느낌을 제공합니다.`,
    category: 'live_plants',
  },
  {
    id: 5,
    name: 'Money Tree',
    price: 115000,
    imgPath: fetchImgURL({
      category: 'live_plants',
      name: 'money_tree',
    }),
    info: `Money Tree는 행운과 번영을 상징하는 식물로 알려져 있으며, 자주 비즈니스나 가정에서 행운을 불러오는 식물로 선택됩니다. 그 유연한 줄기와 풍성한 잎이 공간에 생동감과 균형을 더하며, 실내의 공기 질을 개선하는 데 도움을 줍니다. 이 식물은 밝은 간접광과 주기적인 물주기가 필요하며, 적당한 온도와 습도에서 잘 자랍니다.`,
    category: 'live_plants',
  },
  {
    id: 6,
    name: `Bird's Nest Fern`,
    price: 100500,
    imgPath: fetchImgURL({
      category: 'live_plants',
      name: `bird's_nest_fern`,
    }),
    info: `Bird's Nest Fern은 부드럽고 풍성한 녹색의 잎이 원형으로 모여 자생하며, 열대 우림의 분위기를 실내로 가져다줍니다. 이 식물은 공기 중의 습도를 유지하고, 실내 공기를 정화하는 데 도움을 주며, 일반적으로 밝은 간접광에서 잘 자랍니다. 일정한 습도와 주기적인 물주기가 필요하며, 낮은 조도에서도 잘 적응합니다.`,
    category: 'live_plants',
  },
];
