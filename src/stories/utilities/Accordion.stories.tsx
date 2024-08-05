import Accordion from '@components/utilities/Accordion';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Utilities/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '728px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: {
      control: 'text',
      description: 'Accordion 제목',
      defaultValue: 'How often will I get a new bouquet?',
    },
    children: {
      control: 'text',
      description: 'Accordion 내용',
      defaultValue: `Our subscriptions allow you to select a delivery frequency that best
        suits your needs - either weekly, bi-weekly, or monthly. You can also
        choose the number of deliveries for your subscription. What's more, you
        can also pay for your subscription as you go or pay entirely upfront.
        Choose any combination that works for you!`,
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'How often will I get a new bouquet?',
    children: `Our subscriptions allow you to select a delivery frequency that best
    suits your needs - either weekly, bi-weekly, or monthly. You can also
    choose the number of deliveries for your subscription. What's more, you
    can also pay for your subscription as you go or pay entirely upfront.
    Choose any combination that works for you!`,
  },
};
