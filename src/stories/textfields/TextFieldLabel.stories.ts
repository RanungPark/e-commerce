import TextFieldLabel from '@components/textfields/TextFieldLabel';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TextFields/TextFieldLabel',
  component: TextFieldLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '라벨 텍스트',
      defaultValue: 'Label',
    },
  },
} satisfies Meta<typeof TextFieldLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: '',
    children: 'Label',
  },
};
