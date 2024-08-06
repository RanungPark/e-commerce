import RadioButton from '@components/selects/RadioButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Selects/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'RadioButton 텍스트',
      defaultValue: 'Button',
    },
    name: {
      control: 'text',
      description: 'RadioButton 키(name)',
      defaultValue: 'test',
    },
    value: {
      control: 'text',
      description: 'RadioButton 값(value)',
      defaultValue: 'new test',
    },
    isGrop: {
      control: 'boolean',
      description: 'RadioButton 그룹 여부',
      defaultValue: false,
    },
    defaultChecked: {
      control: 'boolean',
      description: 'RadioButton 선택 유무',
      defaultValue: false,
    },
    onChange: {
      description: 'RadioButton 체인지 이벤트',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Radio Button',
    isGrop: false,
  },
};
