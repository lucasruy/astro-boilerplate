import type { Meta, StoryObj } from "@storybook/react";
import { dynamicIconImports, type IconName } from "lucide-react/dynamic";
import { Button } from "./button";

const iconNames: IconName[] = Object.keys(dynamicIconImports) as IconName[];

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "accent", "ghost", "link", "success"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    onClick: { action: "clicked" },
    iconName: {
      control: { type: "select" },
      options: iconNames,
    },
    iconPosition: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
    children: "Primary Button",
    fullWidth: false,
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    size: "md",
    children: "Primary Button",
    fullWidth: false,
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "md",
    children: "Primary Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "md",
    children: "Primary Button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    size: "md",
    children: "Primary Button",
  },
};


export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Disabled",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Disabled",
    disabled: true,
    loading: true,
  },
};

export const LoadingMessage: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Disabled",
    disabled: true,
    loading: true,
    loadingMessage: "Por favor, aguarde...",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Ajuda",
    iconName: "badge-help",
    iconPosition: "left",
  },
};

export const WithIconPosition: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Copiar",
    disabled: false,
    loading: false,
    loadingMessage: "",
    iconPosition: "right",
    iconName: "copy",
  },
};
