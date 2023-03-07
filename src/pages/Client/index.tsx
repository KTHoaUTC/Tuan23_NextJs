import BannerHeader from "@/components/Client/Banner";
import LayoutClient from "@/components/Client/LayoutClient";
import MainClient from "@/components/Client/Main";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
const Page: NextPageWithLayout = () => {
  return (
    <>
      <BannerHeader></BannerHeader>
      <MainClient></MainClient>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutClient>{page}</LayoutClient>
  )
};
export default Page;
