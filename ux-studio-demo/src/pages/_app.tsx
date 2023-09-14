import { AppProps } from "next/app";
import Head from "next/head";
import localFont from "next/font/local";
import "../styles/globals.css";

const montserratRegular = localFont({
  src: [{ path: "../../public/fonts/Montserrat-Regular.ttf" }],
  variable: "--font-montserrat-regular",
});

const montserratMedium = localFont({
  src: [{ path: "../../public/fonts/Montserrat-Medium.ttf" }],
  variable: "--font-montserrat-medium",
});

const montserratSemiBold = localFont({
  src: [{ path: "../../public/fonts/Montserrat-SemiBold.ttf" }],
  variable: "--font-montserrat-semiBold",
});

const montserratBold = localFont({
  src: [{ path: "../../public/fonts/Montserrat-Bold.ttf" }],
  variable: "--font-montserrat-bold",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
      </Head>
      <Component
        className={`${montserratRegular} ${montserratMedium} ${montserratSemiBold} ${montserratBold}`}
        {...pageProps}
      />
    </>
  );
};

export default App;
