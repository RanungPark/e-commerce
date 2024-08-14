import BackgroundImageCard from '@components/cards/BackgroundImageCard';
import { IMG_PATH } from '@constants/imgPath';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Cards/BackgroundImageCard',
  component: BackgroundImageCard,
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
    children: {
      control: 'text',
      description: 'BackgroundImageCard 텍스트',
    },
    imgPath: {
      description: 'BackgroundImageCard 배경 이미지',
    },
  },
} satisfies Meta<typeof BackgroundImageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `Background Img Card`,
    imgPath: IMG_PATH.FreshFlowers.FreshFlowersBg,
  },
};
