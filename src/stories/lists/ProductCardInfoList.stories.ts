import ProductCardInfoList from '@components/lists/ProductCardInfoList';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProductCardInfoList> = {
  title: 'Lists/ProductCardInfoList',
  component: ProductCardInfoList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'ProductCardInfoList 타이틀',
    },
    infoItems: {
      control: 'object',
      description: 'ProductCardInfoList 정보 아이템들',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
