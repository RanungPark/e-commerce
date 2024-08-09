import DropDownOption from '@components/texts/DropDownOption';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof DropDownOption> = {
  title: 'Texts/DropDownOption',
  component: DropDownOption,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'DropDownOption 텍스트',
      defaultValue: 'Option A',
    },
    onClick: {
      description: 'DropDownOption 클릭 이벤트',
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
