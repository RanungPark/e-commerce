import type { Meta, StoryObj } from '@storybook/react';

import CartItemCardList from '@components/lists/CartItemCardList';

const meta: Meta<typeof CartItemCardList> = {
  title: 'Lists/CartItemCardList',
  component: CartItemCardList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    hasTextButton: {
      control: 'boolean',
      description: 'CartItemCard 텍스트 버튼 유무',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hasTextButton: true,
  },
};
