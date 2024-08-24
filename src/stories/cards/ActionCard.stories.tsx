import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ActionCard from '@components/cards/ActionCard';

const meta = {
  title: 'Cards/ActionCard',
  component: ActionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '364px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'ActionCard 타이틀',
    },
    buttonText: {
      control: 'text',
      description: 'TextButton 텍스트',
    },
    onClick: {
      description: 'TextButton 클릭 이벤트',
    },
    hasLeftIcon: {
      control: 'boolean',
      description: '왼쪽 IconButton 유무',
    },
    hasRightIcon: {
      control: 'boolean',
      description: '오른쪽 IconButton 유무',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ActionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Action Card',
    buttonText: 'Button',
  },
};
