// pages/_app.tsx
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import "../styles/global.scss";
import LayoutSingle from "../components/layout-single";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  // Use single layout as default

  const getLayout =
    Component.getLayout ?? ((page) => <LayoutSingle>{page}</LayoutSingle>);

  return getLayout(<Component {...pageProps} />);
}
