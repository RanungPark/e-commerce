import DropDownOptionList from '@components/lists/DropDownOptionList';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof DropDownOptionList> = {
  title: 'Lists/DropDownOptionList',
  component: DropDownOptionList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      description: 'DropDownOption 클릭 이벤트',
    },
    options: {
      control: 'object',
      description: 'DropDownOptionList 옵션 아이템들',
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
  },
};
