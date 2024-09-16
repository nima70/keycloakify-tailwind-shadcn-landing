import type { Preview } from "@storybook/react";
import React from "react";
import "../src/index.css";
// import { withRouter } from "storybook-addon-remix-react-router";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
const preview: Preview = {
  // decorators: [withRouter],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: "ipad",
      },
    },
  },
};

export default preview;
