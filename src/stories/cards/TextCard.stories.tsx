import type { Meta, StoryObj } from '@storybook/react';

import TextCard from '@components/cards/TextCard';

const meta = {
  title: 'Cards/TextCard',
  component: TextCard,
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
      description: 'TextCard 제목',
    },
    children: {
      control: 'text',
      description: 'TextCard 내용',
    },
    label: {
      control: 'text',
      description: 'TextCard 라벨',
    },
  },
} satisfies Meta<typeof TextCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Text Card',
    children: `타이틀과 자식를 필수로 지닌 텍스트로만 이루어진 카드`,
  },
};

export const DefaultAndLabel: Story = {
  args: {
    title: 'Text Card',
    children: `타이틀과 자식를 필수로 지닌 텍스트로만 이루어진 카드`,
    label: 'label',
  },
};
