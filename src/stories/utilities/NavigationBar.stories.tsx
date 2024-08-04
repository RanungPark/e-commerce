import NavigationBar from '@components/utilities/NavigationBar';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Utilities/NavigationBar',
  component: NavigationBar,
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
    onMenuClick: {
      description: '메뉴 NavigationButton 클릭 이벤트',
    },
    onCartClick: {
      description: '장바구니 NavigationButton 클릭 이벤트',
    },
  },
  args: { onMenuClick: fn(), onCartClick: fn() },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
