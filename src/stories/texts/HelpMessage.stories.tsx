import HelpMessage from '@components/texts/HelpMessage';
import type { Meta, StoryObj } from '@storybook/react';

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
      defaultValue: 'Text Helper',
    },
    helpMessageTheme: {
      control: {
        type: 'select',
        options: ['default', 'error', 'success'],
      },
      description: 'HelpMessage 테마',
      defaultValue: 'default',
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

export const Error: Story = {
  args: {
    children: 'Text Helper',
    helpMessageTheme: 'error',
  },
};
