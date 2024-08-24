import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import CartItemCard from '@components/cards/CartItemCard';
import { fetchImgURL } from '@utils/img';

const meta = {
  title: 'Cards/CartItemCard',
  component: CartItemCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ul style={{ width: '600px' }}>
        <Story />
      </ul>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'CartItemCard 텍스트',
    },
    imgPath: {
      description: 'CartItemCard 이미지 경로',
    },
    alt: {
      control: 'text',
      description: 'CartItemCard 이미지 대체 속성',
    },
    quantity: {
      control: 'number',
      description: 'CartItemCard 상품 개수',
    },
    price: {
      control: 'number',
      description: 'CartItemCard 상품 가격',
    },
    hasTextButton: {
      control: 'boolean',
      description: 'TextButton 유무',
    },
    onClick: {
      description: 'TextButton 클릭 이벤트',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof CartItemCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `Cart Item Card`,
    imgPath: fetchImgURL({
      category: 'fresh_flowers',
      name: 'snowfall',
    }),
    alt: 'Snowfall',
    quantity: 2,
    price: 190000,
    hasTextButton: true,
  },
};

export const DefaultHasNotTextButton: Story = {
  args: {
    children: `Cart Item Card`,
    imgPath: fetchImgURL({
      category: 'fresh_flowers',
      name: 'snowfall',
    }),
    alt: 'Snowfall',
    quantity: 2,
    price: 190000,
    hasTextButton: false,
  },
};
