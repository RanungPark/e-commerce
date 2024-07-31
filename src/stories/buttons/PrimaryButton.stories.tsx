import PrimaryButton from '@components/buttons/PrimaryButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '175px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: '버튼 텍스트',
      defaultValue: 'Button',
    },
    primaryButtontheme: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
      description: '버튼 테마',
      defaultValue: 'Button',
    },
    hasLeftIcon: {
      control: 'boolean',
      description: '왼쪽 아이콘 버튼의 유무',
      defaultValue: false,
    },
    hasRightIcon: {
      control: 'boolean',
      description: '오른쪽 아이콘 버튼의 유무',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: '버튼 활성화 여부',
      defaultValue: false,
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primaryButtontheme: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    primaryButtontheme: 'secondary',
    children: 'Button',
  },
};

export const Tertiary: Story = {
  args: {
    primaryButtontheme: 'tertiary',
    children: 'Button',
  },
};
