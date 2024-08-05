import SelectBox from '@components/selects/SelectBox';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Selects/SelectBox',
  component: SelectBox,
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
      description: 'SelectBoxOption 클릭 이벤트',
    },
    options: {
      control: 'text',
      description: 'SelectBoxOptionList 옵션 아이템들',
      defaultValue: [
        'Option A',
        'Option B',
        'Option C',
        'Option D',
        'Option E',
      ],
    },
    placeholder: {
      control: 'text',
      description: 'SelectBox placeholder',
      defaultValue: '- Select -',
    },
    value: {
      control: 'text',
      description: 'SelectBox 값(value)',
      defaultValue: '',
    },
    disabled: {
      control: 'boolean',
      description: 'SelectBox 활성화 여부',
      defaultValue: 'false',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof SelectBox>;

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
