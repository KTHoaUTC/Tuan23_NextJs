// import AppAdmin from "@/layouts/admin/LayoutAdmin";
// import React from "react";
// export default function MyApp({ Component, pageProps }: any) {
//   return (
//     <AppAdmin>
//       <Component {...pageProps} />
//     </AppAdmin>
//   );
// }

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
