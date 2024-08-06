import PrimaryImageCard from '@components/cards/PrimaryImageCard';
import { IMG_PATH } from '@constants/imgPath';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Cards/PrimaryImageCard',
  component: PrimaryImageCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imgPath: {
      control: 'text',
      description: 'PrimaryImageCard 이미지 경로',
      defaultValue: IMG_PATH.FreshFlowers.BlazingBlassoms,
    },
    alt: {
      control: 'text',
      description: 'PrimaryImageCard 이미지 대체 속성',
      defaultValue: 'Bouquets Fresh Flowers',
    },
    price: {
      control: 'text',
      description: 'PrimaryImageCard 가격',
      defaultValue: 70,
    },
    children: {
      control: 'text',
      description: 'PrimaryImageCard 타이틀',
      defaultValue: 'Bouquets Fresh Flowers',
    },
    onClick: {
      description: 'PrimaryImageCard 클릭 이벤트',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PrimaryImageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgPath: IMG_PATH.FreshFlowers.BlazingBlassoms,
    alt: 'Bouquets Fresh Flowers',
    price: 70,
    children: 'Bouquets Fresh Flowers',
  },
};
