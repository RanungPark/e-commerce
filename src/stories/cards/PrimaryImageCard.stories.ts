import PrimaryImageCard from '@components/cards/PrimaryImageCard';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { fetchImgURL } from '@utils/img';

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
    },
    alt: {
      control: 'text',
      description: 'PrimaryImageCard 이미지 대체 속성',
    },
    price: {
      control: 'number',
      description: 'PrimaryImageCard 가격',
    },
    children: {
      control: 'text',
      description: 'PrimaryImageCard 타이틀',
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
    imgPath: fetchImgURL({
      category: 'fresh_flowers',
      name: 'blazing_blassoms',
    }),
    alt: 'Bouquets Fresh Flowers',
    price: 95000,
    children: 'Primary Img Card',
  },
};
