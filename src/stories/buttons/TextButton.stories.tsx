import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';
import TextButton from '@components/buttons/TextButton';

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
    },
    hasLeftIcon: {
      control: 'boolean',
      description: '왼쪽 IconButton 유무',
    },
    hasRightIcon: {
      control: 'boolean',
      description: '오른쪽 IconButton 유무',
    },
    disabled: {
      control: 'boolean',
      description: 'TextButton 활성화 여부',
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
    ariaLabel: 'check',
  },
};
