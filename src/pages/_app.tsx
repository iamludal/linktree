import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Component {...pageProps} />
    <Analytics />
    <SpeedInsights />
  </ChakraProvider>
);

export default App;
