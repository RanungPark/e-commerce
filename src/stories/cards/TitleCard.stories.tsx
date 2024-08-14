import TitleCard from '@components/cards/TitleCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Cards/TitleCard',
  component: TitleCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '728px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'TitleCard 텍스트',
    },
  },
} satisfies Meta<typeof TitleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `Title Card`,
  },
};
