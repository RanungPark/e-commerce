import CartItemCard from '@components/cards/CartItemCard';
import { IMG_PATH } from '@constants/imgPath';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Cards/CartItemCard',
  component: CartItemCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'CartItemCard 텍스트',
      defaultValue: `Snowfall`,
    },
    imgPath: {
      description: 'CartItemCard 이미지 경로',
      defaultValue: IMG_PATH.FreshFlowers.Snowfall,
    },
    alt: {
      control: 'text',
      description: 'CartItemCard 이미지 대체 속성',
      defaultValue: '부케',
    },
    quantity: {
      control: 'number',
      description: 'CartItemCard 상품 개수',
      defaultValue: `2`,
    },
    price: {
      control: 'number',
      description: 'CartItemCard 상품 가격',
      defaultValue: `140`,
    },
    hasTextButton: {
      control: 'boolean',
      description: 'TextButton 유무',
      defaultValue: true,
    },
    onClick: {
      description: 'TextButton 클릭 이벤트'
    }
  },
  args: { onClick: fn() },
} satisfies Meta<typeof CartItemCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `Snowfall`,
    imgPath: IMG_PATH.FreshFlowers.Snowfall,
    alt: 'Snowfall',
    quantity: 2,
    price: 14,
    hasTextButton: true,
  },
};

export const DefaultHasNotTextButton: Story = {
  args: {
    children: `Snowfall`,
    imgPath: IMG_PATH.FreshFlowers.Snowfall,
    alt: 'Snowfall',
    quantity: 2,
    price: 14,
    hasTextButton: false,
  },
};

