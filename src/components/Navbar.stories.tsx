import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "../components/Navbar"; // Adjust the path to the Navbar component if necessary
import { withRouter } from "storybook-addon-remix-react-router";
const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: () => <Navbar />,
  decorators: [withRouter],
};
