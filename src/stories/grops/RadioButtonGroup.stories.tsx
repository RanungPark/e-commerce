import RadioButtonGroup from '@components/groups/RadioButtonGroup';
import RadioButton from '@components/utilities/RadioButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Groups/RadioButtonGroup',
  component: RadioButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'object',
      description: 'RadioButton 컴포넌트',
    },
    label: {
      control: 'text',
      description: 'RadioButtonGroup 라벨',
    },
    value: {
      control: 'text',
      description: 'RadioButtonGroup 값(value)',
    },
    onChange: {
      description: 'RadioButtonGroup 체인지 이벤트',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof RadioButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Radio Button Group',
    children: (
      <>
        <RadioButton>Radio Button1</RadioButton>
        <RadioButton>Radio Button2</RadioButton>
        <RadioButton>Radio Button3</RadioButton>
      </>
    ),
    value: '',
  },
};
