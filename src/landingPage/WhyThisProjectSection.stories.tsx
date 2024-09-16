import { Meta, StoryObj } from "@storybook/react";
import { WhyThisProjectSection } from "./WhyThisProjectSection";

const meta: Meta<typeof WhyThisProjectSection> = {
  title: "Sections/WhyThisProjectSection",
  component: WhyThisProjectSection,
};

export default meta;

type Story = StoryObj<typeof WhyThisProjectSection>;

export const Default: Story = {};
