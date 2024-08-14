import SecondaryImageCard from '@components/cards/SecondaryImageCard';
import { IMG_PATH } from '@constants/imgPath';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Cards/SecondaryImageCard',
  component: SecondaryImageCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imgPath: {
      control: 'text',
      description: 'SecondaryImageCard 이미지 경로',
    },
    alt: {
      control: 'text',
      description: 'SecondaryImageCard 이미지 대체 속성',
    },
    price: {
      control: 'number',
      description: 'SecondaryImageCard 가격',
    },
    children: {
      control: 'text',
      description: 'SecondaryImageCard 타이틀',
    },
    onClick: {
      description: 'SecondaryImageCard 클릭 이벤트',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof SecondaryImageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgPath: IMG_PATH.DesignerVases.BernadotteVase,
    alt: 'BernadotteVase',
    price: 0,
    children: 'Secondary Img Card',
  },
};
