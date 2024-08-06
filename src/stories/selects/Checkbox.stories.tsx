import Checkbox from '@components/selects/Checkbox';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Selects/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
      description: 'Checkbox 텍스트',
      defaultValue: 'Button',
    },
    name: {
      control: 'text',
      description: 'Checkbox 키(name)',
      defaultValue: 'test',
    },
    value: {
      control: 'text',
      description: 'Checkbox 값(value)',
      defaultValue: 'new test',
    },
    isGrop: {
      control: 'boolean',
      description: 'Checkbox 그룹 여부',
      defaultValue: false,
    },
    onChange: {
      description: 'Checkbox 체인지 이벤트',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Checkbox',
    isGrop: false,
  },
};
