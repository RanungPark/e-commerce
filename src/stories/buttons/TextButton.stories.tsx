import TextButton from '@components/buttons/TextButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

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
      description: '버튼 텍스트',
      defaultValue: 'Button',
    },
    hasLeftIcon: {
      control: 'boolean',
      description: '왼쪽 아이콘 버튼의 유무',
      defaultValue: false,
    },
    hasRightIcon: {
      control: 'boolean',
      description: '오른쪽 아이콘 버튼의 유무',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: '버튼 활성화 여부',
      defaultValue: false,
    },
    onClick: {
      description: '텍스트 버튼 클릭 이벤트',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'button',
  },
};

export const DefaultWithHasRigthIcon: Story = {
  args: {
    children: 'button',
    hasRightIcon: true,
  },
};

export const DefaultWithHasLeftIcon: Story = {
  args: {
    children: 'button',
    hasLeftIcon: true,
  },
};

export const DefaultWithHasAllIcon: Story = {
  args: {
    children: 'button',
    hasRightIcon: true,
    hasLeftIcon: true,
  },
};
