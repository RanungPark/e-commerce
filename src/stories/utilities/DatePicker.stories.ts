import DatePicker from '@components/utilities/DatePicker';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Utilities/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    placeholder: {
      control: 'text',
      description: 'DatePicker placeholder',
      defaultValue: 'Select a date',
    },
    value: {
      control: 'date',
      description: 'DatePicker 값(value)',
      defaultValue: new Date(),
    },
    onChange: {
      description: 'DatePicker 체인지 이벤트',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select a date',
    value: new Date(),
  },
};
