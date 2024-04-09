import type { Meta, StoryObj } from "@storybook/react";
import { SlateStone } from "./SlateStone";

const meta = {
  title: "Stone/SlateStone",
  component: SlateStone,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SlateStone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Black: Story = {
  args: {
    size: 200,
    radius: 50,
  },
};
