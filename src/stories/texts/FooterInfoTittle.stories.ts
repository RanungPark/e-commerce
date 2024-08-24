import type { Meta, StoryObj } from '@storybook/react';

import FooterInfoTittle from '@components/texts/FooterInfoTittle';

const meta: Meta<typeof FooterInfoTittle> = {
  title: 'Texts/FooterInfoTittle',
  component: FooterInfoTittle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'FooterInfoTittle 텍스트',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'contact us',
  },
};
