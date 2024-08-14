import ImgCarousel from '@components/utilities/ImgCarousel';
import { IMG_PATH } from '@constants/imgPath';
import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Utilities/ImgCarousel',
  component: ImgCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <BrowserRouter>
        <div style={{ width: '728px' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  argTypes: {
    products: {
      control: 'object',
      description: 'ImgCarousel 포함될 상품들',
    },
  },
} satisfies Meta<typeof ImgCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: [
      {
        id: 1,
        name: 'The Snake Plant',
        price: 70,
        imgPath: IMG_PATH.LivePlants.TheSnakePlant,
        info: `The Savoy 드라이 플라워는 드라이 플라워 어레인지먼트 중 하나로, 고급스럽고 세련된 디자인을 특징으로 합니다. 이러한 어레인지먼트는 특히 호텔, 레스토랑, 고급 주택 등의 인테리어 장식으로 사용되며, 생화와는 다른 매력과 오래 지속되는 아름다움을 제공합니다.`,
        category: 'live plants',
      },
      {
        id: 2,
        name: 'The Fiddle LeafFig',
        price: 70,
        imgPath: IMG_PATH.LivePlants.TheFiddleLeafFig,
        info: `Dawn's Delight 부케는 매혹적인 색감과 은은한 향기로 유명한 복숭아와 핑크 장미를 선보입니다. 계절의 잎사귀로 포인트를 준 이 부케는 어떤 환경에서도 따뜻함과 매력을 선사합니다.`,
        category: 'live plants',
      },
      {
        id: 3,
        name: 'Large Monstera Deliciosa',
        price: 70,
        imgPath: IMG_PATH.LivePlants.LargeMonsteraDeliciosa,
        info: `Pink Elegance 부케는 선명한 색상과 달콤한 향기로 사랑받는 아름다운 핑크 장미가 특징입니다. 계절의 푸르름과 어우러진 이 부케는 우아함과 세련미를 발산합니다.`,
        category: 'live plants',
      },
      {
        id: 4,
        name: 'Large Majesty Palm',
        price: 70,
        imgPath: IMG_PATH.LivePlants.LargeMajestyPalm,
        info: `Rustic Charm 부케는 흙빛 장미와 야생화를 결합하여 자연스럽고 매력적인 아름다움을 연출합니다. 계절의 단풍으로 더욱 돋보이는 이 부케는 시골의 아름다움을 떠올리게 합니다.`,
        category: 'live plants',
      },
      {
        id: 5,
        name: 'Money Tree',
        price: 70,
        imgPath: IMG_PATH.LivePlants.MoneyTree,
        info: `Autumn Symphony 부케는 따뜻한 톤의 장미와 제철 단풍이 조화롭게 어우러져 가을의 정수를 담아낸 것이 특징입니다. 가을의 생생한 색감과 아늑한 느낌을 실내에서도 느낄 수 있는 부케입니다.`,
        category: 'live plants',
      },
      {
        id: 6,
        name: `Bird's Nest Fern`,
        price: 70,
        imgPath: IMG_PATH.LivePlants.BirdsNestFern,
        info: `Rosy Delight 부케는 아름다움과 은은한 향기로 유명한 데이비드 오스틴 장미를 엄선하여 선보입니다. 제철 잎사귀와 어우러져 이 아름다운 꽃의 숭고한 매력을 더욱 돋보이게 하는 부케입니다.`,
        category: 'live plants',
      },
    ],
  },
};
