import AppAdmin from "@/layouts/admin/LayoutAdmin";
import TableProduct from "@/layouts/admin/TableProduct";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
const Page: NextPageWithLayout = () => {
  return (
    <>
      <TableProduct></TableProduct>
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <AppAdmin>{page}</AppAdmin>;
};

export default Page;
