import ProductInfo from '@components/texts/ProductInfo';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProductInfo> = {
  title: 'Texts/ProductInfo',
  component: ProductInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'ProductInfo 상품 정보',
    },
    name: {
      control: 'text',
      description: 'ProductInfo 상품 이름',
    },
    price: {
      control: 'number',
      description: 'ProductInfo 상품 가격',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      'Product infos',
    price: 70000,
    name: 'Product Name',
  },
};
