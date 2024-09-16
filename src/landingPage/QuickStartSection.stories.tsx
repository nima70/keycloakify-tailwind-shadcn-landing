import { Meta, StoryObj } from "@storybook/react";
import { QuickStartSection } from "./QuickStartSection";

const meta: Meta<typeof QuickStartSection> = {
  title: "Sections/QuickStartSection",
  component: QuickStartSection,
};

export default meta;

type Story = StoryObj<typeof QuickStartSection>;

export const Default: Story = {};
