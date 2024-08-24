import type { Meta, StoryObj } from '@storybook/react';

import SNSIconButtonList from '@components/lists/SNSIconButtonList';

const meta: Meta<typeof SNSIconButtonList> = {
  title: 'Lists/SNSIconButtonList',
  component: SNSIconButtonList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
