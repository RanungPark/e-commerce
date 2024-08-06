import RadioButtonGroup from '@components/groups/RadioButtonGroup';
import RadioButton from '@components/selects/RadioButton';
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
      description: 'RadioButton 컴포넌트',
      defaultValue: (
        <>
          <RadioButton>Radio Button1</RadioButton>
          <RadioButton>Radio Button2</RadioButton>
          <RadioButton>Radio Button3</RadioButton>
        </>
      ),
    },
    label: {
      control: 'text',
      description: 'RadioButtonGroup 라벨',
      defaultValue: 'Radio Button Group',
    },
    value: {
      control: 'text',
      description: 'RadioButtonGroup 값(value)',
      defaultValue: '',
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
