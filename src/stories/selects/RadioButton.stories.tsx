import RadioButton from '@components/selects/RadioButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Selects/RadioButton',
  component: RadioButton,
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
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Radio Button',
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
    children: 'Radio Button',
  },
};
