import { Meta, StoryObj } from "@storybook/react";
import { ContributionSection } from "./ContributionSection";

const meta: Meta<typeof ContributionSection> = {
  title: "Sections/ContributionSection",
  component: ContributionSection,
};

export default meta;

type Story = StoryObj<typeof ContributionSection>;

export const Default: Story = {};
