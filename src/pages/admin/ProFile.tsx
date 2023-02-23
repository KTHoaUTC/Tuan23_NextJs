import ProFileAdmin from "@/layouts/admin/ProFile";
import AppAdmin from "@/layouts/admin/LayoutAdmin";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
const Page: NextPageWithLayout = () => {
  return (
    <>
      <ProFileAdmin></ProFileAdmin>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AppAdmin>{page}</AppAdmin>;
};

export default Page;
