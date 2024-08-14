import CheckboxGroup from '@components/groups/CheckboxGroup';
import Checkbox from '@components/utilities/Checkbox';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Groups/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'object',
      description: 'Checkbox 컴포넌트',
    },
    label: {
      control: 'text',
      description: 'CheckboxGroup 라벨',
    },
    values: {
      control: 'object',
      description: 'CheckboxGroup 값(value)들',
    },
    onChange: {
      description: 'CheckboxGroup 체인지 이벤트',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Checkbox Group',
    children: (
      <>
        <Checkbox>Checkbox1</Checkbox>
        <Checkbox>Checkbox2</Checkbox>
        <Checkbox>Checkbox3</Checkbox>
      </>
    ),
    values: [],
  },
};
