import type { Preview } from "@storybook/react";
import {themeDecorator} from "./decorators/themes-decorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [...themeDecorator]
};

export default preview;
