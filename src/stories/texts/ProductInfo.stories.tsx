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
      defaultValue:
        'Snowfall 생화는 은은한 향기로 유명한 우아한 화이트 장미와 계절의 푸르름이 어우러져 순수한 아름다움을 더욱 돋보이게 합니다. 이 절묘한 생화는 어떤 상황에서도 세련미와 우아함을 더합니다.',
    },
    name: {
      control: 'text',
      description: 'ProductInfo 상품 이름',
      defaultValue: 'Snowfall',
    },
    price: {
      control: 'number',
      description: 'ProductInfo 상품 가격',
      defaultValue: 70,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      'Snowfall 생화는 은은한 향기로 유명한 우아한 화이트 장미와 계절의 푸르름이 어우러져 순수한 아름다움을 더욱 돋보이게 합니다. 이 절묘한 생화는 어떤 상황에서도 세련미와 우아함을 더합니다.',
    price: 70,
    name: 'Snowfall',
  },
};
