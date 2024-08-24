import type { Meta, StoryObj } from '@storybook/react';

import TitleCardSkeleton from '@components/skeletons/TitleCardSkeleton';

const meta: Meta<typeof TitleCardSkeleton> = {
  title: 'Skeletons/TitleCardSkeleton',
  component: TitleCardSkeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '784px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
