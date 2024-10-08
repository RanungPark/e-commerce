import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BrowserRouter } from 'react-router-dom';

import MenuButton from '@components/buttons/MenuButton';

const meta = {
  title: 'Buttons/MenuButton',
  component: MenuButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ width: '300px' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'MenuButton 텍스트',
    },
    to: {
      control: 'text',
      description: 'MenuButton 이동 URL',
    },
    onClick: {
      description: 'MenuButton 클릭 이벤트',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Link',
    to: '/',
  },
};
