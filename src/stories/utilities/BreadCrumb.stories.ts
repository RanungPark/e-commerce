import BreadCrumb from '@components/utilities/BreadCrumb';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Utilities/BreadCrumb',
  component: BreadCrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
      description: 'BreadCrumb 텍스트',
      defaultValue: 'infomation',
    },
    onClick: {
      description: 'IconButton 클릭 이벤트',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof BreadCrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'infomation',
  },
};
