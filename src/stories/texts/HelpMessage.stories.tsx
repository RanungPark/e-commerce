import type { Meta, StoryObj } from '@storybook/react';

import HelpMessage from '@components/texts/HelpMessage';

const meta: Meta<typeof HelpMessage> = {
  title: 'Texts/HelpMessage',
  component: HelpMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ position: 'relative', width: '100px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'HelpMessage 텍스트',
    },
    helpMessageTheme: {
      control: {
        type: 'select',
        options: ['default', 'error', 'success'],
      },
      description: 'HelpMessage 테마',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Text Helper',
    helpMessageTheme: 'default',
  },
};

export const Success: Story = {
  args: {
    children: 'Text Helper',
    helpMessageTheme: 'success',
  },
};

export const Fail: Story = {
  args: {
    children: 'Text Helper',
    helpMessageTheme: 'error',
  },
};
