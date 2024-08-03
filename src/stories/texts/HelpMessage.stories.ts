import HelpMessage from '@components/texts/HelpMessage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HelpMessage> = {
  title: 'Texts/HelpMessage',
  component: HelpMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '헬프 메시지 텍스트',
      defaultValue: 'Text Helper',
    },
    helpMessageTheme: {
      control: {
        type: 'select',
        options: ['default', 'error', 'success'],
      },
      description: '헬프 메시지 테마',
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
