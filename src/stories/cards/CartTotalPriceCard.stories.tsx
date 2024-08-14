import CartTotalPriceCard from '@components/cards/CartTotalPriceCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Cards/CartTotalPriceCard',
  component: CartTotalPriceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'CartTotalPriceCard 텍스트',
    },
  },
} satisfies Meta<typeof CartTotalPriceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `total`,
  },
};
