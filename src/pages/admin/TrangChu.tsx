import ChartTrangChu from "@/layouts/admin/TrangChu";

import AppAdmin from "@/layouts/admin/LayoutAdmin";
import AppTable from "@/layouts/admin/TableProduct";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
const Page: NextPageWithLayout = () => {
  return (
    <>
      <ChartTrangChu></ChartTrangChu>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AppAdmin>{page}</AppAdmin>;
};
export default Page;
