import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Hello</h1>
    </ThemeProvider>
  );
}
