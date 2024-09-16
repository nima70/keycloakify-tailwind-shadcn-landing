// src/App.stories.tsx
import React from "react";
import { StoryObj } from "@storybook/react";
import App from "./App";

export default {
  title: "App",
  component: App,
  parameters: {
    layout: "fullscreen", // To display the app in full screen mode
  },
};

type Story = StoryObj<typeof App>;

export const Default: Story = {
  render: () => <App />,
};
