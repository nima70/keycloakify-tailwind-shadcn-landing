import { Meta, StoryObj } from "@storybook/react";
import { FeaturesSection } from "./FeaturesSection";

const meta: Meta<typeof FeaturesSection> = {
  title: "Sections/FeaturesSection",
  component: FeaturesSection,
};

export default meta;

type Story = StoryObj<typeof FeaturesSection>;

export const Default: Story = {};
