import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'ghost', 'link'],
      description: 'Estilo visual do botão',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Tamanho do botão',
    },
    disabled: {
      control: 'boolean',
      description: 'Define se o botão está desabilitado',
    },
    loading: {
      control: 'boolean',
      description: 'Define se o botão está em estado de carregamento',
    },
    onClick: {
      action: 'clicked',
      description: 'Função chamada ao clicar no botão',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Botão Primário',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Botão Secundário',
    variant: 'secondary',
    size: 'md',
  },
};

export const Accent: Story = {
  args: {
    children: 'Botão Accent',
    variant: 'accent',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    children: 'Botão Pequeno',
    variant: 'primary',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Botão Grande',
    variant: 'primary',
    size: 'lg',
  },
};

export const Loading: Story = {
  args: {
    children: 'Carregando...',
    variant: 'primary',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Desabilitado',
    variant: 'primary',
    disabled: true,
  },
};

export const Ghost: Story = {
  args: {
    children: 'Botão Ghost',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Botão Link',
    variant: 'link',
  },
};