import SelectBoxOption from '@components/texts/SelectBoxOption';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof SelectBoxOption> = {
  title: 'Texts/SelectBoxOption',
  component: SelectBoxOption,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'SelectBoxOption 텍스트',
      defaultValue: 'Option A',
    },
    onClick: {
      description: 'SelectBoxOption 클릭 이벤트',
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Option A',
  },
};
