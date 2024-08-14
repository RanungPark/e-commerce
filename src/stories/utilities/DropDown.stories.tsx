import DropDown from '@components/utilities/DropDown';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Utilities/DropDown',
  component: DropDown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '364px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    onChange: {
      description: 'DropDownOption 클릭 이벤트',
    },
    options: {
      control: 'object',
      description: 'DropDownOptionList 옵션 아이템들',
    },
    placeholder: {
      control: 'text',
      description: 'DropDown placeholder',
    },
    value: {
      control: 'text',
      description: 'DropDown 값(value)',
    },
    disabled: {
      control: 'boolean',
      description: 'DropDown 활성화 여부',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
    placeholder: '- Select -',
    value: '',
  },
};

export const DefaultIsDisabled: Story = {
  args: {
    options: ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
    placeholder: '- Select -',
    value: '',
    disabled: true,
  },
};
