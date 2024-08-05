import SelectBoxOptionList from '@components/lists/SelectBoxOptionList';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof SelectBoxOptionList> = {
  title: 'Lists/SelectBoxOptionList',
  component: SelectBoxOptionList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      description: 'SelectBoxOption 클릭 이벤트',
    },
    options: {
      control: 'text',
      description: 'SelectBoxOptionList 옵션 아이템들',
      defaultValue: [
        'Option A',
        'Option B',
        'Option C',
        'Option D',
        'Option E',
      ],
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
