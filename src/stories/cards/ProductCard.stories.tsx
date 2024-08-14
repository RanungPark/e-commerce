import ProductCard from '@components/cards/ProductCard';
import { IMG_PATH } from '@constants/imgPath';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Cards/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '728px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    imgPath: {
      control: 'text',
      description: 'ProductCard 이미지 경로',
    },
    alt: {
      control: 'text',
      description: 'ProductCard 이미지 대체 속성',
    },
    infoItems: {
      control: 'object',
      description: 'ProductCardInfoList 아이템들',
    },
    select: {
      control: 'boolean',
      description: 'ProductCard 선택 여부',
    },
    children: {
      control: 'text',
      description: 'ProductCardInfoList 타이틀',
    },
    onClick: {
      description: 'ProductCard 클릭 이벤트',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgPath: IMG_PATH.FreshFlowers.FreshFlowersRep,
    alt: '부케',
    children: 'Classic',
    infoItems: [
      'Price $45',
      'Free Delivery',
      'Best for a budget',
      'Glass vase with first delivery',
      'Save up to 25%',
      'Save up to 25%',
    ],
  },
};
