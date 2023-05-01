import "@/styles/reset.css";
import "@/styles/tailwind.css";
import { myTheme } from "@/theme";
import { ThemeProvider } from "@emotion/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={myTheme}>
      <Component {...pageProps} />

      <style jsx global>{`
        #__next {
          height: 100%;
        }
      `}</style>
    </ThemeProvider>
  );
}
