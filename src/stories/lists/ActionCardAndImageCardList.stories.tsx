import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ActionCardAndImageCardList from '@components/lists/ActionCardAndImageCardList';
import { fetchImgURL } from '@utils/img';

const meta: Meta<typeof ActionCardAndImageCardList> = {
  title: 'Lists/ActionCardAndImageCardList',
  component: ActionCardAndImageCardList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '780px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'ActionCard 타이틀',
    },
    index: {
      control: 'number',
      description: 'ActionCardAndImageCardList 순서',
    },
    buttonText: {
      control: 'text',
      description: 'TextButton 텍스트',
    },
    imgPath: {
      control: 'text',
      description: 'PrimaryImageCard 이미지 경로 ',
    },
    alt: {
      control: 'text',
      description: 'PrimaryImageCard 대체 속성',
    },
    onClick: {
      description: 'AciotnCard와 ImageCard 클릭 이벤트',
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const EvenIndex: Story = {
  args: {
    children: 'Action Card',
    index: 0,
    buttonText: 'Shop now',
    imgPath: fetchImgURL({
      category: 'fresh_flowers',
      name: 'fresh_flowers_rep',
    }),
    alt: 'FreshFlowers 대표 이미지',
  },
};

export const OddIndex: Story = {
  args: {
    children: 'Action Card',
    index: 1,
    buttonText: 'Shop now',
    imgPath: fetchImgURL({
      category: 'fresh_flowers',
      name: 'fresh_flowers_rep',
    }),
    alt: 'FreshFlowers 대표 이미지',
  },
};
