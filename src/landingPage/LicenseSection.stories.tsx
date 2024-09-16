import { Meta, StoryObj } from "@storybook/react";
import { LicenseSection } from "./LicenseSection";

const meta: Meta<typeof LicenseSection> = {
  title: "Sections/LicenseSection",
  component: LicenseSection,
};

export default meta;

type Story = StoryObj<typeof LicenseSection>;

export const Default: Story = {};
