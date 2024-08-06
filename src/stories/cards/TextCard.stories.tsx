import TextCard from '@components/cards/TextCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Cards/TextCard',
  component: TextCard,
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
      description: 'TextCard 제목',
      defaultValue: 'Stylish bouquets by florists',
    },
    children: {
      control: 'text',
      description: 'TextCard 내용',
      defaultValue: `The task of the organization, especially the strengthening and
        development of the structure allows us to assess the importance of the
        directions of progressive development.`,
    },
    label: {
      control: 'text',
      description: 'TextCard 라벨',
      defaultValue: '',
    },
  },
} satisfies Meta<typeof TextCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Stylish bouquets by florists',
    children: `The task of the organization, especially the strengthening and
        development of the structure allows us to assess the importance of the
        directions of progressive development.`,
  },
};

export const DefaultAndLabel: Story = {
  args: {
    title: 'Stylish bouquets by florists',
    children: `The task of the organization, especially the strengthening and
        development of the structure allows us to assess the importance of the
        directions of progressive development.`,
    label: 'our story',
  },
};
