import TextFieldLabel from '@components/texts/TextFieldLabel';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Texts/TextFieldLabel',
  component: TextFieldLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ position: 'relative', width: '100px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'TextFieldLabel 텍스트',
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
