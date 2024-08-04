import TextButton from '@components/buttons/TextButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';

const meta = {
  title: 'Buttons/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
      description: 'TextButton 텍스트',
      defaultValue: 'Button',
    },
    hasLeftIcon: {
      control: 'boolean',
      description: '왼쪽 IconButton 유무',
      defaultValue: false,
    },
    hasRightIcon: {
      control: 'boolean',
      description: '오른쪽 IconButton 유무',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'TextButton 활성화 여부',
      defaultValue: false,
    },
    onClick: {
      description: 'TextButton 클릭 이벤트',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const DefaultWithHasRigthIcon: Story = {
  args: {
    children: 'Button',
    hasRightIcon: true,
  },
};

export const DefaultWithHasLeftIcon: Story = {
  args: {
    children: 'Button',
    hasLeftIcon: true,
  },
};

export const DefaultWithHasAllIcon: Story = {
  args: {
    children: 'Button',
    hasRightIcon: true,
    hasLeftIcon: true,
  },
};

export const DefaultWithCustomButton: Story = {
  args: {
    children: 'Button',
    hasRightIcon: true,
    CustomButton: Check,
  },
};
