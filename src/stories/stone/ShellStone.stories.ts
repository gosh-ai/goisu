import type { Meta, StoryObj } from "@storybook/react";
import { ShellStone } from "./ShellStone";

const meta = {
  title: "Stone/ShellStone",
  component: ShellStone,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ShellStone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const White: Story = {
  args: {
    size: 200,
    radius: 50,
  },
};
