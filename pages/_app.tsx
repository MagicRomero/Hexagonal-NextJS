import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </>
  );
}

export default MyApp;
