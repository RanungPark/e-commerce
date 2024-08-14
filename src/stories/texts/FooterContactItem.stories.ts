import FooterContactItem from '@components/texts/FooterContactItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FooterContactItem> = {
  title: 'Texts/FooterContactItem',
  component: FooterContactItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'FooterContactItem 정보',
    },
    title: {
      control: 'text',
      description: 'FooterContactItem 테이틀',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'ckehfqkr302@gamil.com',
    title: 'General Enquiry',
  },
};
