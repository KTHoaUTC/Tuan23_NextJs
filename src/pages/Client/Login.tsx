// import LoginClient from "@/components/Client/Login";
// interface IProps {
//   session: any;
// }
// export default function RootLayout({ session }: IProps) {
//   return (
//     <div>
//       <LoginClient></LoginClient>
//     </div>
//   );
// }

import LayoutClient from "@/components/Client/LayoutClient";
import LoginClient from "@/components/Client/Login";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
const Page: NextPageWithLayout = () => {
  return (
    <>
      <LoginClient></LoginClient>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutClient>{page}</LayoutClient>
  )
};
export default Page;