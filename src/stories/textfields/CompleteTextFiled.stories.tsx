import CompleteTextFiled from '@components/textfields/CompleteTextFiled';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'TextFields/CompleteTextFiled',
  component: CompleteTextFiled,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '364px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'CompleteTextFiled 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: 'CompleteTextFiled 활성화 여부',
    },
    onClick: {
      description: 'IconButton 클릭 이벤트',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof CompleteTextFiled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Dropdown closed',
    disabled: false,
  },
};

export const DefaultIsDisabled: Story = {
  args: {
    children: 'Dropdown closed',
    disabled: true,
  },
};
