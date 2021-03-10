import { ThemeProvider } from "next-themes";
import "../styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      forcedTheme={Component.theme || undefined}
      attribute="class"
      themes={["my-light-theme", "my-dark-theme"]}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
