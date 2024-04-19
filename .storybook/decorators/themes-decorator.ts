import {withThemeByClassName} from "@storybook/addon-themes";

export const themeDecorator = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];
