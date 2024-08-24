import type { Meta, StoryObj } from '@storybook/react';

import PrimaryCardSkeleton from '@components/skeletons/PrimaryCardSkeleton';

const meta: Meta<typeof PrimaryCardSkeleton> = {
  title: 'Skeletons/PrimaryCardSkeleton',
  component: PrimaryCardSkeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
