import TitleCard from '@components/cards/TitleCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Cards/TitleCard',
  component: TitleCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'TitleCard 텍스트',
      defaultValue: `shop`,
    },
  },
} satisfies Meta<typeof TitleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `shop`,
  },
};
