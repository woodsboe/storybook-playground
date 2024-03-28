import type { Preview } from "@storybook/react";
import {FontDecorator} from "./decorators/nextjs-font-decorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

  },
  decorators: [FontDecorator],
};

export default preview;
