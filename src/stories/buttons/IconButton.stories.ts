import IconButton from '@components/buttons/IconButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ReactComponent as ArrowLeft } from '@assets/icons/wght300/ArrowLeft.svg';

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    IconComponent: {
      control: 'object',
      description: 'SVG 컴포넌트',
      defaultValue: ArrowLeft,
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'Icon 크기',
      defaultValue: 'small',
    },
    onClick: {
      description: 'IconButton 클릭 이벤트',
    },
    ariaLabel: {
      control: 'text',
      description: 'IconButton 접근자 이름',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallSize: Story = {
  args: {
    size: 'small',
    IconComponent: ArrowLeft,
    ariaLabel: 'left arrow',
  },
};

export const MediumSize: Story = {
  args: {
    size: 'medium',
    IconComponent: ArrowLeft,
    ariaLabel: 'left arrow',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'large',
    IconComponent: ArrowLeft,
    ariaLabel: 'left arrow',
  },
};
