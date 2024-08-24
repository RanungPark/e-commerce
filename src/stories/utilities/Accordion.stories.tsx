import type { Meta, StoryObj } from '@storybook/react';

import Accordion from '@components/utilities/Accordion';

const meta = {
  title: 'Utilities/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '728px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: {
      control: 'text',
      description: 'Accordion 제목',
    },
    children: {
      control: 'text',
      description: 'Accordion 내용',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Accordion title',
    children: `Accordion content`,
  },
};
