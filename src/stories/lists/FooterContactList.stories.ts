import FooterContactList from '@components/lists/FooterContactList';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FooterContactList> = {
  title: 'Lists/FooterContactList',
  component: FooterContactList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'FooterContactList 타이틀',
      defaultValue: 'contact us',
    },
    contactItems: {
      control: 'object',
      description: 'FooterContactList 아이템들',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'contact us',
    contactItems: [
      { title: 'address', children: '경기도 시흥시 진말로 36번지' },
      { title: 'Phone', children: '01087971558' },
      { title: 'General Enquiry:', children: 'ckehfqkr302@gamil.com' },
    ],
  },
};
