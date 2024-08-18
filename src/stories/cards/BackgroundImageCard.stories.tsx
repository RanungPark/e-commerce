import BackgroundImageCard from '@components/cards/BackgroundImageCard';
import type { Meta, StoryObj } from '@storybook/react';
import { fetchImgURL } from '@utils/img';

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
    imgPath: fetchImgURL({
      category: 'fresh_flowers',
      name: 'fresh_flowers_bg',
    }),
  },
};
