import type { Meta, StoryObj } from '@storybook/react';

import ProductInfoSkeleton from '@components/skeletons/ProductInfoSkeleton';

const meta: Meta<typeof ProductInfoSkeleton> = {
  title: 'Skeletons/ProductInfoSkeleton',
  component: ProductInfoSkeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
