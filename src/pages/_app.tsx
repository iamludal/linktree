import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
