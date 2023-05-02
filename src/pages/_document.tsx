import { Body } from "@/components/layout/layout";
import { myTheme } from "@/theme";
import { ThemeProvider } from "@emotion/react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <ThemeProvider theme={myTheme}>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </ThemeProvider>
    </Html>
  );
}
