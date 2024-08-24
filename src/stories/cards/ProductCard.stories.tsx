import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ProductCard from '@components/cards/ProductCard';
import { fetchImgURL } from '@utils/img';

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
    imgPath: fetchImgURL({
      category: 'fresh_flowers',
      name: 'fresh_flowers_rep',
    }),
    alt: '부케',
    children: 'Classic',
    infoItems: [
      'Price ₩ 150000',
      'Free Delivery',
      'Best for a budget',
      'Glass vase with first delivery',
      'Save up to 25%',
      'Save up to 25%',
    ],
  },
};
