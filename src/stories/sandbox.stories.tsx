import { x, ThemeProvider, defaultTheme } from "@xstyled/styled-components";
import { FC } from "react";

export default {
  title: "Sandbox"
};

export const Index: FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <x.div bg="red-450">
        test
      </x.div>

    </ThemeProvider>
  );
};
