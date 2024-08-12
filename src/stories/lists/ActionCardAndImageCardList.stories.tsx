import ActionCardAndImageCardList from '@components/lists/ActionCardAndImageCardList';
import { IMG_PATH } from '@constants/imgPath';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

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
      defaultValue: 'FreshFlowers',
    },
    index: {
      control: 'number',
      description: 'ActionCardAndImageCardList 순서',
      defaultValue: 0,
    },
    buttonText: {
      control: 'text',
      description: 'TextButton 텍스트',
      defaultValue: 'Shop noow',
    },
    imgPath: {
      control: 'text',
      description: 'PrimaryImageCard 이미지 경로 ',
      defaultValue: IMG_PATH.FreshFlowers.FreshFlowersRep,
    },
    alt: {
      control: 'text',
      description: 'PrimaryImageCard 대체 속성',
      defaultValue: 'FreshFlowers 대표 이미지',
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
    children: 'FreshFlowers',
    index: 0,
    buttonText: 'Shop now',
    imgPath: IMG_PATH.FreshFlowers.FreshFlowersRep,
    alt: 'FreshFlowers 대표 이미지',
  },
};

export const OddIndex: Story = {
  args: {
    children: 'FreshFlowers',
    index: 1,
    buttonText: 'Shop now',
    imgPath: IMG_PATH.FreshFlowers.FreshFlowersRep,
    alt: 'FreshFlowers 대표 이미지',
  },
};
