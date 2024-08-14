import ProductCardInfo from '@components/texts/ProductCardInfo';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProductCardInfo> = {
  title: 'Texts/ProductCardInfo',
  component: ProductCardInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'ProductCardInfo 텍스트',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '₩ 140,000',
  },
};
