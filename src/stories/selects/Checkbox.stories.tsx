import Checkbox from '@components/selects/Checkbox';
import type { Meta, StoryObj } from '@storybook/react';

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
      description: '체크박스 텍스트',
      defaultValue: 'Button',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Checkbox',
  },
};

export const DefaultWithForm: Story = {
  decorators: [
    Story => (
      <form style={{ display: 'flex', gap: '20px' }}>
        <Story />
        <Story />
        <Story />
      </form>
    ),
  ],
  args: {
    children: 'Checkbox',
  },
};
