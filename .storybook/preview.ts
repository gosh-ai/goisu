import type { Preview } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(Story, context) => withConsole()(Story)(context)],
};

export default preview;
