import DefaultTextField from '@components/textfields/DefaultTextField';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TextFields/DefaultTextField',
  component: DefaultTextField,
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
    inputState: {
      control: {
        type: 'select',
        options: ['default', 'error', 'success'],
      },
      description: 'DefaultTextField 상태 테마',
      defaultValue: 'default',
    },
    hasLabel: {
      control: 'boolean',
      description: 'DefaultTextFielLabel 라벨 유무',
      defaultValue: false,
    },
    label: {
      control: 'text',
      description: 'DefaultTextFielLabel 라벨 텍스트',
      defaultValue: 'Label',
    },
    htmlFor: {
      control: 'text',
      description: 'DefaultTextFielLabel htmlFor(input의 id값) 텍스트',
      defaultValue: 'id',
    },
    hasHelpMessage: {
      control: 'boolean',
      description: 'DefaultTextField HelpMessage 유무',
      defaultValue: false,
    },
    helpMessage: {
      control: 'text',
      description: 'HelpMessage 텍스트',
      defaultValue: 'Text Helper',
    },
    children: {
      description: 'DefaultTextField input 태그'
    }
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputState: 'default',
    children: <input />,
  },
};

export const DefaultWithLabel: Story = {
  args: {
    inputState: 'default',
    children: <input />,
    hasLabel: true,
    label: 'Label',
    htmlFor: 'id',
  },
};

export const DefaultWithLabelAndHasHelpMessage: Story = {
  args: {
    inputState: 'default',
    children: <input />,
    hasLabel: true,
    label: 'Label',
    htmlFor: 'id',
    hasHelpMessage: true,
    helpMessage: 'Text helper',
  },
};

export const DefaultIsDisabled: Story = {
  args: {
    inputState: 'default',
    children: <input disabled />,
    hasLabel: true,
    label: 'Label',
    htmlFor: 'id',
    hasHelpMessage: true,
    helpMessage: 'Text helper',
  },
};

export const Success: Story = {
  args: {
    inputState: 'success',
    children: <input />,
  },
};

export const SuccessWithHasHelpMessage: Story = {
  args: {
    inputState: 'success',
    children: <input />,
    hasHelpMessage: true,
    helpMessage: 'Text helper',
  },
};

export const SuccessWithLabelAndHasHelpMessage: Story = {
  args: {
    inputState: 'success',
    children: <input />,
    hasLabel: true,
    label: 'Label',
    htmlFor: 'id',
    hasHelpMessage: true,
    helpMessage: 'Text helper',
  },
};

export const Error: Story = {
  args: {
    inputState: 'error',
    children: <input />,
  },
};

export const ErrorWithHasHelpMessage: Story = {
  args: {
    inputState: 'error',
    children: <input />,
    hasHelpMessage: true,
    helpMessage: 'Text helper',
  },
};

export const ErrorWithLabelAndHasHelpMessage: Story = {
  args: {
    inputState: 'error',
    children: <input />,
    hasLabel: true,
    label: 'Label',
    htmlFor: 'id',
    hasHelpMessage: true,
    helpMessage: 'Text helper',
  },
};
