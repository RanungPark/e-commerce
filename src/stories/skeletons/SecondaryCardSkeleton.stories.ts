import SecondaryCardSkeleton from '@components/skeletons/SecondaryCardSkeleton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SecondaryCardSkeleton> = {
  title: 'Skeletons/SecondaryCardSkeleton',
  component: SecondaryCardSkeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
