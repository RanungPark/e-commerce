import PrimaryButton from '@components/buttons/PrimaryButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';

const meta = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '175px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: '버튼 텍스트',
      defaultValue: 'Button',
    },
    primaryButtontheme: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
      description: '버튼 테마',
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
      description: '프라이머리 버튼 클릭 이벤트',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primaryButtontheme: 'primary',
    children: 'button',
  },
};

export const Secondary: Story = {
  args: {
    primaryButtontheme: 'secondary',
    children: 'button',
  },
};

export const Tertiary: Story = {
  args: {
    primaryButtontheme: 'tertiary',
    children: 'button',
  },
};

export const PrimaryWithHasRightIcon: Story = {
  args: {
    primaryButtontheme: 'primary',
    children: 'button',
    hasRightIcon: true,
  },
};

export const PrimaryWithHasLeftIcon: Story = {
  args: {
    primaryButtontheme: 'primary',
    children: 'button',
    hasLeftIcon: true,
  },
};

export const PrimaryWithHasAllIcon: Story = {
  args: {
    primaryButtontheme: 'primary',
    children: 'button',
    hasRightIcon: true,
    hasLeftIcon: true,
  },
};

export const PrimaryWithCustomButton: Story = {
  args: {
    primaryButtontheme: 'primary',
    children: 'button',
    hasLeftIcon: true,
    CustomButton: Check,
  },
};
