import React, { ReactElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./ThemeUtils/Theme";
import { Typography } from "./Typography/Typography";

//@Components
import TypographyExample from "./TypographyExample";

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <TypographyExample />
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
